import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '../components/Footer';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  font: {
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
  },
  quote: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.57)',
    textAlign: 'center',
  },
  input: {
    flex: 1,
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
  },
  cardRoot: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1E314E',
    color: 'white',
    borderRadius: '10px',
    padding: '1.75rem 3rem',
  },
  rootContainer: {
    padding: '3rem 0 1.75rem 0',
  },
  form: {
    height: '100%',
    width: '100%',
  },
  username: {
    width: '100%',
    color: '#fff',
    '&::placeholder': {
      color: '#3F51B5 !important',
    },
    borderRadius: '8px',
    padding: '10px',
    border: '2px solid #3F51B5',
    marginBottom: '0.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '7px',
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  btnSubmit: {
    margin: '0 0.5rem',
    padding: '0.5rem 5rem',
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
  },
  btnCancel: {
    margin: '0 0.5rem',
    border: '2px solid #3F51B5',
    padding: '0.5rem 5rem',
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
  },
  container: {
    padding: '2rem 4rem',
  },
  alert: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.57)',
    padding: '1rem 1rem 2rem 1rem',
  },
  note: {
    fontSize: '20px',
    color: 'rgba(255, 255, 255)',
  },
}));

function Contribute() {
  document.title = 'Contribute';
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className={classes.rootContainer}>
        <div className={`${classes.container} contribute-container`}>
          <Card
            className={`${classes.cardRoot} contribute-content`}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <CardContent>
              <Typography variant="h5" component="h1" className={classes.font}>
                Contribute your Study Materials
              </Typography>
              <Typography variant="h6" component="h6" className={classes.quote}>
                Right Knowledge When Shared Multiplies
              </Typography>
            </CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <label className={classes.label}>Full Name</label>
                <InputBase
                  className={classes.username}
                  placeholder="eg: john Doe"
                  required
                  id="firstName"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <label className={classes.label}>Email Address</label>
                <InputBase
                  className={classes.username}
                  required
                  placeholder="johndoe@gmail.com"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <label className={classes.label}>Occupation</label>
                <InputBase
                  className={classes.username}
                  required
                  placeholder="eg: Computer Engineering Student"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <label className={classes.label}>College</label>
                <InputBase
                  className={classes.username}
                  required
                  placeholder="eg: Padre College of Engineering"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <label className={classes.label}>Year of Study</label>
                <InputBase
                  className={classes.username}
                  required
                  placeholder="eg: Second Year"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <label className={classes.label}>Subject Name</label>
                <InputBase
                  className={classes.username}
                  required
                  placeholder="eg: Database Management System"
                />
              </Grid>
              <Grid item xs={12}>
                <label className={classes.label}>Google Drive Link</label>
                <InputBase
                  className={classes.username}
                  required
                  placeholder="Enter Drive Link"
                />
              </Grid>
              <div className={`${classes.alert} contribute-alert`}>
                <strong style={{ color: 'white' }}>NOTE: </strong>Please Upload
                your material to Google Drive and Share your Link with us. Make
                sure that download access to the drive Link is given. if any of
                the above fields doesn't apply according to your occupation,
                please select NA.
              </div>
              <div className={classes.btnContainer}>
                <Button
                  className={`${classes.btnSubmit} contribute-submit`}
                  style={{ color: 'white', backgroundColor: '#3F51B5' }}
                >
                  Submit
                </Button>
                <Button
                  className={`${classes.btnCancel} contribute-cancel`}
                  style={{ color: 'white' }}
                >
                  Cancel
                </Button>
              </div>
            </Grid>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contribute;
