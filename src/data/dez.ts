import recreio200 from "../assets/img/a2.jpg";
import amanda4 from "../assets/img/a4.jpg";
import audio0612 from "../assets/audios/dez/06-12.opus";
import audio0912 from "../assets/audios/dez/09-12.opus";
import audio1312 from "../assets/audios/dez/13-12.opus";
import audio2712 from "../assets/audios/dez/27-12.opus";

export interface IDezItem {
  id: number;
  img: string;
  data: string;
  nome?: string;
  word: string;
  audio: string;
}
export const dez = [
  {
    id: 1,
    img: amanda4,
    data: "06/12/2024",
    nome: "",
    word: "João Cap 13 v34",
    audio: audio0612,
  },
  {
    id: 2,
    img: recreio200,
    data: "09/12/2024",
    nome: "",
    word: "João Cap 13 v34",
    audio: audio0912,
  },
  {
    id: 3,
    img: amanda4,
    data: "13/12/2024",
    nome: "",
    word: "João Cap 13 v34",
    audio: audio1312,
  },
  {
    id: 4,
    img: amanda4,
    data: "27/12/2024",
    nome: "",
    word: "João Cap 13 v34",
    audio: audio2712,
  },
];
