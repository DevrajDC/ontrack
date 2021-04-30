import React from 'react'
import { Link , useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    signInForm: {
        position: 'absolute',
        top: 100,
        margin: 'auto',
        right: '0',
        left: '0',
        height: 'fit-content(100% - 200px)',
        width: 'calc(100% - 60px)',
        maxWidth: '48pc',
        backgroundColor: '#1E314E',
        borderRadius: '15px',
        padding: '20px'
    },
    authSelector: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    },
    username: {
        width: 'calc(100% - 30px)',
        marginBottom: '20px',
        color: '#fff',
        '&::placeholder': {
            color: '#3F51B5 !important',
        },
        borderRadius: '10px',
        padding: '10px',
        border: '2px solid #3F51B5',
        maxWidth: '46pc'
    },
    form: {
        height: '100%',
        width: '100%',
        maxWidth: '30pc'
    }
}));
function SignUp() {
    let history = useHistory();
    const classes = useStyles();

    return (
        <div>
            <center>
                <div className={classes.signInForm}>
                    <div className={classes.authSelector}>
                        <Link to="/signup"><div style={{ color: '#fff', paddingBottom: 20, borderBottom: '2px solid #3F51B5' }}>Sign Up</div></Link>
                        <Link to="/signin"><div style={{ color: '#fff', }}>Sign In</div></Link>
                    </div>
                    <br />
                    <div className={classes.form}>
                        <div style={{ textAlign: 'left', color: 'white', margin: '0 0 5px 15px', fontSize: 13 }}>Email Address</div>
                        <InputBase
                            className={classes.username}
                            placeholder="Email Address"
                        />
                        <div style={{ textAlign: 'left', color: 'white', margin: '0 0 5px 15px', fontSize: 13 }}>Create Password</div>
                        <InputBase
                            className={classes.username}
                            placeholder="Password"
                        />
                        <div style={{ textAlign: 'left', color: 'white', margin: '0 0 5px 15px', fontSize: 13 }}>Confirm Password</div>
                        <InputBase
                            className={classes.username}
                            placeholder="Password"
                        />
                        <Button className={classes.username} style={{ color: 'white', backgroundColor: '#3F51B5' }} onClick={() => { history.push('/signup') }}>Sign Up</Button>
                        <center style={{ marginBottom: 20, color: 'white' }}>Or</center>
                        <Button className={classes.username} style={{ color: 'white', backgroundColor: '#3F51B5' }}>Sign Up with Google</Button>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default SignUp;
