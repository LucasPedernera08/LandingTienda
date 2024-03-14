import React from "react";
import './TopBarcss.css';
import SearchBar from "./Searchbar";
import Logo from "./Logos";
import PrimerDrop from "./Dropdownbar";

//aca tengo que dejar el search y los logotipos 

const Topbar = () => {
     
  return (
      <div className="Topbar">
          <Logo />
          <SearchBar />
          <PrimerDrop />
          </div>

  );

};

export default Topbar;



