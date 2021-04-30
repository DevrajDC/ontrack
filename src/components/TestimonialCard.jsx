import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  testimonialCard: {
    position: 'relative',
    background: '#1E314E',
    padding: '2rem',
    borderRadius: '8px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1.5rem 1rem',
  },
  avatarStyle: {
    position: 'absolute',
    width: theme.spacing(7),
    height: theme.spacing(7),
    top: '-1.5rem',
  },
  testimonialText: {
    color: '#99B2D8',
    padding: '1rem 2rem',
    fontWeight: 400,
    textAlign: 'center',
  },
  testimonialName: {
    color: '#3F51B5',
  },
}));

const TestimonialCard = ({ avatarUrl, text, name }) => {
  const classes = useStyles();
  return (
    <div className={classes.testimonialCard}>
      <Avatar className={classes.avatarStyle}>N</Avatar>
      <p className={classes.testimonialText}>"{text}”</p>
      <h4 className={classes.testimonialName}>- {name}</h4>
    </div>
  );
};

export default TestimonialCard;
