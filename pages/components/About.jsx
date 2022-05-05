import styles from '../../styles/Home.module.css'

import { Container,Row,Col } from 'react-bootstrap';

export default function About(){
  return(<>
    <section id="aboutus">
    <Container>
       <Row>
    <Col sm>
    <img src="https://miro.medium.com/max/800/1*rF4Eig5mJBaX5zi9LGl1fw.jpeg" className="d-block w-100 py-5" />
    </Col>
    <Col sm>
    <p className="mt-5 text-secondary">About Us</p>
      <p className="h4">More experience. More defence. The best <span className="text-warning">result</span></p>
      <p className="mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor. Phasellus lacus metus, venenatis a facilisis sed, bibendum id urna. Fusce ac fermentum urna. Pellentesque non venenatis metus. Vestibulum auctor mi vitae placerat viverra.
        </p>      
    </Col>
  </Row>
    </Container>
    
    </section>
  </>);
}