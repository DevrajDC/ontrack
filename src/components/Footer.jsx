import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import FontAwesome from 'react-fontawesome';

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

const useStyles = makeStyles(() => ({
  footer: {
    height: 'fit-content',
    width: '100vw',
    backgroundColor: '#1E314E',
    padding: '20px 40px',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 0,
    },
  },
  responsiveGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(300px, 1fr))',
    gridGap: '20px',
    paddingBottom: '30px',
  },
  root: {
    backgroundColor: '#1D203B',
    padding: '2px 4px 2px 15px',
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    width: 'calc(100% - 10px)',
    borderRadius: '30px',
    zIndex: 4,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
  },
  iconButton: {
    color: 'white',
  },
  subheading: {
    fontSize: 20,
    color: '#407BFF',
  },
  subcontent: {
    color: '#99B2D8',
    margin: '10px 0',
  },
  font: {
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'left',
  },
  learnmore: {
    backgroundColor: '#3f51b5 !important',
    color: 'white',
    padding: '5px 15px',
  },
  quickLinks: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  },
  endFooter: {
    height: 'fit-content',
    width: '100%',
    padding: '25px 10px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  copyright: {
    display: 'inline-block',
    color: '#99B2D8',
    margin: 'auto auto auto 0',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      textAlign: 'center',
    },
  },
  socialMediaLinks: {
    display: 'inline-block',
    height: 'fit-content',
    width: 'fit-content',
    textAlign: 'center',
    margin: '0 0 0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '20px auto',
    },
  },
  socialIcon: {
    display: 'inline-block',
    height: '37px',
    width: '37px',
    backgroundColor: '#fff',
    color: '#1E314E',
    fontSize: '25px',
    marginLeft: '15px',
    borderRadius: '50%',
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.responsiveGrid}>
        <div>
          <br />
          <div className={classes.subheading}>About</div>
          <div className={classes.subcontent}>
            We welcome you to our website "ONTRACK" as the name suggests it
            helps its users to get back to track and get working. We provide
            notes ,study materials specially for computer engineering students
            of all years. we also provide with photography pictures and ideas
            and Quotes which you will defininty love.
          </div>
        </div>
        <div>
          <br />
          <div className={classes.subheading}>
            Please feel free to contribute by sharing your study materials with
            us.
          </div>
          <div className={classes.subcontent}>
            Fill up the Google Form given below to contribute
          </div>
          <Button className={classes.learnmore + ' ' + classes.font}>
            <Link to='/contribute'>Contribute</Link>
          </Button>
        </div>
        <div>
          <br />
          <div className={classes.subheading}>Email Subscription</div>
          <div className={classes.subcontent}>
            Be the first to get notified on upcoming events, scholarship or any
            news latest updates.
          </div>
          <Paper component='form' className={classes.root}>
            <InputBase className={classes.input} placeholder='Email Address' />
            <IconButton className={classes.iconButton} aria-label='search'>
              <SendRoundedIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
      <hr
        style={{
          display: 'block',
          height: '1px',
          border: 0,
          borderTop: '1px solid #3A4BDF',
          margin: '0',
          padding: 0,
        }}
      />
      <div className={classes.endFooter}>
        <div className={classes.copyright}>
          Copyright © 2020 All Rights Reserved by ON-TRACK.
        </div>
        <center>
          <div className={classes.socialMediaLinks}>
            <a className={classes.socialIcon} href='#linkedin'>
              <FontAwesome name='linkedin' />
            </a>
            <a className={classes.socialIcon} href='#youtube'>
              <FontAwesome name='youtube-play' />
            </a>
            <a className={classes.socialIcon} href='#instagram'>
              <FontAwesome name='instagram' />
            </a>
            <a className={classes.socialIcon} href='#twitter'>
              <FontAwesome name='twitter' />
            </a>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Footer;
