import React from 'react';
import { LinkedIn, Instagram, Twitter } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  teamCard: {
    background: '#1e314e',
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px',
    textAlign: 'center',
  },
  teamCardPhoto: {
    borderRadius: '50%',
    height: '65%',
    width: '65%',
    border: '7px solid #1D203B',
  },
  teamCardName: {
    color: 'white',
    margin: '1rem 0 0.25rem 0',
    fontSize: '1.25rem',
    fontWeight: 600,
  },
  teamCardDesignation: {
    color: '#99B2D8',
    fontWeight: 400,
  },
  teamCardSocials: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  teamCardIcon: {
    fill: 'white',
    margin: '1.5rem 1rem 0 1rem',
  },
});

const TeamCard = ({ imageUrl, name, designation, social }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.teamCard} team-card`}>
      <img src={imageUrl} className={classes.teamCardPhoto} alt="Team Avatar" />
      <div>
        <h1 className={classes.teamCardName}>{name}</h1>
        <h5 className={classes.teamCardDesignation}>{designation}</h5>
        <div className={`${classes.teamCardSocials} team-socials`}>
          <a href={social.linkedin} className={classes.socialIconContainer}>
            <LinkedIn className={classes.teamCardIcon} />
          </a>
          <a href={social.instagram}>
            <Instagram className={classes.teamCardIcon} />
          </a>
          <a href={social.twitter}>
            <Twitter className={classes.teamCardIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
