import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './styles.css';
import HomeIcon from '../../assets/icons/home.svg';
import AtividadeIcon from '../../assets/icons/atividade.svg';
import PerfilIcon from '../../assets/icons/perfil.svg';
import Estimulo1 from '../../assets/images/estimulo1.png';
import Estimulo2 from '../../assets/images/estimulo2.png';
import Estimulo3 from '../../assets/images/estimulo3.png';
import Conquista1 from '../../assets/images/conquista1.png';
import Conquista2 from '../../assets/images/conquista2.png';
import Conquista3 from '../../assets/images/conquista3.png';
import Conquista4 from '../../assets/images/conquista4.png';
import Conquista5 from '../../assets/images/conquista5.png';
import Conquista6 from '../../assets/images/conquista6.png';
import Conquista7 from '../../assets/images/conquista7.png';
import Conquista8 from '../../assets/images/conquista8.png';
import Conquista9 from '../../assets/images/conquista9.png';
import Conquista10 from '../../assets/images/conquista10.png';
import Conquista11 from '../../assets/images/conquista11.png';
import Conquista12 from '../../assets/images/conquista12.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Perfil() {
  const handleDragStart = (e: any) => e.preventDefault();

  const items = [
    <img
      className="brands"
      src={Estimulo1}
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />,
    <img
      className="brands"
      src={Estimulo2}
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />,
    <img
      className="brands"
      src={Estimulo3}
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />,
  ];

  return (
    <Container className="external">
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
        <Col sm={12}>
          <h2 className="contamos">Histórico de atividades</h2>
          <a href="/treinos">
            <AliceCarousel
              mouseTracking
              items={items}
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
          </a>
        </Col>
      </Row>

      <Row className="d-flex align-items-center">
        <Col sm={12}>
          <h2 className="contamos">Conquistas</h2>
          <div className="conquistas-container">
            <div className="conquistas">
              <img className="conquistas-img" src={Conquista1} alt="" />
              <p>Em forma</p>
            </div>
            <div className="conquistas">
              <img className="conquistas-img" src={Conquista2} alt="" />
              <p>Alta queima</p>
            </div>
            <div className="conquistas">
              <img className="conquistas-img" src={Conquista3} alt="" />
              <p>Amante da noite</p>
            </div>
            <div className="conquistas">
              <img className="conquistas-img" src={Conquista4} alt="" />
              <p>Pilha completa</p>
            </div>
            <div className="conquistas">
              <img className="conquistas-img" src={Conquista5} alt="" />
              <p>Moda fera</p>
            </div>
            <div className="conquistas">
              <img className="conquistas-img" src={Conquista6} alt="" />
              <p>Dia Internacional da Ioga</p>
            </div>
            <div className="conquistas">
              <img className="conquistas-img" src={Conquista7} alt="" />
              <p>Aniversário da Nike</p>
            </div>
            <div className="conquistas">
              <img className="conquistas-img" src={Conquista8} alt="" />
              <p>Iogue</p>
            </div>
            <div className="conquistas">
              <img className="conquistas-img" src={Conquista9} alt="" />
              <p>Dia Internacional da Mulher</p>
            </div>
            <div className="conquistas">
              <img className="conquistas-img" src={Conquista10} alt="" />
              <p>Aniversário</p>
            </div>
            <div className="conquistas">
              <img className="conquistas-img" src={Conquista11} alt="" />
              <p>Ano Novo</p>
            </div>
            <div className="conquistas">
              <img className="conquistas-img" src={Conquista12} alt="" />
              <p>Madrugador</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Perfil;
