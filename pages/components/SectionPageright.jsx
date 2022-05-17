import { Button, Container,Row,Col } from 'react-bootstrap';
export default function SectionPageright({title,description,image,bgcolor,textcolor,section }){
  return(
    <>
      <section id={section}>
      <Container fluid className={`${bgcolor} ${textcolor} my-5`}>
        <Row>
          <Col sm={6}>
            <p className="display-6 text-warning">Subtitle here</p>
            <p className="display-2 text-start">{title}</p>
            
           <p className="text-start">{description} </p>
            <Button >See More </Button>
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