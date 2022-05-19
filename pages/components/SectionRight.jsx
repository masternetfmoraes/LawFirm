import { Container,Row,Col,Button } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'
export default function SectioRight({ sectionContent }){
  return(
    <>
     <section id={sectionContent.section}>
      <Container fluid className={`${sectionContent.bgcolor} ${sectionContent.textcolor} my-1`}>
        <Row>
          <Col sm={6} className="px-5">
            <p className={`h5 ${sectionContent.colorsubtitle} mb-0 mt-5`}>{sectionContent.subtitle}</p>
            <p className={`${sectionContent.colortitle} display-4 mb-3 border-bottom ${sectionContent.borderbottom} `}>{sectionContent.title}</p>
            
           <p className={`${styles.bgpoligons}`}>{sectionContent.description} </p>
            <Button className={`${sectionContent.btncolor}  mb-3`}>{sectionContent.btntext}</Button>
        </Col>
          <Col sm={6} className={` px-5 d-sm-none d-md-block d-none d-sm-block `}>
          <img src={sectionContent.image} alt="imagem" className="d-block w-100" />
        </Col>
        </Row>
      </Container>
        </section>
    </>
  )
}