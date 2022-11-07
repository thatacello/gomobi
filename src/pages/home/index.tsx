import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './styles.css';
import HomeIcon from '../../assets/icons/home.svg';
import AtividadeIcon from '../../assets/icons/atividade.svg';
import PerfilIcon from '../../assets/icons/perfil.svg';
import Centauro from '../../assets/images/centauro.png';
import Decathlon from '../../assets/images/decathlon.png';
import Netshoes from '../../assets/images/netshoes.png';
import Desafio1 from '../../assets/images/desafio1.png';
import Desafio2 from '../../assets/images/desafio2.png';
import Desafio3 from '../../assets/images/desafio3.png';
import AliceCarousel from 'react-alice-carousel';


function Home() {
  const handleDragStart = (e: any) => e.preventDefault();

  const items = [
    <img
      className="brands"
      src={Decathlon}
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />,
    <img
      className="brands"
      src={Netshoes}
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />,
    <img
      className="brands"
      src={Centauro}
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />,
  ];

  const items2 = [
    <img
      className="chalenges"
      src={Desafio1}
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />,
    <img
      className="chalenges"
      src={Desafio2}
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />,
    <img
      className="chalenges"
      src={Desafio3}
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />,
  ];

  return (
    <Container className='external'>
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
        <Col sm={12} md={6}>
          <h2 className="contamos">
            Contamos com os melhores parceiros para você
          </h2>
        </Col>
        <Col sm={12} md={6}>
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
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay={true}
          infinite={true}
          animationDuration={3000}
          autoPlayStrategy="none"
          disableButtonsControls={true}
          disableDotsControls={true}
          responsive={{
            0: {
              items: 1,
            },
            625: {
              items: 3,
            },
            1024: {
              items: 4,
            },
          }}
        />
      </Row>
      <Row>
        <Col>
          <h3 className="desafios">Desafios</h3>
          <AliceCarousel
            mouseTracking
            items={items2}
            autoPlay={true}
            infinite={true}
            animationDuration={5000}
            autoPlayStrategy="none"
            disableButtonsControls={true}
            disableDotsControls={true}
            responsive={{
              0: {
                items: 1,
              },
              625: {
                items: 2,
              },
              1024: {
                items: 3,
              },
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
