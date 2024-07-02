import { useState } from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import "./styles/global.css";
import { Jan } from "./page/Jan";
import { Fev } from "./page/Fev";
import { Mar } from "./page/Mar";
import { Abr } from "./page/Abr";
import { Mai } from "./page/Mai";
import { Jun } from "./page/Jun";
import { Jul } from "./page/Jul";
import { Ago } from "./page/Ago";
import { Set } from "./page/Set";
import { Out } from "./page/Out";
import { Nov } from "./page/Nov";
import { Dez } from "./page/Dez";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("Jul");

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <Nav onNavClick={handleNavClick} />
      {currentPage === "Jan" && <Jan />}
      {currentPage === "Fev" && <Fev />}
      {currentPage === "Mar" && <Mar />}
      {currentPage === "Abr" && <Abr />}
      {currentPage === "Mai" && <Mai />}
      {currentPage === "Jun" && <Jun />}
      {currentPage === "Jul" && <Jul />}
      {currentPage === "Ago" && <Ago />}
      {currentPage === "Set" && <Set />}
      {currentPage === "Out" && <Out />}
      {currentPage === "Nov" && <Nov />}
      {currentPage === "Dez" && <Dez />}
    </>
  );
}

export default App;
