import React from "react";
import { IJanItem, jan } from "../data/jan";
import "../styles/jan.css";

export const Jan: React.FC = () => {
  return (
    <div className="jan__container">
      <h1 className="jan__title">Janeiro</h1>
      {jan.map((word: IJanItem) => (
        <ul key={word.id} className="jan__list">
          <li className="jan__item">
            <img src={word.img} alt="imagem da igreja" className="jan__image" />
            <div className="jan__content">
              <h5 className="jan__date">{word.data}</h5>
              <h6 className="jan__name">{word.nome}</h6>
              <p className="jan__description">{word.word}</p>
              <audio controls className="jan__audio">
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
