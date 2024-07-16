import audio_01_07 from "../assets/audios/jul/01-07.opus";
import audio_02_07 from "../assets/audios/jul/02-07.opus";
import audio_06_07 from "../assets/audios/jul/06-07.opus";
import audio_13_07 from "../assets/audios/jul/13-07.opus";
import audio_15_07 from "../assets/audios/jul/15-07.opus";
import bandeira from "../assets/img/bandeira_salto.jpg";
import a4 from "../assets/img/a4.jpg";
import recreio from "../assets/img/a2.jpg";
import a1 from "../assets/img/A1.jpg";
export interface IJulItem {
  id: number;
  img: string;
  data: string;
  nome?: string;
  word: string;
  audio: string;
}
export const jul = [
  {
    id: 6,
    img: recreio,
    data: "15/07/2024",
    nome: "Recreio 2000",
    word: "Lucas cap 18 v 35",
    audio: audio_15_07,
  },
  {
    id: 5,
    img: a1,
    data: "14/07/2024",
    nome: "Jd Amanda 1",
    word: "1 Samuel cap 17 v32",
    audio: audio_13_07,
  },
  {
    id: 4,
    img: a4,
    data: "13/07/2024",
    nome: "Jd Amanda 4",
    word: "Gênesis cap 28 v10",
    audio: audio_13_07,
  },
  {
    id: 3,
    img: bandeira,
    data: "06/07/2024",
    nome: "Bandeira, Salto de Pirapora",
    word: "Apocalipse cap 7 v9",
    audio: audio_06_07,
  },
  {
    id: 2,
    img: recreio,
    data: "02/07/2024",
    nome: "Casa da irmã Ruty",
    word: "Lucas cap.18 v 18",
    audio: audio_02_07,
  },
  {
    id: 1,
    img: recreio,
    data: "01/07/2024",
    nome: "Miguel",
    word: "1 Samuel cap25",
    audio: audio_01_07,
  },
];
