import { Col, Container, Nav, Navbar, Row, Image } from 'react-bootstrap';
import './styles.css';
import HomeIcon from '../../assets/icons/home.svg';
import AtividadeIcon from '../../assets/icons/atividade.svg';
import PerfilIcon from '../../assets/icons/perfil.svg';
import Map from '../../assets/images/map.png';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function Atividade() {
  const data = [
    {
      name: '8h',
      km: 9,
      amt: 8,
    },
    {
      name: '10h',
      km: 2,
      amt: 10,
    },
    {
      name: '12h',
      km: 5,
      amt: 12,
    },
    {
      name: '14h',
      km: 4,
      amt: 14,
    },
    {
      name: '16h',
      km: 7,
      amt: 16,
    },
    {
      name: '18h',
      km: 5,
      amt: 18,
    },
    {
      name: '20h',
      km: 10,
      amt: 20,
    },
  ];
  const semana = [
    {
      name: 'SEG',
      km: 18,
      amt: 8,
    },
    {
      name: 'TER',
      km: 11,
      amt: 10,
    },
    {
      name: 'QUA',
      km: 12,
      amt: 12,
    },
    {
      name: 'QUI',
      km: 15,
      amt: 14,
    },
    {
      name: 'SEX',
      km: 16,
      amt: 16,
    },
    {
      name: 'SAB',
      km: 13,
      amt: 18,
    },
    {
      name: 'DOM',
      km: 20,
      amt: 20,
    },
  ];
  const mes = [
    {
      name: 'JAN',
      km: 30,
      amt: 8,
    },
    {
      name: 'FEV',
      km: 32,
      amt: 10,
    },
    {
      name: 'MAR',
      km: 25,
      amt: 12,
    },
    {
      name: 'ABR',
      km: 40,
      amt: 14,
    },
    {
      name: 'MAI',
      km: 28,
      amt: 16,
    },
    {
      name: 'JUN',
      km: 38,
      amt: 18,
    },
    {
      name: 'JUL',
      km: 35,
      amt: 20,
    },
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

      <h2 className="veja">Veja o seu desempenho</h2>
      <Row>
        <Col sm={12} md={4}>
          <div
            className="chart-container"
            style={{ width: '100%', height: 300 }}
          >
            <h4 className="chart-title">Km feitos hoje</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={300}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="km" fill="#3451ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div
            className="chart-container"
            style={{ width: '100%', height: 300 }}
          >
            <h4 className="chart-title">Km feitos na semana</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={300}
                height={300}
                data={semana}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="km" fill="#3451ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div
            className="chart-container"
            style={{ width: '100%', height: 300 }}
          >
            <h4 className="chart-title">Km feitos no mês</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={300}
                height={300}
                data={mes}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="km" fill="#3451ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 className="destaques">Destaques</h3>
          <p className="lugares">Lugares por onde passou esta semana</p>
          <Image fluid src={Map} alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default Atividade;
