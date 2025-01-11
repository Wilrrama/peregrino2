import recreio from "../assets/img/a2.jpg";
import amanda1 from "../assets/img/A1.jpg";
import amanda4 from "../assets/img/a4.jpg";

import audio0609 from "../assets/audios/set/06-09.opus";
import audio0909 from "../assets/audios/set/09-09.opus";
import audio1309 from "../assets/audios/set/13-09.opus";
import audio2009 from "../assets/audios/set/20-09.opus";
import audio2309 from "../assets/audios/set/23-09.opus";
import audio2909 from "../assets/audios/set/29-09.opus";

export interface ISetItem {
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
    data: "06/09/2024",
    nome: "",
    word: "Felipense cap4 v10",
    audio: audio0609,
  },
  {
    id: 2,
    img: recreio,
    data: "09/09/2024",
    nome: "",
    word: "Êxodo cap17 v8",
    audio: audio0909,
  },
  {
    id: 3,
    img: amanda4,
    data: "13/09/2024",
    nome: "",
    word: "Salmos 40",
    audio: audio1309,
  },
  {
    id: 4,
    img: amanda4,
    data: "20/09/2024",
    nome: "",
    word: "",
    audio: audio2009,
  },
  {
    id: 5,
    img: recreio,
    data: "23/09/2024",
    nome: "",
    word: "Ester cap5",
    audio: audio2309,
  },
  {
    id: 6,
    img: amanda1,
    data: "29/09/2024",
    nome: "",
    word: "Josué Cap1 v9",
    audio: audio2909,
  },
];
