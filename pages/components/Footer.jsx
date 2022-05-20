import { Container,Row,Col,Nav } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'

export default function Footer({sectionContent}){
   /*
     const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  */
 const handleSelect = (eventKey) =>console.log(`selected ${eventKey}`);
  return(
    <>
      <section id={sectionContent.section}> 
    <Container fluid className={`${sectionContent.bgcolor} ${sectionContent.textcolor} pt-5 border border-5 border-start-0 border-bottom-0 border-left-0 border-end-0 border-warning `} 
>
      <Row className="">
        <Col className="">
          <nav>
          <p className="h4">{sectionContent.titlefooter}</p>
            </nav>
          <p className="">
            {sectionContent.subtitle}
          </p>
        </Col>
        <Col className="">
          <p className="h4">
            {sectionContent.titlenavfooter} </p>
            <hr />
          <Nav variant="pills" activeKey="1" onSelect={handleSelect} defaultActiveKey="/home" className="flex-column">
            {
              sectionContent.items.map((showurl,label,url)=>{
                
                return <Nav.Link href={showurl.url}>{showurl.label}</Nav.Link>
                
            })
            }
            
        </Nav>
        </Col>
        <Col className="">
          <p className="h4">Map Site</p>
          
          <div ><iframe width="350" height="350" src="https://maps.google.com/maps?width=350&amp;height=350&amp;hl=en&amp;q=St%20Jones%2C%2045%20New%20York+(LawFirm)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div ></div></div><br />
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
          <p className="text-center">Fabiano Moraes 2022®</p>
        </Col>
      </Row>
    </Container>
        </section>
    </>
  )
}