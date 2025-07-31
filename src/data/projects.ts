// Tipo para definir la estructura de cada proyecto
export interface Project {
  path: string;           // Requerido: ruta de la imagen
  title?: string;         // Opcional: título del proyecto
  description?: string;   // Opcional: descripción del proyecto
}

const sample_00 = "https://images.adsttc.com/media/images/5bbe/5c28/f197/ccec/bc00/002c/slideshow/kloem_hostel_S_067.jpg?1539202083";
const sample_01 = "https://images.adsttc.com/media/images/5bbe/5c1d/f197/ccec/bc00/002b/slideshow/Yellowsubmarine-11.jpg?1539202073";
const sample_02 = "https://images.adsttc.com/media/images/5bbe/5c13/f197/cc3c/6a00/0090/slideshow/Asif_Khan__PyeongChang_2018_%C2%A9_Luke_Hayes_7.jpg?1539202062";
const sample_03 = "https://images.adsttc.com/media/images/5bbe/5eec/f197/cc3c/6a00/009e/slideshow/SMS_HUBBATO_BLOG06.jpg?1539202791";
const sample_04 = "https://images.adsttc.com/media/images/5bbe/5ee2/f197/ccec/bc00/0034/slideshow/3T3A9408.jpg?1539202779";
const sample_05 = "https://images.adsttc.com/media/images/5bbf/4c44/f197/ccec/bc00/0257/slideshow/stringio.jpg?1539263550";
const sample_06 = "https://images.adsttc.com/media/images/5bbe/5ed7/f197/cc3c/6a00/009d/slideshow/11.jpg?1539202768";
const sample_07 = "https://images.adsttc.com/media/images/5bbe/5eca/f197/cc3c/6a00/009c/slideshow/10_VUE_Lobby_Reception.jpg?1539202755";
const sample_08 = "https://images.adsttc.com/media/images/5bbe/6062/f197/ccec/bc00/0037/slideshow/stringio.jpg?1539203166";
const sample_09 = "https://images.adsttc.com/media/images/5bbe/6058/f197/cc3c/6a00/00a6/slideshow/DSC03014.jpg?1539203154";
const sample_10 = "https://images.adsttc.com/media/images/5bbe/604e/f197/ccec/bc00/0036/slideshow/13_SCH8499_3132nicolas_schimp.jpg?1539203144";
const sample_11 = "https://images.adsttc.com/media/images/5bbe/6042/f197/ccec/bc00/0035/slideshow/05.jpg?1539203132";

// Array de proyectos declarados
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
  }
];