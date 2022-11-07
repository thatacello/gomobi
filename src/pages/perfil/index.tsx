import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './styles.css';
import HomeIcon from '../../assets/icons/home.svg';
import AtividadeIcon from '../../assets/icons/atividade.svg';
import PerfilIcon from '../../assets/icons/perfil.svg';
import Estimulo1 from '../../assets/images/estimulo1.png';
import Estimulo2 from '../../assets/images/estimulo2.png';
import Estimulo3 from '../../assets/images/estimulo3.png';
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
        </Col>
      </Row>

      <Row className="d-flex align-items-center">
        <Col sm={12}>
          <h2 className="contamos">Conquistas</h2>
          <div className='conquistas-container'>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Perfil;
