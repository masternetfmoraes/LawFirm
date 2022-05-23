import { faClose, faCompass,faUser, fa0,fa2,
       faGlobe,faMeteor,faChartLine,faDiagramProject,
       faTwitter, faAlien } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container,Row,Col } from 'react-bootstrap'


export default function Fonawesome(){
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="h1 text-center">
              List Awesome Font
            </p>
          </Col>
        </Row>
        <Row>
          <Col><FontAwesomeIcon icon={faClose}  /></Col>
          <Col><FontAwesomeIcon icon={faCompass}  /></Col>
          <Col><FontAwesomeIcon icon={faUser}  /></Col>
          <Col><FontAwesomeIcon icon={fa0}  /></Col>
          <Col><FontAwesomeIcon icon={fa2}  /></Col>
          <Col><FontAwesomeIcon icon={faGlobe}  /></Col>
          <Col><FontAwesomeIcon icon={ faChartLine } /></Col>
          <Col><FontAwesomeIcon icon={ faDiagramProject } /></Col>
          <Col><FontAwesomeIcon icon={ faTwitter } /></Col>
          <Col><FontAwesomeIcon icon={ faAlien } /></Col>
        </Row>
      </Container>
    </>
  )
}