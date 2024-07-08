import audio_01_07 from "../assets/audios/jul/01-07.opus";
import recreio from "../assets/img/a2.jpg";
import audio_02_07 from "../assets/audios/jul/02-07.opus";
import audio_06_07 from "../assets/audios/jul/06-07.opus";
import bandeira from "../assets/img/bandeira_salto.jpg";
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
