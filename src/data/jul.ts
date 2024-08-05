import audio_01_07 from "../assets/audios/jul/01-07.opus";
import audio_02_07 from "../assets/audios/jul/02-07.opus";
import audio_06_07 from "../assets/audios/jul/06-07.opus";
import audio_13_07 from "../assets/audios/jul/13-07.opus";
import audio_15_07 from "../assets/audios/jul/15-07.opus";
import audio_19_07 from "../assets/audios/jul/19-07.opus";
import audio_20_07 from "../assets/audios/jul/20-07.opus";
import audio_21_07 from "../assets/audios/jul/21-07.opus";
import audio_22_07 from "../assets/audios/jul/22-07.opus";
import audio_25_07 from "../assets/audios/jul/25-07.opus";
import audio_26_07 from "../assets/audios/jul/26-07.opus";
import audio_27_07 from "../assets/audios/jul/27-07.opus";
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
    id: 13,
    img: a1,
    data: "27/07/2024",
    nome: "Amanda 1",
    word: "João cap 16 v 20",
    audio: audio_27_07,
  },
  {
    id: 12,
    img: a4,
    data: "26/07/2024",
    nome: "Amanda 4",
    word: "Salmos 133",
    audio: audio_26_07,
  },
  {
    id: 11,
    img: a1,
    data: "25/07/2024",
    nome: "Amanda 1",
    word: "Salmos 133",
    audio: audio_25_07,
  },
  {
    id: 10,
    img: recreio,
    data: "22/07/2024",
    nome: "Recreio 2000",
    word: "Salmos 126",
    audio: audio_22_07,
  },
  {
    id: 9,
    img: recreio,
    data: "21/07/2024",
    nome: "Assentamento rjm",
    word: "Matheus cap 19 v 13",
    audio: audio_21_07,
  },
  {
    id: 8,
    img: a1,
    data: "20/07/2024",
    nome: "Amanda 1",
    word: "Números cap 23 v18",
    audio: audio_20_07,
  },
  {
    id: 7,
    img: a4,
    data: "19/07/2024",
    nome: "Amanda 4",
    word: "Lucas cap 8 v 22",
    audio: audio_19_07,
  },
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
