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
import 'react-alice-carousel/lib/alice-carousel.css';

function Perfil() {
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
    </Container>
  );
}

export default Perfil;
