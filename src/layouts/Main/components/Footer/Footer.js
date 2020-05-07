import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PanoramaIcon from "@material-ui/icons/Panorama";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const Footer = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id='footer'>
      
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "black",
          width: "100%",
          height: ".5vh"
        }}
      />
      <AppBar
        position="sticky"
        style={{ backgroundColor: "white", height: "18vh" }}
      >
        <Toolbar variant="dense">
          <Grid
            container
            xs={12}
            justify="space-between"
            style={{ marginTop: "4vh",marginBottom:'4vh' }}
          >
            <Grid container xs={3} align="left">
              <Grid item xs={12}>
                <Typography style={{ color: "black" }}>Cybernews</Typography>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "1vh" }}>
                <Typography style={{ color: "black" }}>
                  148 Richmond St W
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "1vh" }}>
                <Typography style={{ color: "black" }}>
                  Toronto, ON MSH 2L2, Canada
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
