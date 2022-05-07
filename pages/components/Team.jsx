import { Container,Row,Col } from 'react-bootstrap';

export default function Team(){
  return(<>
    <section id="teammember">
      <Container className="bg-dark text-white" fluid>
        <Row>
          <Col sm>
            <p className="text-warning display-5 text-start mt-5">
              Team Member
            </p>
            <p className="h4">
              You will introduce with our
expert team <span className="text-warning">member</span>
            </p>
          </Col>
          <Col sm>
            <p className="mt-5">
              We believe that as a boutique practice, we are better placed to respond quickly to our clients’ needs and to provide bespoke service to our clients. We pride ourselves on not just being our clients’ lawyers.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Container className="mt-3">
          <Row>
          <Col sm>
            <img
      className="d-block w-50 mx-auto rounded-circle"
      src="https://i.pinimg.com/736x/df/03/be/df03bed16a9c7ee0af654268734e877c.jpg"
      alt="First Collumn team"
    />
            <p className="text-center h5">
              John Doe
            </p>
            <p className="text-center">
              Web Programmer
            </p>
          </Col>
          <Col sm>
             <img
      className="d-block w-50 mx-auto rounded-circle"
      src="http://irtsurveys.co.uk/wp-content/uploads/2014/09/team3-300x300.jpg"
      alt="First Collumn team"
    />
            <p className="text-center h5">
              Petter James Doe
            </p>
            <p className="text-center">
              Writer and Consulting
            </p>
          </Col>
          <Col sm>
            <img
      className="d-block w-50 mx-auto rounded-circle"
      src="https://assets.fireside.fm/file/fireside-images/podcasts/images/f/f5b24404-14da-4b82-8a25-6de95d2b991b/guests/c/c936bcb7-48f3-48ec-a4e4-759b7e6bc6dd/avatar_small.jpg?v=0"
      alt="First Collumn team"
    />
            <p className="text-center h5">
              Mary Doe
            </p>
            <p className="text-center">
              Financial Girl
            </p>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  </>);
}