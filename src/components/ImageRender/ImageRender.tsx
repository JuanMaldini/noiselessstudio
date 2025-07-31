import React from 'react';
import './ImageRender.css';
import { Project } from '../../data/projects';

interface ImageRenderProps {
  project: Project;
  index: number;
}

const ImageRender: React.FC<ImageRenderProps> = ({ project, index }) => {
  return (
    <div className="image-render-container">
      <img 
        src={project.path} 
        alt={project.title || `Project ${index + 1}`}
        className="image-render-img"
        onError={(e) => {
          // Fallback si la imagen no se encuentra
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
};

export default ImageRender;
