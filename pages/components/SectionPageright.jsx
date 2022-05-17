import { Container,Row,Col } from 'react-bootstrap';
export default function SectionPageright({title,description,image,bgcolor,textcolor,section }){
  return(
    <>
      <section id={section}>
      <Container className={`${bgcolor} ${textcolor} my-5`}>
        <Row>
          <Col sm={6}>
  
            <p className="h1 mt-5 text-start">{title}</p>
           <p className="text-start">{description} </p>
        </Col>
          <Col sm={6}>
          <img src={image} alt="imagem" className="d-block w-100" />
        </Col>
        </Row>
      </Container>
        </section>
    </>
  )
}