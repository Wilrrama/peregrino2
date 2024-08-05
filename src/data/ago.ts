import recreio from "../assets/img/a2.jpg";
import amanda1 from "../assets/img/A1.jpg";
import audio_01_06 from "../assets/audios/jun/01-06.opus";
import audio_06_06 from "../assets/audios/jun/06-06.opus";
import audio_07_06 from "../assets/audios/jun/07-06.opus";
import audio_08_06 from "../assets/audios/jun/08-06.opus";
import audio_13_06 from "../assets/audios/jun/13-06.opus";
import audio_14_06 from "../assets/audios/jun/14-06.opus";
import audio_17_06 from "../assets/audios/jun/17-06.opus";
import audio_22_06 from "../assets/audios/jun/22-06.opus";
import audio_24_06 from "../assets/audios/jun/24-06.opus";

export interface IAgoItem {
  id: number;
  img: string;
  data: string;
  nome?: string;
  word: string;
  audio: string;
}
export const jun = [
  {
    id: 1,
    img: amanda1,
    data: "01/06/2024",
    nome: "Fabiano",
    word: "Matheus cap 11 v 25",
    audio: audio_01_06,
  },
  {
    id: 2,
    img: recreio,
    data: "06/06/2024",
    nome: "Caraguatatuba",
    word: "Lucas cap 15 v 11",
    audio: audio_06_06,
  },
  {
    id: 3,
    img: recreio,
    data: "07/06/2024",
    nome: "",
    word: "Salmos cap 22",
    audio: audio_07_06,
  },
  {
    id: 4,
    img: amanda1,
    data: "08/06/2024",
    nome: "Fabiano",
    word: "Jeremias cap 18",
    audio: audio_08_06,
  },
  {
    id: 5,
    img: amanda1,
    data: "13/06/2024",
    nome: "Caraguatatuba",
    word: "Lucas cap 15 v 11",
    audio: audio_13_06,
  },
  {
    id: 6,
    img: recreio,
    data: "14/06/2024",
    nome: "",
    word: "Salmos cap 21",
    audio: audio_14_06,
  },
  {
    id: 7,
    img: recreio,
    data: "17/06/2024",
    nome: "Caraguatatuba",
    word: "Lucas cap 15 v 11",
    audio: audio_17_06,
  },
  {
    id: 8,
    img: recreio,
    data: "22/06/2024",
    nome: "Caraguatatuba",
    word: "Lucas cap 15 v 11",
    audio: audio_22_06,
  },
  {
    id: 9,
    img: recreio,
    data: "24/06/2024",
    nome: "Caraguatatuba",
    word: "Lucas cap 15 v 11",
    audio: audio_24_06,
  },
];
