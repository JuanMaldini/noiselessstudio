import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { projects, Project } from '../../data/projects';
import ImageRender from '../ImageRender/ImageRender';

const Item = styled('div')({
  height: '250px',
  borderRadius: '8px',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  },
});

const ProjectTitle = styled('h3')(({ theme }) => ({
  display: 'none',
  margin: 0,
  fontSize: '1rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

const ProjectDescription = styled('p')(({ theme }) => ({
  display: 'none',
  margin: 0,
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  lineHeight: 1.4,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {projects.map((project: Project, index: number) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
            <Item>
              <ImageRender project={project} index={index} />
              {project.title && (
                <ProjectTitle>{project.title}</ProjectTitle>
              )}
              {project.description && (
                <ProjectDescription>{project.description}</ProjectDescription>
              )}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
