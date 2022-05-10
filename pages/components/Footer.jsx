import { Container,Row,Col } from 'react-bootstrap';
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
          <p className="">
            contact@lawfirm.com
          </p>
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