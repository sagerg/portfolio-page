import React from 'react';
import { Container, Typography, Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Siklab from './common/siklab.png';
import WebDev from './common/webdev.png';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CallMadeIcon from '@material-ui/icons/CallMade';
import { Chip } from '@material-ui/core';

const HEADER = `
Notable Projects
`;

const CONTENT = {
  "portfolio": 
    {
      "title": "Portfolio Website",
      "desc": `
      My portfolio website was developed using React, React Hooks, and Material UI. 
      It's currently hosted using GitHub Pages.
      Before deployment, unit testing was done using the React library Jest.
      `,
      "url": "https://github.com/sagerg/sagerg.github.io",
      "btn": "Github Repo",
      "alt": "photo of portfolio",
      "photo": "",
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
      In 2018, I co-lead the design team during the development of the project’s proof-of-concept, collaborating directly with the client and co-designers to develop the appropriate UI/UX direction.
      `,
      "url": "https://siklab.org.ph/",
      "btn": "Siklab Pilipinas",
      "alt": "photo of siklab project",
      "photo": Siklab,
      "chips": 
        <div>
          <Chip label="SKETCH" style={{backgroundColor: '#F9A52C', color: '#FFF'}}/>
          {'  '}
          <Chip label="HTML/CSS" style={{backgroundColor: '#F05629', color: '#FFF'}}/>
        </div>
    },
  "health":
    {
      "title": "Health Journal",
      "desc": `
      The Health Journal is aimed at spreading mental and physical health awareness.
      This website provides helpful online posts for creating a balanced and productive environment for anyone to stay and work in.
      `,
      "url": "https://phpmysql.howardcc.edu/Users/sgarcia6599/",
      "btn": "The Health Journal",
      "alt": "photo of health journal project",
      "photo": WebDev,
      "chips": 
        <div>
          <Chip label="SKETCH" style={{backgroundColor: '#F9A52C', color: '#FFF'}}/>
          {'  '}
          <Chip label="HTML/CSS" style={{backgroundColor: '#F05629', color: '#FFF'}}/>
        </div>
    },
  "pass_manager":
    {
      "title": "Password Manager",
      "desc": `
      Command line tool, written in C++ for UNIX systems, parses account username and passwords. Securely encrypts data locally using Base64 encoding and an implementation of Vigenère Cipher.
      `,
      "url": "https://github.com/sagerg/cmd-line-tools#password-manager",
      "btn": "Github Repo",
      "alt": "photo of pass manager",
      "photo": "",
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
      photo: this.props.photo,
      altText: this.props.altText,
      mainContent: this.props.mainContent,
      btnName: this.props.btnName,
      url: this.props.url
    };
  }

  render() {
    return (
      <div style={{marginTop: '10px'}}>
            <Container>
              {/* <img src={this.state.photo} alt={this.state.altText}></img> */}
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
        <Typography variant="h4" gutterBottom>{HEADER}</Typography>
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
                      photo = {CONTENT[key]["photo"]}
                      altText = {CONTENT[key]["alt"]}
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
      </Container>
    </div>
  );
}