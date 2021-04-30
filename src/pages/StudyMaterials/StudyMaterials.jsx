import React from 'react'

import AOS from 'aos';
import "aos/dist/aos.css";

import Footer from '../../components/Footer';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BookmarksRoundedIcon from '@material-ui/icons/BookmarksRounded';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        backgroundColor: "transparent !important",
        boxShadow: "none !important"
    },
    font: {
        fontFamily: "Poppins, sans-serif",
        textAlign: "left"
    },
    searchInput: {
        display: "inline-block",
        width: "fit-content",
    },
    root: {
        backgroundColor: "#1E314E",
        padding: '2px 4px 2px 15px',
        display: 'flex',
        alignItems: 'center',
        height: "40px",
        width: "calc(100% - 10px)",
        borderRadius: "30px"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: 'white',
        fontFamily: "Poppins, sans-serif"
    },
    startIcon: {
        color: "#3A4BDF",
    },
    iconButton: {
        color: 'white',
    },
    icon: {
        color: "#3A4BDF",
        fontSize: "30px"
    },
    chips: {
        backgroundColor: "#1E314E !important",
        borderRadius: "50px",
        color: "white",
        marginLeft: "10px",
        padding: "5px 20px",
        height: "40px",
        width: "fit-content",
        display: "inline-block",
    },
    chipsSelected: {
        backgroundColor: "#3f51b5 !important",
        borderRadius: "50px",
        color: "white",
        marginLeft: "10px",
        padding: "5px 20px",
        height: "40px",
        width: "fit-content",
        display: "inline-block",
    },
    cardRoot: {
        height: "100%",
        width: "100%",
        backgroundColor: "#1E314E",
        color: "white",
        borderRadius: "10px",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    learnmore: {
        backgroundColor: "#3f51b5 !important",
        color: "white",
        margin: "0 0 10px 10px",
        padding: "5px 15px"
    },
    cardButtonWhole: {
        height: "fit-content",
        width: "fit-content",
        padding: 0,
        margin: "auto",
    },
    bookmarkBtn: {
        backgroundColor: "#3F51B5 !important",
        color: 'white',
        borderRadius: '4px',
        padding: '9px',
        margin: "0 0 10px 10px",
    },
    credits: {
        justifyContent: 'center',
        textAlign: 'right',
        width: '100%',
        margin: '0 10px 10px auto',
        color: '#99B2D8'
    }
}));

function Tracks() {
    document.title = "OnTrack - Topics";
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    React.useEffect(() => {
        AOS.init({
            duration: 2000
        }); AOS.refresh();
    }, []);

    return (
        <div>
            <center className="chips" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                <div className={classes.searchInput}>
                    <Paper component="form" className={classes.root} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                        <InputBase
                            className={classes.input}
                            placeholder="Search Tracks"
                        />
                        <IconButton className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
                <Button color="primary" className={classes.chipsSelected}>All</Button>
                <Button color="primary" className={classes.chips}>Engineering</Button>
                <Button color="primary" className={classes.chips}>Web Development</Button>
                <Button color="primary" className={classes.chips}>Art</Button>
                <Button color="primary" className={classes.chips}>Java Development</Button>
                <Button color="primary" className={classes.chips}>Designing</Button>
            </center>

            <div className="tracks-container">
                <div className="track" >
                    <Card className={classes.cardRoot} data-aos="fade-up" data-aos-duration="1000"  >
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.font}>
                                Topic of Track
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p" className={classes.font} style={{ color: '#99B2D8' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere natus nam, libero possimus tempora esse harum excepturi tempore nesciunt cum eligendi id explicabo tenetur porro voluptatum hic dolor sit?
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <FormControlLabel color="primary" style={{ margin: '15px 10px 0 0' }} className="theme-switch" data-aos="fade-left" data-aos-duration="500"
                                control={<Checkbox color="primary" icon={<BookmarksOutlinedIcon color="primary" style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} checkedIcon={<BookmarksRoundedIcon style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} />}
                            />
                            {/* <IconButton className={classes.bookmarkBtn}>
                                
                            </IconButton> */}
                            <Button className={classes.learnmore + " " + classes.font} size="small">Open</Button>
                            <div className={classes.credits}>
                                By <a href="#jaagrav" style={{ color: '#407BFF' }}>Jaagrav Seal</a>
                            </div>
                        </CardActions>
                    </Card>
                    <Card className={classes.cardRoot} data-aos="fade-up" data-aos-duration="1000"  >
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.font}>
                                Topic of Track
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p" className={classes.font} style={{ color: '#99B2D8' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere natus nam, libero possimus tempora esse harum excepturi tempore nesciunt cum eligendi id explicabo tenetur porro voluptatum hic dolor sit?
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <FormControlLabel color="primary" style={{ margin: '15px 10px 0 0' }} className="theme-switch" data-aos="fade-left" data-aos-duration="500"
                                control={<Checkbox color="primary" icon={<BookmarksOutlinedIcon color="primary" style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} checkedIcon={<BookmarksRoundedIcon style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} />}
                            />
                            {/* <IconButton className={classes.bookmarkBtn}>
                                
                            </IconButton> */}
                            <Button className={classes.learnmore + " " + classes.font} size="small">Open</Button>
                            <div className={classes.credits}>
                                By <a href="#jaagrav" style={{ color: '#407BFF' }}>Jaagrav Seal</a>
                            </div>
                        </CardActions>
                    </Card>
                    <Card className={classes.cardRoot} data-aos="fade-up" data-aos-duration="1000"  >
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.font}>
                                Topic of Track
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p" className={classes.font} style={{ color: '#99B2D8' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere natus nam, libero possimus tempora esse harum excepturi tempore nesciunt cum eligendi id explicabo tenetur porro voluptatum hic dolor sit?
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <FormControlLabel color="primary" style={{ margin: '15px 10px 0 0' }} className="theme-switch" data-aos="fade-left" data-aos-duration="500"
                                control={<Checkbox color="primary" icon={<BookmarksOutlinedIcon color="primary" style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} checkedIcon={<BookmarksRoundedIcon style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} />}
                            />
                            {/* <IconButton className={classes.bookmarkBtn}>
                                
                            </IconButton> */}
                            <Button className={classes.learnmore + " " + classes.font} size="small">Open</Button>
                            <div className={classes.credits}>
                                By <a href="#jaagrav" style={{ color: '#407BFF' }}>Jaagrav Seal</a>
                            </div>
                        </CardActions>
                    </Card>
                    <Card className={classes.cardRoot} data-aos="fade-up" data-aos-duration="1000"  >
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.font}>
                                Topic of Track
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p" className={classes.font} style={{ color: '#99B2D8' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere natus nam, libero possimus tempora esse harum excepturi tempore nesciunt cum eligendi id explicabo tenetur porro voluptatum hic dolor sit?
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <FormControlLabel color="primary" style={{ margin: '15px 10px 0 0' }} className="theme-switch" data-aos="fade-left" data-aos-duration="500"
                                control={<Checkbox color="primary" icon={<BookmarksOutlinedIcon color="primary" style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} checkedIcon={<BookmarksRoundedIcon style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} />}
                            />
                            {/* <IconButton className={classes.bookmarkBtn}>
                                
                            </IconButton> */}
                            <Button className={classes.learnmore + " " + classes.font} size="small">Open</Button>
                            <div className={classes.credits}>
                                By <a href="#jaagrav" style={{ color: '#407BFF' }}>Jaagrav Seal</a>
                            </div>
                        </CardActions>
                    </Card>
                    <Card className={classes.cardRoot} data-aos="fade-up" data-aos-duration="1000"  >
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.font}>
                                Topic of Track
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p" className={classes.font} style={{ color: '#99B2D8' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere natus nam, libero possimus tempora esse harum excepturi tempore nesciunt cum eligendi id explicabo tenetur porro voluptatum hic dolor sit?
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <FormControlLabel color="primary" style={{ margin: '15px 10px 0 0' }} className="theme-switch" data-aos="fade-left" data-aos-duration="500"
                                control={<Checkbox color="primary" icon={<BookmarksOutlinedIcon color="primary" style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} checkedIcon={<BookmarksRoundedIcon style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} />}
                            />
                            {/* <IconButton className={classes.bookmarkBtn}>
                                
                            </IconButton> */}
                            <Button className={classes.learnmore + " " + classes.font} size="small">Open</Button>
                            <div className={classes.credits}>
                                By <a href="#jaagrav" style={{ color: '#407BFF' }}>Jaagrav Seal</a>
                            </div>
                        </CardActions>
                    </Card>
                    <Card className={classes.cardRoot} data-aos="fade-up" data-aos-duration="1000"  >
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.font}>
                                Topic of Track
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p" className={classes.font} style={{ color: '#99B2D8' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere natus nam, libero possimus tempora esse harum excepturi tempore nesciunt cum eligendi id explicabo tenetur porro voluptatum hic dolor sit?
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <FormControlLabel color="primary" style={{ margin: '15px 10px 0 0' }} className="theme-switch" data-aos="fade-left" data-aos-duration="500"
                                control={<Checkbox color="primary" icon={<BookmarksOutlinedIcon color="primary" style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} checkedIcon={<BookmarksRoundedIcon style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} />}
                            />
                            {/* <IconButton className={classes.bookmarkBtn}>
                                
                            </IconButton> */}
                            <Button className={classes.learnmore + " " + classes.font} size="small">Open</Button>
                            <div className={classes.credits}>
                                By <a href="#jaagrav" style={{ color: '#407BFF' }}>Jaagrav Seal</a>
                            </div>
                        </CardActions>
                    </Card>
                    <Card className={classes.cardRoot} data-aos="fade-up" data-aos-duration="1000"  >
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.font}>
                                Topic of Track
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p" className={classes.font} style={{ color: '#99B2D8' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere natus nam, libero possimus tempora esse harum excepturi tempore nesciunt cum eligendi id explicabo tenetur porro voluptatum hic dolor sit?
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <FormControlLabel color="primary" style={{ margin: '15px 10px 0 0' }} className="theme-switch" data-aos="fade-left" data-aos-duration="500"
                                control={<Checkbox color="primary" icon={<BookmarksOutlinedIcon color="primary" style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} checkedIcon={<BookmarksRoundedIcon style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} />}
                            />
                            {/* <IconButton className={classes.bookmarkBtn}>
                                
                            </IconButton> */}
                            <Button className={classes.learnmore + " " + classes.font} size="small">Open</Button>
                            <div className={classes.credits}>
                                By <a href="#jaagrav" style={{ color: '#407BFF' }}>Jaagrav Seal</a>
                            </div>
                        </CardActions>
                    </Card>
                    <Card className={classes.cardRoot} data-aos="fade-up" data-aos-duration="1000"  >
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.font}>
                                Topic of Track
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p" className={classes.font} style={{ color: '#99B2D8' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere natus nam, libero possimus tempora esse harum excepturi tempore nesciunt cum eligendi id explicabo tenetur porro voluptatum hic dolor sit?
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <FormControlLabel color="primary" style={{ margin: '15px 10px 0 0' }} className="theme-switch" data-aos="fade-left" data-aos-duration="500"
                                control={<Checkbox color="primary" icon={<BookmarksOutlinedIcon color="primary" style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} checkedIcon={<BookmarksRoundedIcon style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} />}
                            />
                            {/* <IconButton className={classes.bookmarkBtn}>
                                
                            </IconButton> */}
                            <Button className={classes.learnmore + " " + classes.font} size="small">Open</Button>
                            <div className={classes.credits}>
                                By <a href="#jaagrav" style={{ color: '#407BFF' }}>Jaagrav Seal</a>
                            </div>
                        </CardActions>
                    </Card>
                    <Card className={classes.cardRoot} data-aos="fade-up" data-aos-duration="1000"  >
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.font}>
                                Topic of Track
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p" className={classes.font} style={{ color: '#99B2D8' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere natus nam, libero possimus tempora esse harum excepturi tempore nesciunt cum eligendi id explicabo tenetur porro voluptatum hic dolor sit?
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <FormControlLabel color="primary" style={{ margin: '15px 10px 0 0' }} className="theme-switch" data-aos="fade-left" data-aos-duration="500"
                                control={<Checkbox color="primary" icon={<BookmarksOutlinedIcon color="primary" style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} checkedIcon={<BookmarksRoundedIcon style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} />}
                            />
                            {/* <IconButton className={classes.bookmarkBtn}>
                                
                            </IconButton> */}
                            <Button className={classes.learnmore + " " + classes.font} size="small">Open</Button>
                            <div className={classes.credits}>
                                By <a href="#jaagrav" style={{ color: '#407BFF' }}>Jaagrav Seal</a>
                            </div>
                        </CardActions>
                    </Card>
                    <Card className={classes.cardRoot} data-aos="fade-up" data-aos-duration="1000"  >
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.font}>
                                Topic of Track
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p" className={classes.font} style={{ color: '#99B2D8' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere natus nam, libero possimus tempora esse harum excepturi tempore nesciunt cum eligendi id explicabo tenetur porro voluptatum hic dolor sit?
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <FormControlLabel color="primary" style={{ margin: '15px 10px 0 0' }} className="theme-switch" data-aos="fade-left" data-aos-duration="500"
                                control={<Checkbox color="primary" icon={<BookmarksOutlinedIcon color="primary" style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} checkedIcon={<BookmarksRoundedIcon style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} />}
                            />
                            {/* <IconButton className={classes.bookmarkBtn}>
                                
                            </IconButton> */}
                            <Button className={classes.learnmore + " " + classes.font} size="small">Open</Button>
                            <div className={classes.credits}>
                                By <a href="#jaagrav" style={{ color: '#407BFF' }}>Jaagrav Seal</a>
                            </div>
                        </CardActions>
                    </Card>
                    <Card className={classes.cardRoot} data-aos="fade-up" data-aos-duration="1000"  >
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.font}>
                                Topic of Track
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p" className={classes.font} style={{ color: '#99B2D8' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere natus nam, libero possimus tempora esse harum excepturi tempore nesciunt cum eligendi id explicabo tenetur porro voluptatum hic dolor sit?
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <FormControlLabel color="primary" style={{ margin: '15px 10px 0 0' }} className="theme-switch" data-aos="fade-left" data-aos-duration="500"
                                control={<Checkbox color="primary" icon={<BookmarksOutlinedIcon color="primary" style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} checkedIcon={<BookmarksRoundedIcon style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} />}
                            />
                            {/* <IconButton className={classes.bookmarkBtn}>
                                
                            </IconButton> */}
                            <Button className={classes.learnmore + " " + classes.font} size="small">Open</Button>
                            <div className={classes.credits}>
                                By <a href="#jaagrav" style={{ color: '#407BFF' }}>Jaagrav Seal</a>
                            </div>
                        </CardActions>
                    </Card>
                    <Card className={classes.cardRoot} data-aos="fade-up" data-aos-duration="1000"  >
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.font}>
                                Topic of Track
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p" className={classes.font} style={{ color: '#99B2D8' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere natus nam, libero possimus tempora esse harum excepturi tempore nesciunt cum eligendi id explicabo tenetur porro voluptatum hic dolor sit?
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <FormControlLabel color="primary" style={{ margin: '15px 10px 0 0' }} className="theme-switch" data-aos="fade-left" data-aos-duration="500"
                                control={<Checkbox color="primary" icon={<BookmarksOutlinedIcon color="primary" style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} checkedIcon={<BookmarksRoundedIcon style={{ fontSize: "25px", margin: '5px 5px 0 0' }} />} />}
                            />
                            {/* <IconButton className={classes.bookmarkBtn}>
                                
                            </IconButton> */}
                            <Button className={classes.learnmore + " " + classes.font} size="small">Open</Button>
                            <div className={classes.credits}>
                                By <a href="#jaagrav" style={{ color: '#407BFF' }}>Jaagrav Seal</a>
                            </div>
                        </CardActions>
                    </Card>
                </div>
                <center data-aos="zoom-in" data-aos-duration="1000" ><Button className={classes.learnmore + " " + classes.font} style={{ margin: '30px 0' }}>Load More</Button></center>
                <Footer />
            </div>

        </div>
    )
}

export default Tracks;
