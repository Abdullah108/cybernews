import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import PanoramaIcon from "@material-ui/icons/Panorama";
import "../../App.css";


const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "90%",
    height: "90%"
  },
  root: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

const Journal = () => {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  const [open13, setOpen13] = React.useState(false);
  const [open14, setOpen14] = React.useState(false);
  const [open15, setOpen15] = React.useState(false);
  

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
  
  const handleOpen7 = () => {
    setOpen7(true);
  };
  
  const handleOpen8 = () => {
    setOpen8(true);
  };
  
  const handleOpen9 = () => {
    setOpen9(true);
  };
  
  const handleOpen10 = () => {
    setOpen10(true);
  };
  
  const handleOpen11 = () => {
    setOpen11(true);
  };
  
  const handleOpen12 = () => {
    setOpen12(true);
  };
  
  const handleOpen13 = () => {
    setOpen13(true);
  };
  
  const handleOpen14 = () => {
    setOpen14(true);
  };
  
  const handleOpen15 = () => {
    setOpen15(true);
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
  
  const handleClose7 = () => {
    setOpen7(false);
  };
  
  const handleClose8 = () => {
    setOpen8(false);
  };
  
  const handleClose9 = () => {
    setOpen9(false);
  };
  
  const handleClose10 = () => {
    setOpen10(false);
  };
  
  const handleClose11 = () => {
    setOpen11(false);
  };
  
  const handleClose12 = () => {
    setOpen12(false);
  };
  
  const handleClose13 = () => {
    setOpen13(false);
  };
  
  const handleClose14 = () => {
    setOpen14(false);
  };
  
  const handleClose15 = () => {
    setOpen15(false);
  };
  return (
    <div className={classes.root}>
     <Grid container xs={12}>
      <Grid item xs={1} />
      <Grid container xs={10} justify="space-evenly">
        <Button onClick={handleOpen1}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                
              >
                 <img src={require("../../assets/download.png")} width="150" />
              </Typography>
            </CardContent>
          </Card>
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
              <Typography>Journal 1</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen2}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <img src={require("../../assets/download.png")} width="150" />
              </Typography>
            </CardContent>
          </Card>
           
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
              <Typography>Journal 2</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen3}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <img src={require("../../assets/download.png")} width="150" />
              </Typography>
            </CardContent>
          </Card>
           
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
              <Typography>Journal 3</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <img src={require("../../assets/download.png")} width="150" />
              </Typography>
            </CardContent>
          </Card>
           
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
              <Typography>Journal 4</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen5}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <img src={require("../../assets/download.png")} width="150" />
              </Typography>
            </CardContent>
          </Card>
           
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
              <Typography>Journal 5</Typography>
            </div>
          </Fade>
        </Modal>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1} />
      <Grid container xs={10} justify="space-evenly">
      <Button onClick={handleOpen6}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <img src={require("../../assets/download.png")} width="150" />
              </Typography>
            </CardContent>
          </Card>
           
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
              <Typography>Journal 6</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen7}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <img src={require("../../assets/download.png")} width="150" />
              </Typography>
            </CardContent>
          </Card>
           
        </Button>
        <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open7}
          onClose={handleClose7}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open7}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose7} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>Journal 7</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen8}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
              <img src={require("../../assets/download.png")} width="150" />
              </Typography>
            </CardContent>
          </Card>
           
        </Button>
        <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open8}
          onClose={handleClose8}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open8}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose8} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>Journal 8</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen9}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                 <img src={require("../../assets/download.png")} width="150" />
              </Typography>
            </CardContent>
          </Card>
           
        </Button>
        <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open9}
          onClose={handleClose9}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open9}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose9} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>Journal 9</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen10}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
<img src={require("../../assets/download.png")} width="150" />              </Typography>
            </CardContent>
          </Card>
           
        </Button>
        <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open10}
          onClose={handleClose10}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open10}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose10} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>Journal 10</Typography>
            </div>
          </Fade>
        </Modal>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1} />
      <Grid container xs={10} justify="space-evenly">
      <Button onClick={handleOpen11}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
<img src={require("../../assets/download.png")} width="150" />              </Typography>
            </CardContent>
          </Card>
           
        </Button>
        <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open11}
          onClose={handleClose11}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open11}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose11} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>Journal 11</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen12}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
<img src={require("../../assets/download.png")} width="150" />              </Typography>
            </CardContent>
          </Card>
           
        </Button>
        <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open12}
          onClose={handleClose12}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open12}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose12} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>Journal 12</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen13}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
<img src={require("../../assets/download.png")} width="150" />              </Typography>
            </CardContent>
          </Card>
           
        </Button>
        <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open13}
          onClose={handleClose13}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open13}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose13} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>Journal 13</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen14}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
<img src={require("../../assets/download.png")} width="150" />              </Typography>
            </CardContent>
          </Card>
           
        </Button>
        <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open14}
          onClose={handleClose14}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open14}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose14} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>Journal 14</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen15}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <img src={require("../../assets/download.png")} width="150" /> 
              </Typography>
            </CardContent>
          </Card>
           
        </Button>
        <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open15}
          onClose={handleClose15}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open15}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose15} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>Journal 15</Typography>
            </div>
          </Fade>
        </Modal>
      </Grid>
      <Grid item xs={1} />
    </Grid>
    </div>
  );
};

export default Journal;
