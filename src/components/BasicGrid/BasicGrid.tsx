import * as React from 'react';
import './BasicGrid.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { projects, Project } from '../../data/projects';
import ImageRender from '../ImageRender/ImageRender';
import Modal from '../Modal/Modal';



export default function BasicGrid() {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: 'transparent' }}>
      <Grid container spacing={2}>
        {projects.map((project: Project, index: number) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <div className="basicgrid-item" onClick={() => handleImageClick(index)}>
              <ImageRender project={project} index={index} />
              {project.title && (
                <h3 className="basicgrid-title">{project.title}</h3>
              )}
              {project.description && (
                <p className="basicgrid-description">{project.description}</p>
              )}
            </div>
          </Grid>
        ))}
      </Grid>
      {selectedIndex !== null && (
        <Modal 
          currentIndex={selectedIndex}
          images={projects.map(p => p.path)}
          titles={projects.map(p => p.title)}
          descriptions={projects.map(p => p.description)}
          onClose={handleCloseModal}
        />
      )}
    </Box>
  );
}
