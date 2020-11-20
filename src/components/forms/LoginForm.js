import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import * as controller from '../../controllers/Auth'
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const initialValues = {email: '', password: ''}

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is required'),
    password: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .required('Password is required')
});

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
    }


    onSubmit(values, actions) {
        controller.login(values.email, values.password)
            .then((response) => {
                actions.setErrors({
                    password: 'Login Successful',
                })
            }).catch((error) => {
            if (error.response.status === 404) {
                actions.setErrors({
                    email: error.response.data.message,
                });
            } else if (error.response.status === 400) {
                actions.setErrors({
                    password: error.response.data.message,
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
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                helperText={errors.password}
                                error={(errors.password === 'true')}
                                label="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={this.props.submitStyle}
                            >
                                Log In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/forgotPassword" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>

                    )}
                </Formik>
            </div>
        )
    }

}


export default LoginForm;
