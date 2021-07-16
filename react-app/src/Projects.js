import React from 'react';
import { Container, Typography } from '@material-ui/core';
import ProjectContent from './ProjectContent';

const HEADER = `
Notable Projects
`;

class Projects extends React.Component {
    render() {
      return (
        <div>
          <Container>
            <Typography variant="h5" gutterBottom>{HEADER}</Typography>
            <ProjectContent />
          </Container>
        </div>
      );
    }
  }

  export default Projects;