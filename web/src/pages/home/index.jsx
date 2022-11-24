import Logo from "../../assets/logo.png";
import PredioHap from "../../assets/predio.png";
import Contraste from "../../assets/contraste.png";
import logoHap from "../../assets/logohap.png";
import logoNotre from "../../assets/logonotre.png";
import Video1 from "../../assets/video.png";
import Marbles from "../../assets/marbles.png";
import Rodape1 from "../../assets/rodape1.png";
import Rodape2 from "../../assets/rodape2.png";
import Vector from "../../assets/vector.png";

import { ArrowUpRight, ArrowCircleDown } from "phosphor-react";
import "./style.css";
import { Cards } from "../../components/Cards";
import { DropdownBtn } from "../../components/DropdownBtn";

export function Home() {
  return (
    <div className="Container">
      <div className="content1">
        <p className="p1">Contraste</p>
        <img className="img1" src={Contraste} alt="contraste" />
      </div>

      <div className="content2">
        <img src={Logo} alt="hapvida" />
        <a className="links" href="#">
          Institucional
        </a>
        <a className="links" href="#">
          Investidores <ArrowUpRight size={16} weight="bold" />
        </a>
        <a className="links" href="#">
          Rede de Atendimento
        </a>
        {/* <section className="accessarea">
          <p className="p2">Acesse sua área</p>
          <button className="ArrowCircleDown">
          </button>
        </section> */}
        <DropdownBtn/>
        <button className="knowplans">
          <a className="a1" href="https://www.google.com/">
            Conhecer Planos
          </a>
        </button>
      </div>
      <div className="content3">
        <div className="title">
          <section className="text">
            <p>&#91;Home&#93;&nbsp;&gt;</p>
            <p>&nbsp;&#91;Nível X&#93;</p>
          </section>
          <button className="comeback">Voltar</button>
          <h1 className="integration">Integração Hapvida e GNDI</h1>
          <p className="news">Fique por dentro das novidades</p>
        </div>
        <div className="predio1">
          <img className="predio2" src={PredioHap} alt="Prédio hapvida" />
        </div>
      </div>
      <div className="fusion">
        <h1 className="t1">Sobre a fusão Hapvida e GNDI</h1>
        <img className="imgvideo1" src={Video1} alt="Vídeo1" />
        <img className="vector" src={Vector} alt="Vector" />
        <img className="imgmarbles" src={Marbles} alt="Vídeo2" />
      </div>
      <div className="content4">
        <p className="p3">
          Começa mais um capítulo importante da história da saúde suplementar no
          Brasil: inicia a fusão Hapvida e NotreDame Intermédica, e isso só foi
          possível em razão da similaridade dos nossos valores de dar acesso à
          saúde de qualidade para a população brasileira e da competência do
          trabalho das nossas equipes. <br />
          <br />
          Com essa união, formamos o maior sistema de saúde suplementar do
          Brasil e uma das maiores empresas verticalizadas do mundo. <br />
          <br /> A combinação de negócios entre as Companhias possibilita a
          integração de uma vasta gama de produtos, estruturas hospitalares,
          recursos e soluções em benefício de clientes, beneficiários e
          prospects de ambas as Empresas. <br />
          <br /> O Hapvida tem forte atuação nas regiões Norte, Nordeste,
          Centro-Oeste e interior de São Paulo, com 43 anos de atuação no
          mercado, 7,4 milhões de beneficiários de Saúde e Odontologia e uma
          ampla rede com 477 unidadelogoNotres próprias. <br />
          <br /> O GNDI possui mais de 50 anos de história e tem forte atuação
          no mercado de Saúde das regiões Sudeste e Sul. São mais de 7,8 milhões
          de beneficiários e uma ampla rede assistencial de atendimento composta
          por unidades próprias e credenciadas. Atendemos mais de 15 milhões de
          beneficiários, entre Saúde e Odontologia, com Rede Própria, em todas
          as regiões do País. <br />
          <br /> Juntos, somos mais fortes!
        </p>
      </div>
      <div className="content5">
        <div className="logohap">
          <img className="imgHap" src={logoHap} alt="hapvida" />
          <br />
          <h4 className="t2">Hapvida, saúde pra valer.</h4>
          <br />
          <p>
            O sistema de medicina e odontologia que mais <br /> cresce no Brasil
          </p>
          <br />
          <button className="button">Ler conteúdo</button>
        </div>
        <div className="logonotre">
          <img className="imgNotre" src={logoNotre} alt="notre" />
          <br />
          <h4 className="t3">Notredame Intermédica </h4>
          <br />
          <p>Melhores soluções em saúde e odontologia</p>
          <br />
          <button className="button">Ler conteúdo</button>
        </div>
      </div>
      <Cards title="Hapvida + NotreDame juntas oferecem:" />
      <div className="Woman">
        <p className="t4">
          <span className="p4">Realize uma cotação</span> e descubra <br /> como
          a empresa de saúde que mais <br /> cresce no Brasil pode te ajudar
        </p>
        <button className="button2">Solicitar proposta</button>
      </div>
      <div className="content6">
        <img className="logoHap2" src={Logo} alt="hapvida" />
        <div className="informations">
          {/* <section className="accessarea">
            <p className="p2">Acesse sua área</p>
            <button className="ArrowCircleDown">
              <ArrowCircleDown size={16} color="#0054b8" weight="bold" />
            </button>
          </section> */}
          <DropdownBtn/>
          <a className="links2" href="#">
            Institucional
          </a>
          <a className="links2" href="#">
            Investidores <ArrowUpRight size={16} weight="bold" />
          </a>
          <a className="links2" href="#">
            Rede de Atendimento
          </a>
          <a className="links2" href="#">
            Trabalhe conosco
          </a>
          <a className="links2" href="#">
            Planos
          </a>
        </div>
      </div>
      <div className="rodape">
        <img className="rodape1" src={Rodape1} alt="" />
        <img className="rodape2" src={Rodape2} alt="" />
      </div>
    </div>
  );
}
