import { CaretCircleDown, CaretCircleUp } from "phosphor-react";
import { useState } from "react";
import "./styles.css";

export const DropdownBtn = () => {
  const [state, setState] = useState();

  return (
    <div class="dropdown">
      <button
        onMouseOver={() => {
          setState(true);
        }}
        onMouseOut={() => {
          setState(false);
        }}
        class="dropbtn"
      >
        Acesse sua área&nbsp;
        {state ? (
          <>
            <CaretCircleUp size={16} color="#0054b8" />
          </>
        ) : (
          <>
            <CaretCircleDown size={16} color="#0054b8" />
          </>
        )}
      </button>
      <div class="dropdown-content">
        <a className="a" href="#">Beneficiários</a>
        <a className="a" chref="#">Corretores</a>
        <a className="a" href="#">Prestadores</a>
        <a className="a" href="#">Quero ser cliente</a>
      </div>
    </div>
  );
};
