import amanda1 from "../assets/img/A1.jpg";
import audio0102 from "../assets/audios/fev/0102.opus";

export interface IFevItem {
  id: number;
  img: string;
  data: string;
  nome?: string;
  word: string;
  audio: string;
}
export const fev = [
  {
    id: 1,
    img: amanda1,
    data: "01/01/2024",
    nome: "Silvio",
    word: "João Cap 13 v34",
    audio: audio0102,
  },
];
