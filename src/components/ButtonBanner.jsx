import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
  bannerContainer: {
    padding: '4rem',
    background: '#1E314E',
    textAlign: 'center',
    color: 'white',
  },
  bannerContent: {
    width: '65%',
    margin: '0 auto',
  },
  bannerTitle: {
    fontSize: '1.5rem',
  },
  bannerText: {
    margin: '1rem',
    color: '#99B2D8',
    fontSize: '1rem',
  },
  button: {
    fontSize: '1.2rem',
    background: '#3F51B5',
    color: 'white',
    '&:hover': {
      background: '#3F51B5',
    },
    textTransform: 'none',
    margin: '0.75rem 0',
    padding: '0.35rem 2rem',
    borderRadius: '8px',
  },
});



const ButtonBanner = ({ heading, description, buttonText, route }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.bannerContainer} banner-container`}>
      <div className={`${classes.bannerContent} banner-content`}>
        <h3 className={classes.bannerTitle}>{heading}</h3>
        <p className={classes.bannerText}>{description}</p>
        <Button variant="contained" className={classes.button}>
        <Link to={route}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default ButtonBanner;
