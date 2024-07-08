import React from "react";
import { IJanItem, jan } from "../data/jan";
import "../styles/stylesPage.css";

export const Jan: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Janeiro</h1>
      {jan.map((word: IJanItem) => (
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
