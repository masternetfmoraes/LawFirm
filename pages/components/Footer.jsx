import { Container,Row,Col,Nav } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'

export default function Footer(){


  return(
    <>
    <Container fluid className="bg-dark text-white 
">
      <Row className={styles.border_tp}>
        <Col className="my-5">
          <p className="h4">LawFirm</p>
          <p className="">
          One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into.
          </p>
        </Col>
        <Col className="my-5">
          <p className="h4">
            Contact info 
          </p>
          <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link eventKey="link-1">contact@lawfirm.com</Nav.Link>
          <Nav.Link eventKey="link-2">+1 123 456</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
           <i class="fa-solid fa-location-arrow"></i> New York Street 185 B
          </Nav.Link>
        </Nav>
        </Col>
        <Col className="my-5">
          <p className="h4">Map Site</p>
          <p className="">
          
          </p>
        </Col>
      </Row>
    </Container>
    </>
  )
}