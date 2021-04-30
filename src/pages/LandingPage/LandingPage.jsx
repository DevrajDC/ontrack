import React from 'react';
import { makeStyles } from '@material-ui/core';

import Hero from '../../components/Hero';
import ServiceCard from '../../components/ServiceCard';
import TestimonialCard from '../../components/TestimonialCard';
import ButtonBanner from '../../components/ButtonBanner';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

import { ReactComponent as CourseIllustration } from './assets/course.svg';
import { ReactComponent as BookIllustration } from './assets/open-book.svg';
import { ReactComponent as JobIllustration } from './assets/jobs.svg';

const useStyles = makeStyles({
  quoteBanner: {
    background: '#1E314E',
    fontSize: '1.2rem',
    color: '#99B2D8',
    padding: '3rem',
    textAlign: 'center',
  },
  quoteText: {
    width: '65%',
    margin: '0 auto',
  },
  sectionHeading: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  sectionContainer: {
    padding: '4rem',
    textAlign: 'center',
  },
  sectionCards: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Hero />
      <div className={`${classes.quoteBanner} quote-container`}>
        <p className={`${classes.quoteText} quote-text`}>
          “Knowledge is power. Information is liberating. Education is the
          premise of progress, in every society, in every family” – Kofi Annan
        </p>
      </div>
      <section className={`${classes.sectionContainer} section-container`}>
        <h1 className={classes.sectionHeading}>Services</h1>
        <div className={classes.sectionCards}>
          <ServiceCard
            title="Courses"
            description="Coming soon! Stay connected!"
          >
            <CourseIllustration className="service-illustration" />
          </ServiceCard>
          <ServiceCard
            title="Free Study Material"
            description="Save and study any time you want!"
          >
            <BookIllustration className="service-illustration" />
          </ServiceCard>
          <ServiceCard
            title="Jobs & Internships"
            description="Find the right opportunity for you!"
          >
            <JobIllustration className="service-illustration" />
          </ServiceCard>
        </div>
      </section>
      <ButtonBanner
        heading="Right Knowledge When Shared, Multiplies."
        description="Thousands of students are searching for good quality notes at this moment. Help your peers by sharing your study material. Win a chance of being the top contributor of the month!"
        buttonText="Contribute"
        route='/contribute'
      />
      <section className={`${classes.sectionContainer} section-container`}>
        <h1 className={classes.sectionHeading}>Testimonials</h1>
        <div className={classes.sectionCards}>
          <TestimonialCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat"
            name="FULL NAME"
          />
          <TestimonialCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat"
            name="FULL NAME"
          />
          <TestimonialCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat"
            name="FULL NAME"
          />
        </div>
      </section>
      <ButtonBanner
        heading="Let’s Help The Society With Free education"
        description="We are aiming to provide notes and study materials to the students for free. Help us to reach more students with new valuable content."
        buttonText="Donate To Us"
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default LandingPage;
