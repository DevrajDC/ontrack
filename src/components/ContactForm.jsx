import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as ContactIllustration } from '../pages/LandingPage/assets/contact.svg';

const useStyles = makeStyles(theme => ({
  formGrid: {
    display: 'grid',
    gridGap: '20px',
    gridTemplateRows: 'repeat(4, auto)',
    height: '100%',
    width: '100%',
  },
  contactContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '3rem 5rem',
    [theme.breakpoints.down('md')]: {
      padding: '3rem 2rem'
    }
  },
  contactForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  contactFormTitle: {
    color: 'white',
  },
  contactFormSubtitle: {
    color: '#99B2D8',
    fontSize: '0.8rem',
    fontWeight: 400,
    marginBottom: '2rem',
  },
  contactFormInput: {
    '& *': {
      fontFamily: 'Poppins, sans-serif',
    },
    '& label': {
      color: 'white !important',
      padding: '0 4px',
    },
    '& input': {
      color: 'white !important',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#3F51B5 !important',
        borderWidth: '3px !important'
      },
    },
  },
  submitBtn: {
    width: 'fit-content',
    padding: '0.8rem 3rem',
    backgroundColor: '#3F51B5 !important',
    color: '#fff',
    [theme.breakpoints.down('md')]: {
      padding: '0.8rem 2rem',
      margin: 'auto'
    }
  },
  messageInput: {
    height: 'fit-content'
  }
}));

const ContactForm = () => {
  const classes = useStyles();

  return (
    <section className={`${classes.contactContainer} contact-container`}>
      <ContactIllustration className="contact-illustration" />
      <div className={classes.contactForm}>
        <h1 className={classes.contactFormTitle}>Contact Us</h1>
        <h5 className={classes.contactFormSubtitle}>
          Please send your feedback or queries!
        </h5>
        <form className={classes.formGrid}>
          <TextField
            label="Full name"
            className={classes.contactFormInput}
            variant="outlined"
          />
          <TextField
            label="Email Address"
            className={classes.contactFormInput}
            variant="outlined"
          />
          <TextField
            label="Message"
            className={classes.contactFormInput + " " + classes.messageInput}
            variant="outlined"
            rows={6}
            multiline
          />
          <Button className={classes.submitBtn}>Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
