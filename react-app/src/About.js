import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import photo from './common/photo.jpeg'

const HEADER = `
Hi there, I'm Sage
`;

const CONTENT = `
I'm a CS major and senior at the University of Maryland Baltimore County.
I started my journey in software development as a UI designer and community manager at User Experience Society, a student-run UX focused student organization based in Manila.
I worked at Apple Columbia from 2018 to 2021 as a Technical Expert where I first gained experience working in IT. My work involved a significant amount of problem solving, analysis, and solution delivery to customers. End-to-end troubleshooting, repairing, and testing was an important part of my role.
On the summer of my junior year, I joined the Software Engineer Program at JPMorgan Chase & Co. as an intern where I worked on web applications using React and Flask. Agile development, integrated testing, and CI/CD pipelines with Jenkins were all core components of my work at Chase.
`;

class About extends React.Component {
    render() {
      return (
        <div>
          <Container>
            <h1>{HEADER}</h1>
            <Grid container spacing={5}>
              <Grid item lg={4} sm={6} xs={12}>
                <Container><img src={photo} alt="photo"></img></Container>
              </Grid>
              <Grid item lg={8} sm={6} xs={12}>
                <Container><p>{CONTENT}</p></Container>
              </Grid>
            </Grid>
          </Container>
        </div>
      );
    }
  }

export default About;