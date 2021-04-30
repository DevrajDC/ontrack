import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  serviceCard: {
    background: '#1E314E',
    padding: '2rem',
    borderRadius: '8px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem',
  },
  serviceCardTitle: {
    color: 'white',
    marginTop: '1rem',
  },
  serviceCardText: {
    color: '#99B2D8',
  },
  button: {
    fontSize: '1rem',
    background: '#3F51B5',
    color: 'white',
    '&:hover': {
      background: '#3F51B5',
    },
    textTransform: 'none',
    margin: '1rem 0',
    padding: '0.2rem 1.5rem',
  },
});

const ServiceCard = ({ children, title, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.serviceCard}>
      {children}
      <h3 className={classes.serviceCardTitle}>{title}</h3>
      <p className={classes.serviceCardText}>{description}</p>
      <Button variant="contained" className={classes.button}>
        Open
      </Button>
    </div>
  );
};

export default ServiceCard;
