import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as controller from '../../controllers/Auth'

const initialValues = {password: '', passwordConfirm: ''}

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .required('Password is required')
        .matches(('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W\\_])[A-Za-z\\d\\W\\_]{8,}$'),
            'Password must contain at least one lowercase, one uppercase,' +
            ' one number one special character, and no whitespaces'),
    passwordConfirm: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .required('Password is required')
        .matches(('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W\\_])[A-Za-z\\d\\W\\_]{8,}$'),
            'Password must contain at least one lowercase, one uppercase,' +
            ' one number one special character, and no whitespaces')
        .oneOf([Yup.ref('password'), null], "Confirm password does not match")

});

class ResetPasswordForm extends React.Component {
    constructor(props) {
        super(props)
    }


    onSubmit(values, actions) {
        const resetPathParams = window.location.pathname.split('/')
        const userId = resetPathParams[3]
        const resetToken = resetPathParams[4]
        controller.resetPassword(
            userId,
            resetToken,
            values.password
        ).then((response) => {
            actions.setErrors({
                passwordConfirm: response.data.message,
            });
        }).catch((error) => {
            if (error.response.status === 403) {
                actions.setErrors({
                    passwordConfirm: error.response.data.message,
                });
            } else {
                actions.setErrors({
                    passwordConfirm: 'Something went wrong!',
                });
            }
        })
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={this.onSubmit}>
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <form className={this.props.formStyle} onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                helperText={errors.password}
                                type="password"
                                error={(errors.password === 'true')}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="passwordConfirm"
                                label="Confirm Password"
                                name="passwordConfirm"
                                type="password"
                                helperText={errors.passwordConfirm}
                                error={(errors.passwordConfirm === 'true')}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={this.props.submitStyle}
                            >
                                Reset Password
                            </Button>
                        </form>

                    )}
                </Formik>
            </div>
        )
    }

}


export default ResetPasswordForm;
