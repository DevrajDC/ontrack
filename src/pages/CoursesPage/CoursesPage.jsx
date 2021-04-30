import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core';

import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import htmlImage from './assets/html.png';
import cssImage from './assets/css.png';
import jsImage from './assets/js.png';
import uiImage from './assets/ui.png';
import reactImage from './assets/react.png';
import pythonImage from './assets/python.png';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 848,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles({
  coursesPage: {
    padding: '3rem 5rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
  },
  coursePageHeading: {
    color: 'white',
    textAlign: 'center',
    padding: '3rem 0 2rem 0',
    [theme.breakpoints.down('sm')]: {
      padding: '5rem 0 1rem 0',
    },
    fontSize: '1.75rem',
    textTransform: 'uppercase',
  },
  coursesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
});

const CoursesPage = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.coursesPage}>
        <h1 className={classes.coursePageHeading}>Courses</h1>
        <div className={classes.coursesContainer}>
          <CourseCard
            title="HTML Full Course"
            description="“Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data."
            image={htmlImage}
            progress={70}
          />
          <CourseCard
            title="CSS Full Course"
            description="“Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data."
            image={cssImage}
            progress={70}
          />
          <CourseCard
            title="JAVASCRIPT Full Course"
            description="“Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data."
            image={jsImage}
            progress={70}
          />
          <CourseCard
            title="REACT Full Course"
            description="“Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data."
            image={reactImage}
            progress={70}
          />
          <CourseCard
            title="UI/UX Full Course"
            description="“Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data."
            image={uiImage}
            progress={70}
          />
          <CourseCard
            title="PYTHON Full Course"
            description="“Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data."
            image={pythonImage}
            progress={70}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CoursesPage;
