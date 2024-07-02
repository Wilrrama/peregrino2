import encontro from "../assets/img/encontro.jpg";
import "../styles/header.css";

export const Header = () => {
  return (
    <header className="header__container">
      <figure className="header__figure">
        <img
          src={encontro}
          alt="encontro com Jesus"
          className="header__image"
        />
        <figcaption className="header__image__title">Peregrino</figcaption>
        <figcaption className="header__image__description">2024</figcaption>
      </figure>
    </header>
  );
};
