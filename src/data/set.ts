import recreio from "../assets/img/a2.jpg";
import amanda1 from "../assets/img/A1.jpg";
import amanda4 from "../assets/img/a4.jpg";

import audio_01_11 from "../assets/audios/nov/01-11.opus";
import audio_11_11 from "../assets/audios/nov/11-11.opus";
import audio_15_11 from "../assets/audios/nov/15-11.opus";
import audio_17_11 from "../assets/audios/nov/17-11.opus";
import audio_18_11 from "../assets/audios/nov/18-11.opus";
import audio_25_11 from "../assets/audios/nov/25-11.opus";
import audio_29_11 from "../assets/audios/nov/29-11.opus";

export interface INovItem {
  id: number;
  img: string;
  data: string;
  nome?: string;
  word: string;
  audio: string;
}
export const set = [
  {
    id: 1,
    img: amanda4,
    data: "01/11/2024",
    nome: "",
    word: "",
    audio: audio_01_11,
  },
  {
    id: 2,
    img: recreio,
    data: "11/11/2024",
    nome: "",
    word: "Daniel cap6",
    audio: audio_11_11,
  },
  {
    id: 3,
    img: amanda4,
    data: "15/11/2024",
    nome: "",
    word: "Atos apóstolos  cap 9",
    audio: audio_15_11,
  },
  {
    id: 4,
    img: amanda1,
    data: "17/11/2024",
    nome: "Santa Isabel rjm",
    word: "Filemon cap9",
    audio: audio_17_11,
  },
  {
    id: 5,
    img: recreio,
    data: "18/11/2024",
    nome: "",
    word: "2 reis cap2 v8",
    audio: audio_18_11,
  },
  {
    id: 6,
    img: recreio,
    data: "25/11/2024",
    nome: "",
    word: "Josué cap 2",
    audio: audio_25_11,
  },
  {
    id: 7,
    img: amanda4,
    data: "29/11/2024",
    nome: "",
    word: "",
    audio: audio_29_11,
  },
];
