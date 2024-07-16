import React from "react";
import "../styles/nav.css";

interface NavProps {
  onNavClick: (page: string) => void;
}

export const Nav: React.FC<NavProps> = ({ onNavClick }) => {
  return (
    <nav className="nav__container">
      <div>
        <button onClick={() => onNavClick("Jan")}>Jan</button>
        <button onClick={() => onNavClick("Fev")}>Fev</button>
        <button onClick={() => onNavClick("Mar")}>Mar</button>
        <button onClick={() => onNavClick("Abr")}>Abr</button>
        <button onClick={() => onNavClick("Mai")}>Mai</button>
        <button onClick={() => onNavClick("Jun")}>Jun</button>
      </div>
      <div>
        <button onClick={() => onNavClick("Jul")}>Jul</button>
        <button onClick={() => onNavClick("Ago")}>Ago</button>
        <button onClick={() => onNavClick("Set")}>Set</button>
        <button onClick={() => onNavClick("Out")}>Out</button>
        <button onClick={() => onNavClick("Nov")}>Nov</button>
        <button onClick={() => onNavClick("Dez")}>Dez</button>
      </div>
    </nav>
  );
};
