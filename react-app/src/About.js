import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import photo from './common/photo.jpeg'

const HEADER = `
Hi there, I'm Sage
`;

const CONTENT = `
I'm a senior majoring in Computer Science at the University of Maryland Baltimore County.
I started my journey in software development as a UI designer and community manager at User Experience Society, a student-run organization based in Manila.
I also previously worked at Apple as a Technical Expert. My work consisted of end-to-end troubleshooting, repairing, and testing customers' devices.
On the summer of my junior year, I joined the Software Engineer Program at JPMorgan Chase & Co. as an intern where I worked on web applications using React and Flask. Agile development, unit & integrated testing, and deployment via CI/CD pipelines with Jenkins were all core components of my work at Chase.
`;

class About extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Typography variant="h5" gutterBottom>{HEADER}</Typography>
          <Grid container spacing={5}>
            <Grid item lg={4} md={6} xs={12}>
              <Container><img src={photo} alt="author"></img></Container>
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <Container><Typography variant="body1">{CONTENT}</Typography></Container>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default About;