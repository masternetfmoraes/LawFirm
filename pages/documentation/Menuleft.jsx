import Link from 'next/link'
import { Button, Offcanvas, Container, Row, Col,
       ListGroup } from 'react-bootstrap';

export default function Menuleft(){
  const itemMenu={
  id: 1,
    title: "DashBoard",
    items:[
      {
        label: "Getting Started",
        itemhref: "/documentation/"
      },
      {
        label: "Layout",
        itemhref: "/documentation/layout"
      },
      {
        label: "Buttons",
        itemhref: "https:#"
      },
      {
        label: "Carousel",
        itemhref: "https:#"
      },
      {
        label: "NavBar",
        itemhref: "https:#"
      },
      
    ]
    
}

  return(
    < >
      <div className="conta py-5">
    
            <p className="h1 text-center pt-5 pb-3">
        { itemMenu.title }
      </p>
         <ListGroup variant="flush" variant="dark">
        {
          itemMenu.items.map((item,label,itemhref)=>{
            return<ListGroup.Item action variant="dark">
              <Link href={ item.itemhref } passHref><a>{ item.label }</a></Link>
            </ListGroup.Item>
          })
        }
     
</ListGroup>
    
        </div>
      <style jsx>{`
        .conta {
          color: white;
          background: #285974;
          height: 100vh;
        }
      `}</style>
    </>
  )
}