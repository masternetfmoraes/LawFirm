import { Button, Container,Row,Col } from 'react-bootstrap';
export default function SectionPageright({title,description,image,bgcolor,textcolor,section }){
  return(
    <>
      <section id={section}>
      <Container fluid className={`${bgcolor} ${textcolor} my-5`}>
        <Row> 
          <Col sm={6} className="px-5">
            <p className="h5 text-secondary mb-0">Subtitle here</p>
            <p className="display-4 text-dark mb-3 border-bottom border-secondary">{title}</p>
            
           <p className="text-start">{description} </p>
            <Button className="my-3">See More </Button>
        </Col>
          <Col sm={6} className="px-5">
          <img src={image} alt="imagem" className="d-block w-100 rounded" />
        </Col>
        </Row>
      </Container>
        </section>
    </>
  )
}