import React from 'react';
import { makeStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import { BookmarkBorder, ShareOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
  courseCard: {
    background: '#1E314E',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    maxWidth: '380px',
    borderRadius: '8px',
    color: 'white',
    margin: '1rem 0',
  },
  courseImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '1.5rem',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  courseTitle: {
    fontSize: '1.25rem',
  },
  courseDescription: {
    color: '#99B2D8',
    fontSize: '0.8rem',
    marginBottom: '1rem',
  },
  progressText: {
    color: '#99B2D8',
    marginTop: '0.5rem',
    fontSize: '0.8rem',
  },
  button: {
    fontSize: '1rem',
    background: '#3F51B5',
    color: 'white',
    '&:hover': {
      background: '#3F51B5',
    },
    textTransform: 'none',
    margin: '0.75rem 0',
    borderRadius: '8px',
    maxWidth: '150px',
  },
  courseIcon: {
    fill: '#407BFF',
    margin: '0 0.5rem',
  },
});

const CourseCard = ({ title, image, description, progress, link }) => {
  const classes = useStyles();

  return (
    <div className={classes.courseCard}>
      <img className={classes.courseImage} src={image} />
      <div className={classes.titleContainer}>
        <h1 className={classes.courseTitle}>{title}</h1>
        <div>
          <BookmarkBorder className={classes.courseIcon} />
          <ShareOutlined className={classes.courseIcon} />
        </div>
      </div>
      <p className={classes.courseDescription}>{description}</p>
      <LinearProgress variant="determinate" value={progress} />
      <p className={classes.progressText}>{progress}% complete</p>
      <Button variant="contained" className={classes.button}>
        Open
      </Button>
    </div>
  );
};

export default CourseCard;
