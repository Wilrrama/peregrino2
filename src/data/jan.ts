import amanda1 from "../assets/img/A1.jpg";
import audio1501 from "../assets/audios/jan/1501.opus";

export interface IJanItem {
  id: number;
  img: string;
  data: string;
  nome?: string;
  word: string;
  audio: string;
}
export const jan = [
  {
    id: 1,
    img: amanda1,
    data: "01/01/2024",
    nome: "Silvio",
    word: "João Cap 13 v34",
    audio: audio1501,
  },
];
