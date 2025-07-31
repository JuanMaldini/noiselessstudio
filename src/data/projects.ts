// Tipo para definir la estructura de cada proyecto
export interface Project {
  path: string;           // Requerido: ruta de la imagen
  title?: string;         // Opcional: título del proyecto
  description?: string;   // Opcional: descripción del proyecto
}
const sample_00 = "../../public/renders/2.jpg";
const sample_01 = "../../public/renders/CONCURSO RENDERS-RODRIGO THOMANN.jpg";
const sample_02 = "../../public/renders/Escena Ramdom 28-Cocina- Dia+Luz LOGO.jpg";
const sample_03 = "../../public/renders/Escena Ramdom 28-Living- Dia+Luz.jpg";
const sample_04 = "../../public/renders/Escena Random 29-People.jpg";
const sample_05 = "../../public/renders/Escena Random 29.jpg";
const sample_06 = "../../public/renders/Escena Random 31-Close Up-Logo.jpg";
const sample_07 = "../../public/renders/Escena Random 31-People-Logo.jpg";
const sample_08 = "../../public/renders/Escena Random 34.jpg";
const sample_09 = "../../public/renders/Escena random 8-gigapixel-standard-scale-2_00x.jpg";
const sample_10 = "../../public/renders/Exterior 1.jpg";
const sample_11 = "../../public/renders/Exterior 2.jpg";
const sample_12 = "../../public/renders/Exterior 3.jpg";
const sample_13 = "../../public/renders/PAGINA 1.jpg";
const sample_14 = "../../public/renders/PAGINA 2.jpg";
const sample_15 = "../../public/renders/PAGINA 5.jpg";
const sample_16 = "../../public/renders/PAGINA 6.jpg";
const sample_17 = "../../public/renders/Sin título-1.jpg";
const sample_18 = "../../public/renders/View 2.jpg";
const sample_19 = "../../public/renders/WhatsApp Image 2025-05-06 at 19.16.55.jpg";
const sample_20 = "../../public/renders/name_collector.py";
const sample_21 = "../../public/renders/output.ts";

export const projects: Project[] = [
  {
    path: sample_00,
  },
  {
    path: sample_01,
  },
  {
    path: sample_02,
  },
  {
    path: sample_03,
  },
  {
    path: sample_04,
  },
  {
    path: sample_05,
  },
  {
    path: sample_06,
  },
  {
    path: sample_07,
  },
  {
    path: sample_08,
  },
  {
    path: sample_09,
  },
  {
    path: sample_10,
  },
  {
    path: sample_11,
  },
  {
    path: sample_12,
  },
  {
    path: sample_13,
  },
  {
    path: sample_14,
  },
  {
    path: sample_15,
  },
  {
    path: sample_16,
  },
  {
    path: sample_17,
  },
  {
    path: sample_18,
  },
  {
    path: sample_19,
  },
  {
    path: sample_20,
  },
  {
    path: sample_21,
  }
];