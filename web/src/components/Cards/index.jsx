import "./styles.css";
import Clients from "../../assets/clients.png";
import Locations from "../../assets/location.png";
import Hospitals from "../../assets/hospital.png";
import Calls from "../../assets/calls.png";
import Clinics from "../../assets/clinics.png";
import Diagnosis from "../../assets/diagnosis.png";
import Collaborators from "../../assets/collaborators.png";
import Doctors from "../../assets/doctors.png";
import Dentists from "../../assets/dentists.png";

export const Cards = (props) => {
  return (
    <div className="container">
      <h1 className="title-cards-container">{props.title}</h1>
      <div className="cards">
        <div className="div1">
          <div className="card1">
            <div className="div">
              <img className="img-cards" src={Clients} alt="" />
              <section className="sec" />
            </div>
            <h1 className="title-cards">+15 milhões</h1>
            <p className="paragraph-cards">de Clientes</p>
          </div>
          <div className="card2">
          <div className="div">
              <img className="img-cards" src={Locations} alt="" />
              <section className="sec" />
            </div>
            <h1 className="title-cards">20 Estados</h1>
            <p className="paragraph-cards">de Rede Própria</p>
          </div>
          <div className="card3">
          <div className="div">
              <img className="img-cards" src={Hospitals} alt="" />
              <section className="sec" />
            </div>
            <h1 className="title-cards">87 Hospitais</h1>
            <p className="paragraph-cards">Disponíveis</p>
          </div>
        </div>
        <div className="div2">
          <div className="card4">
            <div className="div">
              <img className="img-cards" src={Calls} alt="" />
              <section className="sec" />
            </div>
            <h1 className="title-cards">76 Pronto</h1>
            <p className="paragraph-cards">Atendimentos</p>
          </div>
          <div className="card5">
          <div className="div">
              <img className="img-cards" src={Clinics} alt="" />
              <section className="sec" />
            </div>
            <h1 className="title-cards">323 Centros</h1>
            <p className="paragraph-cards">Clínicos</p>
          </div>
          <div className="card6">
          <div className="div">
              <img className="img-cards" src={Diagnosis} alt="" />
              <section className="sec" />
            </div>
            <h1 className="title-cards">270 Unidades</h1>
            <p className="paragraph-cards">de Diagnóstico</p>
          </div>
          </div>
          <div className="div3">
            <div className="card7">
            <div className="div">
              <img className="img-cards" src={Collaborators} alt="" />
              <section className="sec" />
            </div>
              <h1 className="title-cards">+66 mil</h1>
              <p className="paragraph-cards">Colaboradores</p>
            </div>
            <div className="card8">
            <div className="div">
              <img className="img-cards" src={Doctors} alt="" />
              <section className="sec" />
            </div>
              <h1 className="title-cards">+27,3 mil</h1>
              <p className="paragraph-cards">Médicos</p>
            </div>
            <div className="card9">
            <div className="div">
              <img className="img-cards" src={Dentists} alt="" />
              <section className="sec" />
            </div>
              <h1 className="title-cards">+33 mil</h1>
              <p className="paragraph-cards">Dentistas</p>
            </div>
        </div>
      </div>
    </div>
  );
};
