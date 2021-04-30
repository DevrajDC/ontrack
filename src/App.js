import React from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Divider from '@material-ui/core/Divider';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Tracks from './pages/StudyMaterials/StudyMaterials';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import Contribute from './screens/ContributeScreen.jsx'

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
  startIcon: {
    color: '#3A4BDF',
  },
  icon: {
    color: '#3A4BDF',
    fontSize: '30px',
  },
  mobileMenu: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    margin: 'auto',
    backgroundColor: 'rgb(0,0,0,0.3)',
    zIndex: 5,
    transition: '.4s',
    '&.closed': {
      backgroundColor: 'transparent',
      backdropFilter: 'none',
      pointerEvents: 'none',
    },
  },
  mobileMenuDrawer: {
    position: 'absolute',
    height: '100%',
    width: '300px',
    margin: 'auto',
    backgroundColor: '#1E314E',
    transform: 'translate(-100%)',
    transition: '.4s',
  },
  divider: {
    backgroundColor: '#354866',
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 130,
  },
  menuLinks: {
    position: 'absolute',
    margin: 'auto',
    height: '500px',
    top: '160px',
    left: 0,
    right: 0,
    display: 'grid',
    gridTemplateRows: 'repeat(auto-fit, 50px)',
    padding: '0 30px',
  },
  bottomNavBar: {
    position: 'fixed',
    height: '60px',
    margin: 'auto',
    bottom: '-5px',
    zIndex: 4,
    width: '100%',
    backgroundColor: '#1E314E',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  bna: {
    color: '#99B2D8',
  },
  menuText: {
    color: '#99B2D8',
    '&.selected': {
      color: '#3F51B5',
    },
    marginRight: 30,
  },
}));
function App(props) {
  const classes = useStyles();
  let paths = [
    '/',
    '/notes',
    '/about',
    '/profile',
    '/contributors',
    '/contact',
  ];
  let [pageValue, setPageValue] = React.useState(
    paths.indexOf(window.location.pathname)
  );

  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  let homeLink = React.useRef(),
    aboutLink = React.useRef(),
    notesLink = React.useRef(),
    contributorsLink = React.useRef(),
    profileLink = React.useRef();
  let homeDesktopLink = React.useRef(),
    aboutDesktopLink = React.useRef(),
    notesDesktopLink = React.useRef(),
    contributorsDesktopLink = React.useRef(),
    profileDesktopLink = React.useRef();

  React.useEffect(() => {
    highlightPage(pageValue);
  }, [pageValue]);

  function highlightPage(pageValueNo) {
    // setPageValue(paths.indexOf(pageValueNo));
    homeLink.current.classList.remove('selected');
    aboutLink.current.classList.remove('selected');
    notesLink.current.classList.remove('selected');
    contributorsLink.current.classList.remove('selected');
    profileLink.current.classList.remove('selected');

    homeDesktopLink.current.classList.remove('selected');
    aboutDesktopLink.current.classList.remove('selected');
    notesDesktopLink.current.classList.remove('selected');
    contributorsDesktopLink.current.classList.remove('selected');
    profileDesktopLink.current.classList.remove('selected');
    switch (pageValueNo) {
      case 0:
        homeLink.current.classList.add('selected');
        homeDesktopLink.current.classList.add('selected');
        break;
      case 1:
        notesLink.current.classList.add('selected');
        notesDesktopLink.current.classList.add('selected');
        break;
      case 2:
        aboutLink.current.classList.add('selected');
        aboutDesktopLink.current.classList.add('selected');
        break;
      case 3:
        profileLink.current.classList.add('selected');
        profileDesktopLink.current.classList.add('selected');
        break;
      case 4:
        contributorsLink.current.classList.add('selected');
        contributorsDesktopLink.current.classList.add('selected');
        break;
      default:
    }
  }

  function BottomNavBar(x) {
    const [navValue, setNavValue] = React.useState(0);
    let history = useHistory();

    React.useEffect(() => {
      console.log(x);
      setNavValue(x.open);
    }, []);

    function navigateTo(path) {
      history.push(path);
      highlightPage(paths.indexOf(path));
    }
    return (
      <BottomNavigation
        value={navValue}
        onChange={(event, newValue) => {
          setNavValue(newValue);
        }}
        showLabels
        className={classes.bottomNavBar}
      >
        <BottomNavigationAction
          className={classes.bna}
          label="Home"
          icon={<HomeRoundedIcon />}
          onClick={() => {
            navigateTo('/');
          }}
        />
        <BottomNavigationAction
          className={classes.bna}
          label="Notes"
          icon={<LibraryBooksRoundedIcon />}
          onClick={() => {
            navigateTo('/notes');
          }}
        />
        <BottomNavigationAction
          className={classes.bna}
          label="About"
          icon={<InfoRoundedIcon />}
          onClick={() => {
            navigateTo('/about');
          }}
        />
        <BottomNavigationAction
          className={classes.bna}
          label="Profile"
          icon={<PersonRoundedIcon />}
          onClick={() => {
            navigateTo('/profile');
          }}
        />
      </BottomNavigation>
    );
  }

  function SideBar() {
    const [mmOpen, setmmOpen] = React.useState(false);
    let openMenu = React.useRef(),
      mobileMenuDrawer = React.useRef();

    React.useEffect(() => {
      if (!mmOpen) {
        openMenu.current.classList.add('closed');
        mobileMenuDrawer.current.style.transform = 'translateX(-100%)';
      } else {
        openMenu.current.classList.remove('closed');
        mobileMenuDrawer.current.style.transform = 'translateX(0%)';
      }
    }, [mmOpen]);

    return (
      <div>
        <div className="tracks-header-desktop">
          <Link
            to="/"
            onClick={() => {
              setPageValue(0);
            }}
          >
            <div
              style={{
                position: 'absolute',
                margin: 'auto',
                height: 'fit-content',
                width: 'fit-content',
                zIndex: '4',
                left: 20,
                top: 12,
                color: 'white',
                fontSize: 20,
              }}
            >
              On<highL>Track</highL>
            </div>
          </Link>
          <div
            className="nav-links"
            style={{
              position: 'absolute',
              margin: 'auto',
              top: 15,
              left: 130,
            }}
          >
            <Link
              ref={homeDesktopLink}
              className={classes.menuText}
              to="/"
              onClick={() => {
                setPageValue(0);
              }}
            >
              Home
            </Link>
            <Link
              ref={aboutDesktopLink}
              className={classes.menuText}
              to="/about"
              onClick={() => {
                setPageValue(2);
              }}
            >
              About
            </Link>
            <Link
              ref={notesDesktopLink}
              className={classes.menuText}
              to="/notes"
              onClick={() => {
                setPageValue(1);
              }}
            >
              Notes
            </Link>
            <Link
              ref={contributorsDesktopLink}
              className={classes.menuText}
              to="/contributors"
              onClick={() => {
                setPageValue(4);
              }}
            >
              Contributors
            </Link>
            <Link
              ref={profileDesktopLink}
              className={classes.menuText}
              to="/profile"
              onClick={() => {
                setPageValue(3);
              }}
            >
              Profile
            </Link>
          </div>
          <div
            style={{
              height: 'fit-content',
              width: '240px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              margin: '10px 50px auto auto',
            }}
          >
            <center>
              <Link to="/signin">
                <div
                  style={{
                    textDecoration: 'none',
                    border: '2px solid #3A4BDF',
                    width: 'calc(100% - 20px)',
                    borderRadius: 30,
                    fontSize: 13,
                    padding: '6px',
                    verticalAlign: 'middle',
                    color: 'white',
                  }}
                >
                  Sign In
                </div>{' '}
              </Link>
            </center>
            <center>
              <Link to="/signup">
                <div
                  style={{
                    textDecoration: 'none',
                    background: '#3A4BDF',
                    width: 'calc(100% - 20px)',
                    borderRadius: 30,
                    fontSize: 13,
                    padding: '7px',
                    verticalAlign: 'middle',
                    color: 'white',
                  }}
                >
                  Sign Up
                </div>
              </Link>
            </center>
          </div>
          <FormControlLabel
            color="primary"
            className="theme-switch"
            control={
              <Checkbox
                color="primary"
                icon={<WbSunnyIcon color="primary" className={classes.icon} />}
                checkedIcon={
                  <WbSunnyOutlinedIcon
                    color="primary"
                    className={classes.icon}
                  />
                }
              />
            }
          />
        </div>
        <div className="tracks-header-mobile">
          <IconButton
            className={classes.startIcon}
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <MenuRoundedIcon
              style={{
                fontSize: '30',
              }}
              onClick={() => {
                setmmOpen(!mmOpen);
              }}
            />
          </IconButton>
          <div
            className="branding-name"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            On<highL>Track</highL>
          </div>
          <FormControlLabel
            color="primary"
            className="theme-switch"
            data-aos="fade-left"
            data-aos-duration="500"
            control={
              <Checkbox
                color="primary"
                icon={<WbSunnyIcon color="primary" className={classes.icon} />}
                checkedIcon={
                  <WbSunnyOutlinedIcon
                    color="primary"
                    className={classes.icon}
                  />
                }
              />
            }
          />
        </div>
        <div className={classes.mobileMenu + ' closed'} ref={openMenu}>
          <div className={classes.mobileMenuDrawer} ref={mobileMenuDrawer}>
            <IconButton className={classes.startIcon}>
              <CloseRoundedIcon
                style={{
                  fontSize: '30',
                }}
                onClick={() => {
                  setmmOpen(!mmOpen);
                }}
              />
            </IconButton>
            <div
              style={{
                position: 'absolute',
                height: 'fit-content',
                width: 'fit-content',
                fontSize: '30px',
                margin: 'auto',
                right: 0,
                left: 0,
                top: '70px',
                color: '#fff',
              }}
            >
              On<highL>Track</highL>
            </div>
            <Divider className={classes.divider} />
            <div className={classes.menuLinks}>
              <Link
                className={classes.menuText}
                ref={homeLink}
                style={{
                  fontSize: 17,
                  padding: '5px 0',
                  display: 'flex',
                  justifyContent: 'right',
                }}
                to="/"
                onClick={() => {
                  setPageValue(0);
                }}
              >
                <HomeRoundedIcon style={{ fontSize: 30 }} />
                <div
                  style={{ display: 'inline-block', margin: '5px 0 0 10px' }}
                >
                  Home
                </div>
              </Link>
              <Link
                className={classes.menuText}
                ref={aboutLink}
                style={{
                  fontSize: 17,
                  padding: '5px 0',
                  display: 'flex',
                  justifyContent: 'right',
                }}
                to="/about"
                onClick={() => {
                  setPageValue(2);
                }}
              >
                <InfoRoundedIcon style={{ fontSize: 30 }} />
                <div
                  style={{ display: 'inline-block', margin: '5px 0 0 10px' }}
                >
                  About Us
                </div>
              </Link>
              <Link
                className={classes.menuText}
                ref={notesLink}
                style={{
                  fontSize: 17,
                  padding: '5px 0',
                  display: 'flex',
                  justifyContent: 'right',
                }}
                to="/notes"
                onClick={() => {
                  setPageValue(1);
                }}
              >
                <LibraryBooksRoundedIcon style={{ fontSize: 30 }} />
                <div
                  style={{ display: 'inline-block', margin: '5px 0 0 10px' }}
                >
                  Notes
                </div>
              </Link>
              <Link
                className={classes.menuText}
                ref={contributorsLink}
                style={{
                  fontSize: 17,
                  padding: '5px 0',
                  display: 'flex',
                  justifyContent: 'right',
                }}
                to="/contributors"
                onClick={() => {
                  setPageValue(4);
                }}
              >
                <SupervisorAccountRoundedIcon style={{ fontSize: 30 }} />
                <div
                  style={{ display: 'inline-block', margin: '5px 0 0 10px' }}
                >
                  Contributors
                </div>
              </Link>
              <Link
                className={classes.menuText}
                ref={profileLink}
                style={{
                  fontSize: 17,
                  padding: '5px 0',
                  display: 'flex',
                  justifyContent: 'right',
                }}
                to="/profile"
                onClick={() => {
                  setPageValue(3);
                }}
              >
                <PersonRoundedIcon style={{ fontSize: 30 }} />
                <div
                  style={{ display: 'inline-block', margin: '5px 0 0 10px' }}
                >
                  Profile
                </div>
              </Link>
            </div>
            <div
              style={{
                height: 'fit-content',
                width: 'calc(100% - 40px)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                position: 'absolute',
                margin: 'auto',
                top: '480px',
                right: 0,
                left: 0,
              }}
            >
              <center>
                <Link to="/signin">
                  <div
                    style={{
                      textDecoration: 'none',
                      border: '2px solid #3A4BDF',
                      width: 'calc(100% - 20px)',
                      borderRadius: 30,
                      padding: '10px',
                      color: 'white',
                    }}
                  >
                    Sign In
                  </div>{' '}
                </Link>
              </center>
              <center>
                <Link to="/signup">
                  <div
                    style={{
                      textDecoration: 'none',
                      background: '#3A4BDF',
                      width: 'calc(100% - 20px)',
                      borderRadius: 30,
                      padding: '10px',
                      color: 'white',
                    }}
                  >
                    Sign Up
                  </div>
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <SideBar />
        <BottomNavBar open={pageValue} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/notes" component={Tracks} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/contribute" component={Contribute} />
        {/* <Redirect to="/tracks" /> */}
      </Router>
    </div>
  );
}

export default App;
