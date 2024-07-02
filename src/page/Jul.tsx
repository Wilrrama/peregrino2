import React from "react";
import { IJulItem, jul } from "../data/jul";
import "../styles/stylesPage.css";

export const Jul: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Julho</h1>
      {jul.map((word: IJulItem) => (
        <ul key={word.id} className="list">
          <li className="item">
            <img src={word.img} alt="imagem da igreja" className="image" />
            <div className="content">
              <h5 className="date">{word.data}</h5>
              <h6 className="name">{word.nome}</h6>
              <p className="description">{word.word}</p>
              <audio controls className="audio">
                <source src={word.audio} type="audio/ogg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};
