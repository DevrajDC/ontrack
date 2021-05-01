import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import student from '../pages/LandingPage/assets/Student-Illustrator.svg'
import styles from './styles/Hero'

const useStyles = makeStyles(styles)

const Hero = () => {
  const classes = useStyles();

  return (
    <section className={classes.heroSection}>
      <div className={classes.heroContent}>
        <Grid container alignItems={'center'} justify={'center'}>
          <Grid container xs={12} sm={6} spacing={0} justify={'center'} className={classes.textGrid}>
            <div>
              <Typography variant="h2" className={classes.heroTitle}> On<span className={classes.blueText}>Track</span> </Typography>
              <Typography variant="h6" className={classes.subTitle}>LEARN | TEACH | SHARE</Typography>
              <Typography variant="subtitle1" className={classes.heroParagraph}>Discover Engineering study material and Developmental courses. Uncover Job and internship opportunities to kick start with your career.</Typography>
                <div>
                  <Button
                    variant="contained"
                    className={classes.solidButton}
                  >
                    Learn
                  </Button>
                  <Button  variant="outlined" color="primary" className={classes.outlinedButton}>
                    Sign In
                  </Button>
                </div>
             </div>
          </Grid>
          <Grid container xs={12} sm={6} spacing={0} justify={'center'}>
              <img src={student} className={classes.studentIll}/>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Hero;
