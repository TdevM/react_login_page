import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as controller from '../../controllers/Auth'

const initialValues = {email: ''}

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is required'),
});

class ForgotPasswordForm extends React.Component {
    constructor(props) {
        super(props)
    }


    onSubmit(values, actions) {
        controller.forgotPassword(values.email)
            .then((response) => {
                actions.setErrors({
                    email: response.data.message,
                });
            }).catch((error) => {
            console.log(error)
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
                                id="email"
                                label="Email Address"
                                name="email"
                                helperText={errors.email}
                                error={(errors.email === 'true')}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="email"
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={this.props.submitStyle}
                            >
                                Proceed
                            </Button>
                        </form>

                    )}
                </Formik>
            </div>
        )
    }

}


export default ForgotPasswordForm;
