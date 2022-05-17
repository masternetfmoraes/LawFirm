import { Container,Row,Col } from 'react-bootstrap';
export default function SectionPageright({title,description,image}){
  return(
    <>
      <Container>
      <Row>
        <Col sm={12}>
          <p className="h1 mt-5 text-center">{title}</p>
        </Col>
      </Row>
        <Row>
          <Col sm={6}>
           <p className="text-start">{description} </p>
        </Col>
          <Col sm={6}>
          <img src={image} alt="imagem" className="d-block w-100" />
        </Col>
        </Row>
      </Container>
    </>
  )
}