import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import PanoramaIcon from "@material-ui/icons/Panorama";
import "../../../../App.css"
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
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
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const Home = props => {
  const { className, ...rest } = props;
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
  const [open16, setOpen16] = React.useState(false);
  const [open17, setOpen17] = React.useState(false);
  const [open18, setOpen18] = React.useState(false);
  const [open19, setOpen19] = React.useState(false);
  const [open20, setOpen20] = React.useState(false);
  const [open21, setOpen21] = React.useState(false);
  const [open22, setOpen22] = React.useState(false);
  const [open23, setOpen23] = React.useState(false);
  const [open24, setOpen24] = React.useState(false);
  const [open25, setOpen25] = React.useState(false);
  const [open26, setOpen26] = React.useState(false);
  const [open27, setOpen27] = React.useState(false);
  const [open28, setOpen28] = React.useState(false);
  const [open29, setOpen29] = React.useState(false);
  const [open30, setOpen30] = React.useState(false);
  const [open31, setOpen31] = React.useState(false);
  const [open32, setOpen32] = React.useState(false);
  const [open33, setOpen33] = React.useState(false);
  const [open34, setOpen34] = React.useState(false);
  const [open35, setOpen35] = React.useState(false);
  const [open36, setOpen36] = React.useState(false);
  const [open37, setOpen37] = React.useState(false);
  const [open38, setOpen38] = React.useState(false);
  const [open39, setOpen39] = React.useState(false);
  const [open15, setOpen15] = React.useState(false);
  const [open40, setOpen40] = React.useState(false);

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
  const handleOpen16 = () => {
    setOpen16(true);
  };
  const handleOpen17 = () => {
    setOpen17(true);
  };
  const handleOpen18 = () => {
    setOpen18(true);
  };
  const handleOpen19 = () => {
    setOpen19(true);
  };
  const handleOpen20 = () => {
    setOpen20(true);
  };
  const handleOpen21 = () => {
    setOpen21(true);
  };
  const handleOpen22 = () => {
    setOpen22(true);
  };
  const handleOpen23 = () => {
    setOpen23(true);
  };
  const handleOpen24 = () => {
    setOpen24(true);
  };
  const handleOpen25 = () => {
    setOpen25(true);
  };
  const handleOpen26 = () => {
    setOpen26(true);
  };
  const handleOpen27 = () => {
    setOpen27(true);
  };
  const handleOpen28 = () => {
    setOpen28(true);
  };
  const handleOpen29 = () => {
    setOpen29(true);
  };
  const handleOpen30 = () => {
    setOpen30(true);
  };
  const handleOpen31 = () => {
    setOpen31(true);
  };
  const handleOpen32 = () => {
    setOpen32(true);
  };
  const handleOpen33 = () => {
    setOpen33(true);
  };
  const handleOpen34 = () => {
    setOpen34(true);
  };
  const handleOpen35 = () => {
    setOpen35(true);
  };
  const handleOpen36 = () => {
    setOpen36(true);
  };
  const handleOpen37 = () => {
    setOpen37(true);
  };
  const handleOpen38 = () => {
    setOpen38(true);
  };
  const handleOpen39 = () => {
    setOpen39(true);
  };
  const handleOpen40 = () => {
    setOpen40(true);
  }
  const handleClose40 = () => {
    setOpen40(false);
  }

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
  const handleClose16 = () => {
    setOpen16(false);
  };
  const handleClose17 = () => {
    setOpen17(false);
  };
  const handleClose18 = () => {
    setOpen18(false);
  };
  const handleClose19 = () => {
    setOpen19(false);
  };
  const handleClose20 = () => {
    setOpen20(false);
  };
  const handleClose21 = () => {
    setOpen21(false);
  };
  const handleClose22 = () => {
    setOpen22(false);
  };
  const handleClose23 = () => {
    setOpen23(false);
  };
  const handleClose24 = () => {
    setOpen24(false);
  };
  const handleClose25 = () => {
    setOpen25(false);
  };
  const handleClose26 = () => {
    setOpen26(false);
  };
  const handleClose27 = () => {
    setOpen27(false);
  };
  const handleClose28 = () => {
    setOpen28(false);
  };
  const handleClose29 = () => {
    setOpen29(false);
  };
  const handleClose30 = () => {
    setOpen30(false);
  };
  const handleClose31 = () => {
    setOpen31(false);
  };
  const handleClose32 = () => {
    setOpen32(false);
  };
  const handleClose33 = () => {
    setOpen33(false);
  };
  const handleClose34 = () => {
    setOpen34(false);
  };
  const handleClose35 = () => {
    setOpen35(false);
  };
  const handleClose36 = () => {
    setOpen36(false);
  };
  const handleClose37 = () => {
    setOpen37(false);
  };
  const handleClose38 = () => {
    setOpen38(false);
  };
  const handleClose39 = () => {
    setOpen39(false);
  };

  const classes = useStyles();

  return (
    
    <Grid container xs={12}>
      <Grid container xs={12} justify="center">
        <Grid item xs={2}>
          <Card className={classes.root} variant="outlined" align="center" style={{border:'2px solid black'}}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <IconButton>
          <img src={require("../../../../assets/download.png")} width="100" height='100' />
          </IconButton>
              </Typography>
              <Grid container xs={12} align="left" >
              <Grid item xs={2} />
                
                <Grid item xs={8} style={{marginLeft:'1vh'}}>
                <Button onClick={handleOpen1}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 1
                  </Typography>
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
              <Typography>RSS feed line 1</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen2}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 2
                  </Typography>
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
              <Typography>RSS feed line 2</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen3}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 3
                  </Typography>
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
              <Typography>RSS feed line 3</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen4}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 4
                  </Typography>
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
              <Typography>RSS feed line 4</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen5}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 5
                  </Typography>
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
              <Typography>RSS feed line 5</Typography>
            </div>
          </Fade>
        </Modal>
                </Grid>
                <Grid item xs={2} />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <Card className={classes.root} variant="outlined"  align="center" style={{border:'2px solid black'}}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
              <IconButton>
        <img src={require("../../../../assets/download.png")} width="100" height='100' />
        </IconButton>
              </Typography>
              <Grid container xs={12} align="left">
                <Grid item xs={2} />
                
                <Grid item xs={8} style={{marginLeft:'1vh'}}>
                <Button onClick={handleOpen6}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 1
                  </Typography>
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
              <Typography>RSS feed line 1</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen7}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 2
                  </Typography>
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
              <Typography>RSS feed line 2</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen8}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 3
                  </Typography>
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
              <Typography>RSS feed line 3</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen9}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 4
                  </Typography>
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
              <Typography>RSS feed line 4</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen10}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 5
                  </Typography>
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
              <Typography>RSS feed line 5</Typography>
            </div>
          </Fade>
        </Modal>
                </Grid>
                <Grid item xs={2} />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <Card className={classes.root} variant="outlined"  align="center" style={{border:'2px solid black'}}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
              <IconButton>
        <img src={require("../../../../assets/download.png")} width="100" height='100' />
        </IconButton>
        </Typography>
              <Grid container xs={12} align="left">
                <Grid item xs={2} />
                <Grid item xs={8} style={{marginLeft:'1vh'}}>
                <Button onClick={handleOpen11}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 1
                  </Typography>
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
              <Typography>RSS feed line 1</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen12}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 2
                  </Typography>
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
              <Typography>RSS feed line 2</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen13}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 3
                  </Typography>
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
              <Typography>RSS feed line 3</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen14}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 4
                  </Typography>
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
              <Typography>RSS feed line 4</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen15}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 5
                  </Typography>
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
              <Typography>RSS feed line 5</Typography>
            </div>
          </Fade>
        </Modal>
                </Grid>
                <Grid item xs={3} />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <Card className={classes.root} variant="outlined"  align="center" style={{border:'2px solid black'}}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                
                <IconButton>
          <img src={require("../../../../assets/download.png")} width="100" height='100' />
          </IconButton>
              </Typography>
              <Grid container xs={12} align="left">
                <Grid item xs={2} />
                <Grid item xs={8} style={{marginLeft:'1vh'}}>
                <Button onClick={handleOpen16}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 1
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open16}
          onClose={handleClose16}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open16}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose16} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 1</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen17}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 2
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open17}
          onClose={handleClose17}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open17}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose17} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 2</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen18}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 3
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open18}
          onClose={handleClose18}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open18}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose18} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 3</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen19}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 4
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open19}
          onClose={handleClose19}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open19}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose19} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 4</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen20}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 5
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open20}
          onClose={handleClose20}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open20}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose20} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 5</Typography>
            </div>
          </Fade>
        </Modal>
                </Grid>
                <Grid item xs={2} />
              </Grid>
            </CardContent>
            </Card>
        </Grid>
      </Grid>
      <Grid container xs={12} justify="center" style={{marginTop:'4vh'}}>
        <Grid item xs={2}>
          <Card className={classes.root} variant="outlined" align="center" style={{border:'2px solid black'}}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                
                <IconButton>
          <img src={require("../../../../assets/download.png")} width="100" height='100' />
          </IconButton>
              </Typography>
              <Grid container xs={12} align="left" >
              <Grid item xs={2} />
                
              <Grid item xs={8} style={{marginLeft:'1vh'}}>
                <Button onClick={handleOpen21}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 1
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open21}
          onClose={handleClose21}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open21}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose21} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 1</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen22}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 2
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open22}
          onClose={handleClose22}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open22}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose22} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 2</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen23}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 3
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open23}
          onClose={handleClose23}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open23}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose23} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 3</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen24}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 4
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open24}
          onClose={handleClose24}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open24}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose24} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 4</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen25}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 5
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open25}
          onClose={handleClose25}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open25}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose25} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 5</Typography>
            </div>
          </Fade>
        </Modal>
                </Grid>
                <Grid item xs={2} />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <Card className={classes.root} variant="outlined"  align="center" style={{border:'2px solid black'}}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                
                <IconButton>
          <img src={require("../../../../assets/download.png")} width="100" height='100' />
          </IconButton>
              </Typography>
              <Grid container xs={12} align="left">
                <Grid item xs={2} />
                
                <Grid item xs={8} style={{marginLeft:'1vh'}}>
                <Button onClick={handleOpen26}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 1
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open26}
          onClose={handleClose26}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open26}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose26} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 1</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen27}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 2
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open27}
          onClose={handleClose27}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open27}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose27} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 2</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen28}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 3
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open28}
          onClose={handleClose28}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open28}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose28} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 3</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen29}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 4
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open29}
          onClose={handleClose29}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open29}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose29} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 4</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen30}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 5
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open30}
          onClose={handleClose30}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open30}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose30} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 5</Typography>
            </div>
          </Fade>
        </Modal>
                </Grid>
                <Grid item xs={2} />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <Card className={classes.root} variant="outlined"  align="center" style={{border:'2px solid black'}}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                
                <IconButton>
          <img src={require("../../../../assets/download.png")} width="100" height='100' />
          </IconButton>
              </Typography>
              <Grid container xs={12} align="left">
                <Grid item xs={2} />
                <Grid item xs={8} style={{marginLeft:'1vh'}}>
                <Button onClick={handleOpen31}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 1
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open31}
          onClose={handleClose31}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open31}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose31} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 1</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen32}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 2
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open32}
          onClose={handleClose32}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open32}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose32} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 2</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen33}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 3
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open33}
          onClose={handleClose33}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open33}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose33} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 3</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen34}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 4
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open34}
          onClose={handleClose34}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open34}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose34} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 4</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen35}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 5
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open35}
          onClose={handleClose35}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open35}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose35} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 5</Typography>
            </div>
          </Fade>
        </Modal>
                </Grid>
                <Grid item xs={3} />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <Card className={classes.root} variant="outlined"  align="center" style={{border:'2px solid black'}}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                
                <IconButton>
          <img src={require("../../../../assets/download.png")} width="100" height='100' />
          </IconButton>
              </Typography>
              <Grid container xs={12} align="left">
                <Grid item xs={2} />
                <Grid item xs={8} style={{marginLeft:'1vh'}}>
                <Button onClick={handleOpen36}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 1
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open36}
          onClose={handleClose36}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open36}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose36} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 1</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen37}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 2
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open37}
          onClose={handleClose37}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open37}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose37} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 2</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen38}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 3
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open38}
          onClose={handleClose38}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open38}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose38} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 3</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen39}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 4
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open39}
          onClose={handleClose39}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open39}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose39} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 4</Typography>
            </div>
          </Fade>
        </Modal>
        <Button onClick={handleOpen40}>
                  <Typography style={{ fontSize: "13px" }}>
                    RSS feed Line 5
                  </Typography>
                  </Button>
                  <Modal
          aria-labelledby="transition-modal-title1"
    
          className={classes.modal}
          open={open40}
          onClose={handleClose40}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open40}>
            <div className={classes.paper}>
              <div>
                <Button startIcon={<CloseIcon
                  
                    style={{ fontSize: "30px" }}
                />} onClick={handleClose40} style={{ marginLeft: "96%" }}>
                  
                </Button>
              </div>
              <Typography>RSS feed line 5</Typography>
            </div>
          </Fade>
        </Modal>
                </Grid>
                <Grid item xs={2} />
              </Grid>
            </CardContent>
            </Card>
        </Grid>
      </Grid>
    </Grid>
    
      );
};

Home.propTypes = {
  className: PropTypes.string
};

export default Home;
