import { Container,Row,Col,Button } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'
const imgUrl="https://pbs.twimg.com/media/Ci5AGDWUoAASZTV.png";

export default function SectionDiagonleft({ sectionContent }){
  const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + sectionContent.img + ') ',
  backgroundColor: 'red',
  backgroundRepeat:"no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  clipPath: `polygon(0 0, 74% 0, 100% 100%, 0% 100%)`
};
  return(
    <>
     <section id={sectionContent.section}>
      <Container fluid className={`${sectionContent.bgcolor} ${sectionContent.textcolor}`}>
        <Row> 
           <Col sm={8} style={divStyle} className={`px-5 d-sm-none d-md-block d-none d-sm-block `}>
         
        </Col>
          <Col sm={4} className="py-5 px-5">
            <p className={`h5 ${sectionContent.colorsubtitle } mb-0 mt-5`}>{sectionContent.subtitle}</p>
            <p className={`${sectionContent.colortitle} display-4 mb-3 border-bottom ${sectionContent.borderbottom} `}>{sectionContent.title}</p>
            
           <p className={`${styles.bgpoligons}`}>{sectionContent.description} </p>
            <Button className={`${sectionContent.btncolor} mb-3 `}>{sectionContent.btntext}</Button>
        </Col>
        </Row>
      </Container>
       <div >.</div>
        </section>
    </>
  )
}