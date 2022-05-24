import { Button, Container,Row,Col } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'
export default function SectionDiagonright({sectionContent}){
  const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + sectionContent.img + ') ',
    backgroundColor: 'red',
  backgroundRepeat:"no-repeat",
  backgroundPosition: "center",
    backgroundSize: "cover",
  clipPath: `polygon(20% 0, 100% 0, 100% 100%, 0 100%)`,
};
  return(
    <>
      <section id={sectionContent.section}>
      <Container fluid className={`${sectionContent.bgcolor} ${sectionContent.textcolor}`}>
        <Row> 
          <Col sm={6} className="px-5 py-5">
            <p className={`h5 ${sectionContent.colorsubtitle} mb-0 mt-5`}>Subtitle here</p>
            <p className={`${sectionContent.colortitle} display-4 mb-3 border-bottom ${sectionContent.borderbottom}`}>{sectionContent.title}</p>
            
           <p className={`${styles.bgpoligons}`}>{sectionContent.description} </p>
            <Button className={`${sectionContent.btncolor} mb-3`}>{sectionContent.btntext}</Button>
        </Col>
          <Col sm={6} style={divStyle} className={` px-5 d-sm-none d-md-block d-none d-sm-block `}>
         
        </Col>
        </Row>
      </Container>
        </section>
    </>
  )
}