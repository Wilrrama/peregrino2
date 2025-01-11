import React from "react";
import "../styles/stylesPage.css";
import { ISetItem, set } from "../data/set";

export const Set: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Setembro</h1>
      {set.map((word: ISetItem) => (
        <ul key={word.id} className="list">
          <li className="item">
            <div className="content">
              <img src={word.img} alt="imagem da igreja" className="image" />
              <div>
                <h5 className="date">{word.data}</h5>
                <h6 className="name">{word.nome}</h6>
                <p className="description">{word.word}</p>
              </div>
            </div>
            <audio controls className="audio">
              <source src={word.audio} type="audio/ogg" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </li>
        </ul>
      ))}
    </div>
  );
};
