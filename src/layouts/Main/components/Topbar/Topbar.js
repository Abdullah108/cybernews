import React, {forwardRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { NavLink as RouterLink } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import PanoramaIcon from "@material-ui/icons/Panorama";
import "../../../../App.css";

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const pages1 = [
    {
      title: 'Home',
      href: '/dashboard',
      
    },
   
    
    
  ];
  const pages2 = [
    
    {
      title: 'Framework',
      href: '/framework',
    
    },
    
    
    
  ];
  const pages3 = [
    
    
    {
      title: 'Journal',
      href: '/journal',
    
    },
    
    
  ];
  const pages4 = [
    
    {
      title: 'Contact-US',
      href: '/contact-us',
    
    },
    
    
    
    
  ];
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", height: "12vh" }}
      >
        <Toolbar variant="dense">
          <Grid container xs={12} justify="space-between">
            <Grid item xs={3}>
              <Typography variant="h2" style={{ color: "black", marginTop:'2vh' }}>
                cybernews
              </Typography>
            </Grid>
            <Grid container xs={4} lg={2} style={{marginTop:'2vh'}}>
              <Grid item xs={3} lg={3}>
                <FacebookIcon style={{ color: "black", fontSize: "34" }} />
              </Grid>
              <Grid item xs={3} lg={3}>
                <TwitterIcon style={{ color: "black", fontSize: "34" }} />
              </Grid>
              <Grid item xs={3} lg={3}>
                <InstagramIcon style={{ color: "black", fontSize: "34" }} />
              </Grid>
              <Grid item xs={3} lg={3}>
                <YouTubeIcon style={{ color: "black", fontSize: "34" }} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "black",
          width: "100%",
          height: ".5vh"
        }}
      />
      <AppBar
        position="static"
        style={{ backgroundColor: "white", height: "12vh" }}
      >
        <Toolbar variant="dense">
          <Grid
            container
            lg={12}
            justify="space-around"
            align="center"
            style={{ marginTop: "4vh" }}
            >
              {/* {pages.map(page => ( 
//         <ListItem
//           className={classes.item}
//           disableGutters
//           key={page.title}
//         >
//           <Button
//             activeClassName={classes.active}
//             className={classes.button}
//             component={CustomRouterLink}
//             to={page.href}
//           >
//             <div className={classes.icon}>{page.icon}</div>
//             {page.title}
//           </Button>
//         </ListItem>
//       ))}
//     </List>
//   );
// };
              */}
            <Grid container lg={8}>
              <Grid item lg={3}>
              {pages1.map(page => (
                <IconButton activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}><Typography style={{ color: "black",textDecoration:'none' }}>Home</Typography></IconButton>
              ))}  
            </Grid>
              <Grid item lg={3}>
              {pages2.map(page => (
                <IconButton activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}><Typography style={{ color: "black" }}>Framework</Typography></IconButton>
              ))}
              </Grid>
              <Grid item lg={3}>
              {pages3.map(page => (
                <IconButton activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}><Typography style={{ color: "black" }}>Journal</Typography></IconButton>
              ))}
              </Grid>
              <Grid item lg={3}>
              {pages4.map(page => (
                <IconButton activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}><Typography style={{ color: "black" }}>Contact Us</Typography></IconButton>
              ))}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container lg={12} justify="space-around">
        
        <Grid container lg={12} align="center">
          <Grid item lg={0}/>
          <Grid item lg={5} align="right">
          <Carousel autoplay style={{marginLeft:'10vh'}}>
    <div>
    <img src={require("../../../../assets/download.png")} width='500' height='260' />
    </div>
    <div>
    <img src={require("../../../../assets/download1.jpg")} width='500' height='260' />
    </div>
    <div>
    <img src={require("../../../../assets/download2.jpg")} width='500' height='260' />
    </div>
    
  </Carousel>,
          </Grid>
          <Grid item xs={1}/>
          <Grid item lg={5} align="left">
          <Carousel autoplay style={{marginLeft:'8vh'}}>
    <div>
    <img src={require("../../../../assets/download.png")} width='515' height='260' />
    </div>
    <div>
    <img src={require("../../../../assets/download1.jpg")} width='515' height='260' />
    </div>
    <div>
    <img src={require("../../../../assets/download2.jpg")} width='515' height='260' />
    </div>
    
  </Carousel>,
          </Grid>
        </Grid>
        
      </Grid>
    </div>
  );
}
