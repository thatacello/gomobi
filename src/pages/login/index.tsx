import { Col, Container, Form, Row, Image } from 'react-bootstrap';
import Woman from '../../assets/images/woman.png';
import './styles.css';

function Login() {
  return (
    <Container>
      <Row>
        <Col className='column-left' sm={12} md={6}>
          <h1 className="logo">
            GO
            <br />
            mobi
          </h1>
          <h2 className="title">O seu lugar de treino</h2>
          <div className="form-container">
            <Form.Control
              className="form"
              type="text"
              id="inputPassword"
              aria-describedby="textHelpBlock"
              placeholder="Email"
            />
            <Form.Control
              className="form"
              type="password"
              id="inputText"
              aria-describedby="passwordHelpBlock"
              placeholder="Senha"
            />
            <a href="/home" className="forgot-password">
              Esqueci a senha
            </a>
          </div>
          <div className="button-container">
            <a className="btn-entrar" href="/home">
              Entrar
            </a>
            <a className="btn-nova-conta" href="/home">
              Criar nova conta
            </a>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <Image src={Woman} fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
