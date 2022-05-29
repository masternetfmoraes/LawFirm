import { Container,Row,Col,Card } from 'react-bootstrap';

export default function Price({priceContent}){
 
  return(
    <><section id={priceContent.section}>
      <Container className={`${priceContent.bgsectioncolor} py-3`}>
        <Row>
          <Col className="">
            <p className={`${priceContent.titlesectioncolor} text-center h1 mb-3`}>
              {priceContent.titlesection }
            </p>
          </Col>
        </Row>
        <Row>
          {
            priceContent.cardprice.map((item, bgcolorcard, textcolorcard, titlecard,listcard, linkprice )=>{
              return <>
                <Col>
            <Card className={`${item.bgcolorcard} ${item.textcolorcard} shadow-sm`}>
              <Card.Body>
                <Card.Title><p className="text-center h2">
                  {item.titlecard}</p></Card.Title>
    <Card.Subtitle className={` mb-2 text-center`}>{item.subtitlecard}</Card.Subtitle>
                
                <Card.Text className="text-center">
                  {item.coincard}
                  <span className={` display-1`}>{item.pricecard}</span>
                  <hr />
    </Card.Text>
                <Card.Text className="">
                
                  <ul className="list-unstyled">
                     {item.listcard.map((item,labellist)=>{
                return <>
                  <li className="d-flex justify-content-around">{ item.labellist }</li>
                </>
                  })}
                    
                    </ul>
                </Card.Text>
                <div className="d-flex justify-content-around">
                  {
                    priceContent.linkprice.map((item,labelprice,pricehref)=>{
                      return <>
                        <Card.Link href={ item.pricehref } >{ item.labelprice } </Card.Link>
                      </>
                    })
                  }
                </div>
              </Card.Body>
            </Card>
          </Col>
              </>
            })
          }
         
        </Row>
      </Container>
      </section>
    </>
  )
}