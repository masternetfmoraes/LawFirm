import { Container,Row,Col,Button } from 'react-bootstrap';

export default function index(){
  const divStyle = {
  color: 'white',
  fontSize: "45px",
  backgroundColor: 'black',
};
  return(<>
    <Container fluid>
      <Row>
        <Col sm={2} className="bg-dark text-white">
          <p className="h1 mt-5">Dashboard</p>
          <ul className="list-group list-group-flush mb-5">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>

          
        </Col>
        <Col sm={10}>
        Conteudo</Col>
      </Row>
    </Container><div style={divStyle}>Footer</div>
  </>);
}