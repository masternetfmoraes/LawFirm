import TopNavbar from '../components/TopNavbar'
import Footer from  '../components/Footer'

import { useState } from 'react'
import { Button, Offcanvas, Container, Row, Col } from 'react-bootstrap';

import Menuleft from './Menuleft'

export default function index(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return(
     <>
       <div className="cont">
         <Container fluid>
         <Row>
           <Col sm={3} className="d-none d-lg-block">
             <Menuleft />
           </Col>
           <Col >

               <Row>
           <Col sm className="d-flex justify-content-end">
  <svg onClick={handleShow} className="ico d-lg-none d-xl-block d-xl-none my-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M320 96H128C110.3 96 96 81.67 96 64C96 46.33 110.3 32 128 32H320C337.7 32 352 46.33 352 64C352 81.67 337.7 96 320 96zM416 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224zM0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480H32C14.33 480 0 465.7 0 448zM320 352H128C110.3 352 96 337.7 96 320C96 302.3 110.3 288 128 288H320C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352z"/></svg>
           </Col>
               </Row>
               <Row>
                 <Col className="bg-white ">
                   <Container>
                     <Row>
                       <Col>
                         <p className="h1 pt-5">
                           Template Documentation 
                         </p>
                         <hr />
                         <div className="card">
                           <div className="card-body">
                             <p className="card-title h3">Getting Started</p>
                             
                            <p className="text-dark h5">
                              This template isMade  using NextJS and Bootstrap 5.1 an React-Bootstrap.</p>
                             <p className="">
                               I'm building a system that combines the ease and agility of these frameworks.
Bringing more agility in the development of small projects
                             </p>
                             <p className="">
                             Where each component works independently, just invoking the component in any place, where you have a key and a value in the default Javascript Object
                             </p>
                             <p>First of All</p>
                              <div className="card">
                                <div class="card-header">Code</div>
                                <div className="card-body">
                                   <pre>
                                 <code>
                                   <p>import Component from &#39;../components/Component&#39;</p>
                                 </code>
                               </pre>
                                </div>
                              </div>
                             <hr />
                             Second
                              <div className="card">
                                <div class="card-header">Code</div>
                                <div className="card-body">
                                   <pre>
                                 <code>
                              content= &#123;<br/> &#123;<br />

                                object:&quot;value&quot;<br />
                                 &#125;<br />&#125;
                                 </code>
                               </pre>
                                </div>
                              </div>
                             <p className="">
                               Where all content can be dynamically changed, without the need to change components, as all attributes such as colors, images are dynamically loaded in the front end
                             </p>
                            
                           </div>
                         </div>
                       </Col>
                     </Row>
                   </Container>
                 </Col>
               </Row>
           </Col>
         </Row>
       </Container>
          <Footer sectionContent={
      {
        section:"footer",
        bgcolor:"cont",
        textcolor:"text-white",
        titlefooter:"Documentation",
        subtitlebrand:"For help",
        titlenavcontact:"Contact US",
        urls: "https://www.google.com",
        titleurl: "google",
        itemsnavcontact: [
          {
            label:"Fabiano Moraes",
            url :"https://www.fabianomoraes.net"
          }
        ],
        titleservices:"Our Services",
        itemsnavservices: [
          {
            label:"CORPORATE & SECURITIES",
            url :"https://www.fabianomoraes.net"
          }
        ],
      }
      } />
       </div>

        <Offcanvas show={show} onHide={handleClose} className="">
        <Offcanvas.Header closeButton>&nbsp;
        </Offcanvas.Header>
       
          <Menuleft />
        
      </Offcanvas>
       
       <style jsx>{`
        .cont {
          background: #285974;
          width: 100%;
        }
         .ico{
           width: 30px;
           height: 30px;
           color: #ffffff;
           fill: white;
           cursor: pointer;
         }
      `}</style>
    </>
  )
}