import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  heroSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    color: 'white',
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  blueText: {
    color: '#3F51B5',
  },
  heroTitle: {
    fontSize: ' 60px',
    fontWeight: 500,
  },
  heroParagraph: {
    margin: '1rem 0',
    color: '#99B2D8',
    fontSize: '1.3rem',
    width: '450px',
    fontWeight: 400,
  },
  solidButton: {
    fontSize: '1rem',
    background: '#3F51B5',
    border: '3px solid #3F51B5',
    color: 'white',
    '&:hover': {
      background: '#3F51B5',
    },
    textTransform: 'none',
    margin: '0.5rem 0.5rem',
    padding: '0.25rem 2rem',
  },
  outlinedButton: {
    color: 'white',
    fontSize: '1rem',
    textTransform: 'none',
    border: '3px solid #3F51B5',
    margin: '0.5rem 0.5rem',
    padding: '0.25rem 2rem',
    '&:hover': {
      border: '3px solid #3F51B5',
    },
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <section className={classes.heroSection}>
      <div className={classes.heroContent}>
        <h1 className={classes.heroTitle}>
          On<span className={classes.blueText}>Track</span>
        </h1>
        <h3>LEARN | TEACH | SHARE</h3>
        <p className={`${classes.heroParagraph} hero-text`}>
          Find all your study materials right here and start learning now!!!
        </p>
        <div>
          <Button
            variant="outlined"
            color="primary"
            className={classes.outlinedButton}
          >
            Learn
          </Button>
          <Button variant="contained" className={classes.solidButton}>
            Sign In
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
