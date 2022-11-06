import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './styles.css';
import HomeIcon from '../../assets/icons/home.svg';
import AtividadeIcon from '../../assets/icons/atividade.svg';
import PerfilIcon from '../../assets/icons/perfil.svg';
import Centauro from '../../assets/images/centauro.png';
import Decathlon from '../../assets/images/decathlon.png';
import Netshoes from '../../assets/images/netshoes.png';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
   
  };
// continuar com alice carousel https://github.com/maxmarinich/react-alice-carousel


  return (
    <Container>
      <Row>
        <Navbar variant="light">
          <Container className="navbar-container">
            <Navbar.Brand className="brand-container" href="/home">
              <p className="small-logo">GO</p>
              <p className="hello">Olá, fulano!</p>
            </Navbar.Brand>
            <Nav variant="pills" className="me-0">
              <Nav.Link href="/home">
                <img className="nav-icons" src={HomeIcon} alt="" />
                Home
              </Nav.Link>
              <Nav.Link href="/atividade">
                <img className="nav-icons" src={AtividadeIcon} alt="" />
                Atividade
              </Nav.Link>
              <Nav.Link href="/perfil">
                <img className="nav-icons" src={PerfilIcon} alt="" />
                Perfil
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Row>

      <Row className="d-flex align-items-center">
        <Col sm={12} md={8}>
          <h2 className="contamos">
            Contamos com os melhores parceiros para você
          </h2>
        </Col>
        <Col sm={12} md={4}>
          <div className="saldo-container">
            <span className="saldo">Saldo atual</span>
            <div className="pontos-container">
              <span className="pontos">1000 pontos</span>
              <hr className="hr" />
              <span className="pontos">R$ 200</span>
              <a href="/perfil" className="ver">
                Ver histórico
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Slider {...settings}>
          <div>
            <img src={Decathlon} alt="First slide" />
          </div>
          <div>
            <img src={Netshoes} alt="Second slide" />
          </div>
          <div>
            <img src={Centauro} alt="Third slide" />
          </div>
        </Slider>
      </Row>
      <Row>
        <Col>Desafios</Col>
      </Row>
    </Container>
  );
}

export default Home;
