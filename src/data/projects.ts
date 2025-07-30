// Tipo para definir la estructura de cada proyecto
export interface Project {
  path: string;           // Requerido: ruta de la imagen
  title?: string;         // Opcional: título del proyecto
  description?: string;   // Opcional: descripción del proyecto
}

// Array de proyectos declarados
export const projects: Project[] = [
  {
    path: "/images/project1.jpg",
    title: "Proyecto 1",
    description: "Descripción del primer proyecto"
  },
  {
    path: "/images/project2.jpg",
    title: "Proyecto 2",
    description: "Descripción del segundo proyecto"
  },
  {
    path: "/images/project3.jpg",
    title: "Proyecto 3"
    // description es opcional
  },
  {
    path: "/images/project4.jpg"
    // title y description son opcionales
  },
  {
    path: "/images/project5.jpg",
    title: "Proyecto 5",
    description: "Descripción del quinto proyecto"
  }
];
