import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";


import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import PanoramaIcon from "@material-ui/icons/Panorama";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: 'grey'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "90%",
    height: "90%"
  },
}));

const FrameWork = () => {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  
  const handleOpen1 = () => {
    setOpen1(true);
  };
  
  const handleOpen2 = () => {
    setOpen2(true);
  };
  
  const handleOpen3 = () => {
    setOpen3(true);
  };
  
  const handleOpen4 = () => {
    setOpen4(true);
  };
  
  const handleOpen5 = () => {
    setOpen5(true);
  };
  
  const handleOpen6 = () => {
    setOpen6(true);
  };
  
  const handleClose1 = () => {
    setOpen1(false);
  };
  
  const handleClose2 = () => {
    setOpen2(false);
  };
  
  const handleClose3 = () => {
    setOpen3(false);
  };
  
  const handleClose4 = () => {
    setOpen4(false);
  };
  
  const handleClose5 = () => {
    setOpen5(false);
  };
  
  const handleClose6 = () => {
    setOpen6(false);
  };
  return (
    <div className={classes.root}>
      <Grid container xs={12}>
      <Grid container xs={12} justify="center">
        <Grid item xs={3} align='left'>
          <Card className={classes.root} variant="outlined" align="left" style={{border:'2px solid black'}}>
            <CardContent>
              <Grid container xs={12}>
                <Grid item xs={4}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                style={{marginLeft:'-4vh',marginTop:'4vh'}}
              > <Button onClick={handleOpen1}>
                <img src={require("../../assets/download.png")} width="100" height='100' />
              </Button>
              <Modal
      aria-labelledby="transition-modal-title1"

      className={classes.modal}
      open={open1}
      onClose={handleClose1}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open1}>
        <div className={classes.paper}>
          <div>
            <Button startIcon={<CloseIcon
              
                style={{ fontSize: "30px" }}
            />} onClick={handleClose1} style={{ marginLeft: "96%" }}>
              
            </Button>
          </div>
          <Typography>TextArea</Typography>
        </div>
      </Fade>
    </Modal>
              </Typography>
              
              </Grid>
              
              <Grid item xs={5} align="left" style={{marginLeft:'4vh'}}>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={3} align='left'>
          <Card className={classes.root} variant="outlined" align="left" style={{border:'2px solid black'}}>
            <CardContent>
              <Grid container xs={12}>
                <Grid item xs={4}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                style={{marginLeft:'-4vh',marginTop:'4vh'}}
              >
              <Button onClick={handleOpen2}>
                <img src={require("../../assets/download.png")} width="100" height='100' />
              </Button>
              <Modal
      aria-labelledby="transition-modal-title1"

      className={classes.modal}
      open={open2}
      onClose={handleClose2}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open2}>
        <div className={classes.paper}>
          <div>
            <Button startIcon={<CloseIcon
              
                style={{ fontSize: "30px" }}
            />} onClick={handleClose2} style={{ marginLeft: "96%" }}>
              
            </Button>
          </div>
          <Typography>TextArea</Typography>
        </div>
      </Fade>
    </Modal>
              </Typography>
              </Grid>
              <Grid item xs={5} align="left" style={{marginLeft:'4vh'}}>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={1} />
        <Grid item xs={3} align='left'>
          <Card className={classes.root} variant="outlined" align="left" style={{border:'2px solid black'}}>
            <CardContent>
              <Grid container xs={12}>
                <Grid item xs={4}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                style={{marginLeft:'-4vh',marginTop:'4vh'}}
              ><Button onClick={handleOpen3}>
              <img src={require("../../assets/download.png")} width="100" height='100' />
            </Button>
            <Modal
    aria-labelledby="transition-modal-title1"

    className={classes.modal}
    open={open3}
    onClose={handleClose3}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500
    }}
  >
    <Fade in={open3}>
      <div className={classes.paper}>
        <div>
          <Button startIcon={<CloseIcon
            
              style={{ fontSize: "30px" }}
          />} onClick={handleClose3} style={{ marginLeft: "96%" }}>
            
          </Button>
        </div>
        <Typography>TextArea</Typography>
      </div>
    </Fade>
  </Modal>
              </Typography>
              </Grid>
              <Grid item xs={5} align="left" style={{marginLeft:'4vh'}}>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>
      <Grid container xs={12} justify="center" style={{marginTop:'4vh'}}>
      <Grid item xs={3} align='left'>
          <Card className={classes.root} variant="outlined" align="left" style={{border:'2px solid black'}}>
            <CardContent>
              <Grid container xs={12}>
                <Grid item xs={4}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                style={{marginLeft:'-4vh',marginTop:'4vh'}}
              >
               <Button onClick={handleOpen4}>
                <img src={require("../../assets/download.png")} width="100" height='100' />
              </Button>
              <Modal
      aria-labelledby="transition-modal-title1"

      className={classes.modal}
      open={open4}
      onClose={handleClose4}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open4}>
        <div className={classes.paper}>
          <div>
            <Button startIcon={<CloseIcon
              
                style={{ fontSize: "30px" }}
            />} onClick={handleClose4} style={{ marginLeft: "96%" }}>
              
            </Button>
          </div>
          <Typography>TextArea</Typography>
        </div>
      </Fade>
    </Modal>
              </Typography>
              </Grid>
              <Grid item xs={5} align="left" style={{marginLeft:'4vh'}}>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>  
        <Grid item xs={1} />
        <Grid item xs={3} align='left'>
          <Card className={classes.root} variant="outlined" align="left" style={{border:'2px solid black'}}>
            <CardContent>
              <Grid container xs={12}>
                <Grid item xs={4}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                style={{marginLeft:'-4vh',marginTop:'4vh'}}
              >
                <Button onClick={handleOpen1}>
                <img src={require("../../assets/download.png")} width="100" height='100' />
              </Button>
              <Modal
      aria-labelledby="transition-modal-title1"

      className={classes.modal}
      open={open5}
      onClose={handleClose5}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open5}>
        <div className={classes.paper}>
          <div>
            <Button startIcon={<CloseIcon
              
                style={{ fontSize: "30px" }}
            />} onClick={handleClose5} style={{ marginLeft: "96%" }}>
              
            </Button>
          </div>
          <Typography>TextArea</Typography>
        </div>
      </Fade>
    </Modal>
              </Typography>
              </Grid>
              <Grid item xs={5} align="left" style={{marginLeft:'4vh'}}>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={3} align='left'>
          <Card className={classes.root} variant="outlined" align="left" style={{border:'2px solid black'}}>
            <CardContent>
              <Grid container xs={12}>
                <Grid item xs={4}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                style={{marginLeft:'-4vh',marginTop:'4vh'}}
              >
                
                <Button onClick={handleOpen6}>
                <img src={require("../../assets/download.png")} width="100" height='100' />
              </Button>
              <Modal
      aria-labelledby="transition-modal-title1"

      className={classes.modal}
      open={open6}
      onClose={handleClose6}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open6}>
        <div className={classes.paper}>
          <div>
            <Button startIcon={<CloseIcon
              
                style={{ fontSize: "30px" }}
            />} onClick={handleClose6} style={{ marginLeft: "96%" }}>
              
            </Button>
          </div>
          <Typography>TextArea</Typography>
        </div>
      </Fade>
    </Modal>
              </Typography>
              </Grid>
              <Grid item xs={5} align="left" style={{marginLeft:'4vh'}}>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              <Typography>TextArea</Typography>
              </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>  
    </Grid>    
 
    </div>
  
  );
};

export default FrameWork;
