import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import Typography from "@material-ui/core/Typography";
import ResetPasswordForm from "./forms/ResetPasswordForm";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function ResetPassword() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <FlipCameraAndroidIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Reset Password
                </Typography>
                <ResetPasswordForm formStyle={classes.form} submitStyle={classes.submit}/>
            </div>
        </Container>
    )
}

