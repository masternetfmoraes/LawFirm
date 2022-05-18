import { Container,Row,Col,Button } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'
export default function SectionDiagonleft({ sectionContent }){
  return(
    <>
     <section id={sectionContent.section}>
      <Container fluid className={`${sectionContent.bgcolor} ${sectionContent.textcolor}`}>
        <Row> 
           <Col sm={8} className={`${styles.bgpoligonleft} px-5 d-sm-none d-md-block d-none d-sm-block `}>
          <img src={sectionContent.image} alt="imagem" className="d-block w-100" />
        </Col>
          <Col sm={4} className="px-5">
            <p className="h5 text-secondary mb-0 mt-5">{sectionContent.subtitle}</p>
            <p className={`${sectionContent.colorTitle} display-4 mb-3 border-bottom border-secondary`}>{sectionContent.title}</p>
            
           <p className={`${styles.bgpoligons}`}>{sectionContent.description} </p>
            <Button className="my-3">See More </Button>
        </Col>
        </Row>
      </Container>
        </section>
    </>
  )
}