import React from 'react';
import { Container, Typography, Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CallMadeIcon from '@material-ui/icons/CallMade';
import { Chip } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

const HEADER = "Personal Projects";

const CONTENT = {
  "portfolio": 
    {
      "title": "2021 Portfolio",
      "desc": `
      My portfolio website is a single-page application (SPA) developed using React and Material UI. 
      It's currently hosted using GitHub Pages.
      Before deployment, unit testing was done using Enzyme and Jest.
      `,
      "url": 'https://github.com/sagerg/react-app',
      "btn": "Source Code",
      "chips": 
        <div>
          <Chip label="REACT" style={{backgroundColor: '#61DBFB', color: '#1F232A'}}/>
          {'  '}
          <Chip label="MATERIAL UI" style={{backgroundColor: '#1976D2', color: '#FFF'}}/>
        </div>
    },
  "siklab": 
    {
      "title": "Siklab Pilipinas",
      "desc": `
      I was one of two creative leads during the development of Siklab Pilipinas' website in 2017, tasked with developing content direction.
      UX mocks and UI prototypes were designed using Sketch and InVision
      `,
      "url": "https://drive.google.com/drive/folders/1vLkLB9s4QhVuByBOK9D_qK9HOYuuTwLg?usp=sharing",
      "btn": "Design Prototypes",
      "chips": 
        <div>
          <Chip label="SKETCH" style={{backgroundColor: '#F9A52C', color: '#FFF'}}/>
          {'  '}
          <Chip label="INVISION" style={{backgroundColor: '#FF3366', color: '#FFF'}}/>
        </div>
    },
  "health":
    {
      "title": "Health Journal",
      "desc": `
      The Health Journal website was built using standard HTML and CSS.
      It is currently hosted in a web server using MySQL at Howard Community College.
      UI responsiveness and accessibility were the main focus.
      `,
      "url": "https://phpmysql.howardcc.edu/Users/sgarcia6599/",
      "btn": "Go To Page",
      "chips": 
        <div>
          <Chip label="HTML 5" style={{backgroundColor: '#F05629', color: '#FFF'}}/>
          {'  '}
          <Chip label="CSS 3" style={{backgroundColor: '#2965F1', color: '#FFF'}}/>
        </div>
    },
  "pass_manager":
    {
      "title": "Password Manager",
      "desc": `
      A command line tool written in C++ for macOS but is portable to any other UNIX based operating systems.
      Securely encrypts passwords using Base64 encoding and a C++ module for Vigenère Cipher.
      `,
      "url": "https://github.com/sagerg/cmd-line-tools#password-manager",
      "btn": "Source Code",
      "chips": 
      <div>
        <Chip label="C++" />
        {'  '}
        <Chip label="UNIX" style={{backgroundColor: '#333333', color: '#FFF'}}/>
      </div>
    },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class InnerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainContent: this.props.mainContent,
      btnName: this.props.btnName,
      url: this.props.url
    };
  }

  render() {
    return (
      <div style={{marginTop: '20px'}}>
        <Container>
          <Typography variant="body1" gutterBottom>{this.state.mainContent}</Typography>
          <Button color="secondary" variant="text" href={this.state.url}>
            {this.state.btnName}&#160;
            <CallMadeIcon />
          </Button>
        </Container>
      </div>
    );
  }
}

export default function Projects() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Typography variant="h4" gutterBottom>
          {HEADER}
          <span className="blinking-span-el text-primary" style={{color: '#f44336'}}>|</span>
        </Typography>
        <Fade in timeout={500}>
          <Grid container spacing={3}>
          {
            Object.keys(CONTENT).map((key, index) => {
              return (
                <Grid key={index} item md={6} sm={12}>
                  <Paper className={classes.paper}>
                    <Typography variant="h5">
                      {CONTENT[key]["title"]}
                      {CONTENT[key]["chips"]}
                    </Typography>
                    <InnerContent
                      mainContent = {CONTENT[key]["desc"]}
                      btnName = {CONTENT[key]["btn"]}
                      url = {CONTENT[key]["url"]}
                    /> 
                  </Paper>
                </Grid>
              );
            })
          }
          </Grid>
        </Fade>
      </Container>
    </div>
  );
}