import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  fade,
  //ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  InputBase,
  RadioGroup,
  Radio,
  Checkbox,
  Link,
  FormControlLabel,
  Select,
} from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, FormGroup, Form, ControlLabel } from "react-bootstrap";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    width: "100vh",
    height: "55vh",
    padding: theme.spacing(2, 4, 3),
  },
  list: {
    width: 250,
  },
  lists: {
    width: 300,
  },
  fullList: {
    width: "auto",
    height: "10vh",
  },
  fullLists: {
    Width: "40%",
  },
  listItemText: {
    fontSize: "14px", //Insert your required size
    textAlign: "left",
  },
  listItemText1: {
    fontSize: "14px", //Insert your required size
    textAlign: "center",
    border: "2px solid black",
    background: "black",
    color: "white",
  },
  indicator: {
    background: "black",
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
      width: "100%",
    },
    width: "100%",
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);



const ContactUs = () => {
  const classes = useStyles();

  return (
    
    <Form>
    <Form.Row >
      <Col sm={2}/>
      <Form.Group as={Col} controlId="formGridEmail" style={{marginTop:'8vh'}}>
        
        <Col sm={8}>
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
        </Col>
      </Form.Group>
      
      
      <Form.Group as={Col} controlId="formGridPassword">
      <Col sm={8} style={{marginTop:'8vh'}}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Your Email Address" />
      </Col>
      </Form.Group>
      
    </Form.Row>
    <Form.Row>
      <Col sm={2}/>
      <Form.Group as={Col} controlId="formGridEmail">
        
        <Col sm={8}>
      <Form.Group style={{marginTop:'4vh'}} controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control placeholder='Your Message here...' as="textarea" rows="3" />
  </Form.Group>
        </Col>
      </Form.Group>
      
      
      <Form.Group style={{marginLeft:'-5vh'}} as={Col} controlId="formGridPassword">
      <Col sm={8}>
      </Col>
      </Form.Group>
      
    </Form.Row>
    <Form.Row style={{marginTop:'4vh'}}>
      <Col sm={2} style={{marginLeft:'4vh', marginTop:'4vh'}}/>
      <Button type="submit" style={{background:'#f94e5c',color:'white', width:'25vh',height:'8vh',borderRadius:'25px'}}>Submit</Button>
      </Form.Row>
    </Form>

  
  
      
       
      
          
      
  );
};

export default ContactUs;
