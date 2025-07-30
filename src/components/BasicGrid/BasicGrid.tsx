import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { projects, Project } from '../../data/projects';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const ProjectImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '120px',
  objectFit: 'cover',
  borderRadius: '4px',
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
              <ProjectImage 
                src={project.path} 
                alt={project.title || `Project ${index + 1}`}
                onError={(e) => {
                  // Fallback si la imagen no se encuentra
                  e.currentTarget.style.display = 'none';
                }}
              />
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
