import { IJanItem, jan } from "../data/jan.ts";

export const Words = () => {
  return (
    <div>
      <h1>Janeiro</h1>
      {jan.map((word: IJanItem) => (
        <ul key={word.id}>
          <li>
            <img src={word.img} alt="imagem da igreja" />
            <h5>{word.data}</h5>
            <h6>{word.nome}</h6>
            <p>{word.word}</p>
            <audio controls>
              <source src={word.audio} type="audio/ogg" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </li>
        </ul>
      ))}
    </div>
  );
};
