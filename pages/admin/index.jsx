import { Container,Row,Col,Button } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'


export default function index(){
  const divStyle = {
  color: 'white',
  fontSize: "18.5px",
  listStyle: "none"
};
  const li={
    color:"white",
    fontWeight:"300",
    textTransform:"uppercase",
    fontSize:"14px",
    padding:"7px"
  };
  return(<>
    <Container fluid>
      <Row>
        <Col sm={2} className="bg-dark text-white">
          <p className="h1 mt-5">Dashboard</p>
          <ul style={divStyle}>
            <li style={li}><a href="">Home</a></li>
            <li style={li}><a href="">User Profile</a></li>
            <li style={li}><a href="">Tipography</a></li>
            <li style={li}><a href="">Icons</a></li>
          </ul>

          
        </Col>
        <Col sm={10}>
        Conteudo</Col>
      </Row>
    </Container><div style={divStyle}>Footer</div>
  </>);
}