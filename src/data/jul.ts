import audio_01_07 from "../assets/audios/jul/01-07.opus";
import recreio from "../assets/img/a2.jpg";

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
    id: 1,
    img: recreio,
    data: "01/07/2024",
    nome: "Miguel",
    word: "1 Samuel cap25",
    audio: audio_01_07,
  },
];
