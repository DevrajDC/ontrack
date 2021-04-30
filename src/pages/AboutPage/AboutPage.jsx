import React from 'react';
import TeamCard from '../../components/TeamCard';
import Footer from '../../components/Footer';
import { makeStyles, Button } from '@material-ui/core';
import { ReactComponent as Illustration } from './assets/illustration.svg';
import './AboutPage.css';

const useStyles = makeStyles({
  solidButton: {
    background: '#3F51B5',
    textTransform: 'none',
    color: 'white',
    padding: '0.5rem 2rem',
    '&:hover': {
      background: '#3F51B5',
    },
  },
  sectionHeading: {
    textAlign: 'center',
    color: 'white',
  },
});

const AboutPage = () => {
  const classes = useStyles();

  return (
    <>
      <section className="about">
        <div className="about-banner">
          <div className="about-banner-illustration">
            <Illustration />
          </div>
          <div className="about-banner-text">
            <h1>ABOUT US</h1>
            <p>
              We help you to find the best suitable notes and study material.
              Enjoy our website while searching for any topic you want. Join
              with us to learn the best and contribute your notes to help your
              friends and juniors to study better.
            </p>
            <Button variant="contained" className={classes.solidButton}>
              Start Learning
            </Button>
          </div>
        </div>
        <div className="about-container">
          <div className="about-container-left">
            <h3>Our Goal</h3>
            <p>1. To educate people in tech</p>
            <p>2. Remove myths about tech education</p>
            <p>
              3. Spread awareness about opportunities in tier two & tier three
              cities
            </p>
            <p>4. Introduce tech content that is helpful for everyone</p>
          </div>
          <div className="about-container-right">
            <h3>Our Mission</h3>
            <p>
              To empower people and specially under represented groups by
              educating them on technology and related necessary skills.
            </p>
            <p>
              To create local opportunity, growth and impact via tech education
              in every country around the world and to bring diversity in tech
              domain.
            </p>
          </div>
        </div>
        <div className="about-team">
          <h1 className={classes.sectionHeading}>OUR TEAM</h1>
          <div className="about-team-container">
            <TeamCard
              name="Devraj Chatribin"
              imageUrl="https://github.com/DevrajDC.png"
              designation="Founder and Design Lead"
              social={{
                linkedin: 'https://google.com',
                instagram: 'https://google.com',
                twitter: 'https://google.com',
              }}
            />
            <TeamCard
              name="Jaagrav Seal"
              imageUrl="https://github.com/DevrajDC.png"
              designation="Lunatic Lead Developer"
              social={{
                linkedin: 'https://google.com',
                instagram: 'https://google.com',
                twitter: 'https://google.com',
              }}
            />
            <TeamCard
              name="Samiksha Pawar"
              imageUrl="https://github.com/DevrajDC.png"
              designation="Graphic Designer"
              social={{
                linkedin: 'https://google.com',
                instagram: 'https://google.com',
                twitter: 'https://google.com',
              }}
            />
            <TeamCard
              name="Krupashri Koli"
              imageUrl="https://github.com/DevrajDC.png"
              designation="Content Writer"
              social={{
                linkedin: 'https://google.com',
                instagram: 'https://google.com',
                twitter: 'https://google.com',
              }}
            />
            <TeamCard
              name="Nitin Ranganath"
              imageUrl="https://github.com/DevrajDC.png"
              designation="Development Team"
              social={{
                linkedin: 'https://google.com',
                instagram: 'https://google.com',
                twitter: 'https://google.com',
              }}
            />
            <TeamCard
              name="Udaikiran R"
              imageUrl="https://github.com/DevrajDC.png"
              designation="Development Team"
              social={{
                linkedin: 'https://google.com',
                instagram: 'https://google.com',
                twitter: 'https://google.com',
              }}
            />
            <TeamCard
              name="Akash Arelli"
              imageUrl="https://github.com/DevrajDC.png"
              designation="Development Team"
              social={{
                linkedin: 'https://google.com',
                instagram: 'https://google.com',
                twitter: 'https://google.com',
              }}
            />
            <TeamCard
              name="Pragati Agarwal"
              imageUrl="https://github.com/DevrajDC.png"
              designation="Content Writer"
              social={{
                linkedin: 'https://google.com',
                instagram: 'https://google.com',
                twitter: 'https://google.com',
              }}
            />
          </div>
        </div>
        <div className="about-join">
          <h1>Join Our Team</h1>
          <p>
            We need helping hands to reach and impact more people. If you are A
            enthusiast, join now
          </p>
          <Button variant="contained" className={classes.solidButton}>
            Join Now
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
