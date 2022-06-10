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
                <Col sm>
            <Card className={`${item.bgcolorcard} ${item.textcolorcard} shadow-sm mt-2`}>
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
                    {
                   // item.priceitems.length
                      item.priceitems.map((valor, itemlabel)=>{
                        return <>
                        <li className="d-flex justify-content-start h5 px-5 mt-1 ">{ valor.itemlabel }</li>
                        </>
                      })
                    }
                    
                  </ul>
                  
                </Card.Text>
                <hr />
                <div className="d-flex justify-content-around">
                  {
                    item.linkurl.map((valor, item)=>{
                      return <><Card.Link href={valor.url}>
                    { valor.label } </Card.Link>
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