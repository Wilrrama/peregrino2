import recreio from "../assets/img/a2.jpg";
import amanda1 from "../assets/img/A1.jpg";
import amanda4 from "../assets/img/a4.jpg";
import audio_01_08 from "../assets/audios/ago/01-08.opus";
import audio_03_08 from "../assets/audios/ago/03-08.opus";
import audio_05_08 from "../assets/audios/ago/05-08.opus";
import audio_08_08 from "../assets/audios/ago/08-08.opus";
import audio_09_08 from "../assets/audios/ago/09-08.opus";
import audio_12_08 from "../assets/audios/ago/12-08.opus";
import audio_15_08 from "../assets/audios/ago/15-08.opus";
import audio_16_08 from "../assets/audios/ago/16-08.opus";
import audio_19_08 from "../assets/audios/ago/19-08.opus";
import audio_22_08 from "../assets/audios/ago/22-08.opus";
import audio_23_08 from "../assets/audios/ago/23-08.opus";
import audio_26_08 from "../assets/audios/ago/26-08.opus";
import audio_30_08 from "../assets/audios/ago/30-08.opus";
import audio_31_08 from "../assets/audios/ago/31-08.opus";

export interface IAgoItem {
  id: number;
  img: string;
  data: string;
  nome?: string;
  word: string;
  audio: string;
}
export const ago = [
  {
    id: 1,
    img: amanda1,
    data: "01/08/2024",
    nome: "",
    word: "Amos cap 7",
    audio: audio_01_08,
  },
  {
    id: 2,
    img: amanda1,
    data: "03/08/2024",
    nome: "",
    word: "Marcos cap7 v31",
    audio: audio_03_08,
  },
  {
    id: 3,
    img: recreio,
    data: "05/08/2024",
    nome: "",
    word: "Zacarias cap 3",
    audio: audio_05_08,
  },
  {
    id: 4,
    img: amanda1,
    data: "08/08/2024",
    nome: "",
    word: "Joel cap2",
    audio: audio_08_08,
  },
  {
    id: 5,
    img: amanda4,
    data: "09/08/2024",
    nome: "",
    word: "Efésios cap 6",
    audio: audio_09_08,
  },
  {
    id: 6,
    img: recreio,
    data: "12/08/2024",
    nome: "",
    word: "Salmos 125",
    audio: audio_12_08,
  },
  {
    id: 7,
    img: amanda1,
    data: "15/08/2024",
    nome: "",
    word: "Ester cap6",
    audio: audio_15_08,
  },
  {
    id: 8,
    img: amanda4,
    data: "16/08/2024",
    nome: "",
    word: "Atos apóstolo cap3",
    audio: audio_16_08,
  },
  {
    id: 9,
    img: recreio,
    data: "19/08/2024",
    nome: "",
    word: "Salmos cap 126",
    audio: audio_19_08,
  },
  {
    id: 10,
    img: amanda1,
    data: "22/08/2024",
    nome: "",
    word: "Salmos cap23",
    audio: audio_22_08,
  },
  {
    id: 11,
    img: amanda4,
    data: "23/08/2024",
    nome: "",
    word: "2 reis cap4",
    audio: audio_23_08,
  },
  {
    id: 12,
    img: recreio,
    data: "26/08/2024",
    nome: "",
    word: "2 reis cap4",
    audio: audio_26_08,
  },
  {
    id: 13,
    img: amanda4,
    data: "30/08/2024",
    nome: "",
    word: "Nemias cap2",
    audio: audio_30_08,
  },
  {
    id: 14,
    img: amanda1,
    data: "31/08/2024",
    nome: "",
    word: "Ezequiel 37",
    audio: audio_31_08,
  },
];
