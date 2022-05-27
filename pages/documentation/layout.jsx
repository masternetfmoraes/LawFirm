import Link from 'next/link'
import TopNavbar from '../components/TopNavbar'
import Footer from  '../components/Footer'

import { useState } from 'react'
import { Button, Offcanvas, Container, Row, Col, 
       Breadcrumb } from 'react-bootstrap';

import Menuleft from './Menuleft'

export default function Layout(){

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
                            <img src="http://i.ytimg.com/vi/Fnw3lNeH-XI/mqdefault.jpg" className="mx-auto" alt="nextLogo" />
                         </p>
                         <hr />
                         <Breadcrumb>
  <Breadcrumb.Item href="/documentation">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>
    Layout
  </Breadcrumb.Item>
</Breadcrumb>
                         <div className="card">
                           <div className="card-body">
                             <p className="card-title h3">Layout</p>
                             
                            <p className="text-dark h5">
                            Layouts are predefined thus speeding up the development of page content</p>
                             <p className="">
                             Each component works independently, just changing the content, such as texts and images.

Now if you want to Edit the files they can be done easily, because there is no change in the BOOTSTRAP files, and Css (modules and global), that is, this project works natively
                        
                             </p>
                             {
                               //Card codigos 
                             }
                             <div className="card">
                               
                               <div className="card-body">
                                 <p className="card-title h3">
                               SectionLeft</p>
                                   <code>
                                     <p>&nbsp;&lt;SectionLeft sectionContent= &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp;  &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; section:&quot;about&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bgcolor:&quot;bg-white&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; title:&quot;About Us&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; colortitle:&quot;text-dark&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; borderbottom: &quot;border-dark&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; subtitle:&quot;About We&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; colorsubtitle:&quot;text-primary&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; textcolor:&quot;text-dark&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; btncolor:&quot;btn-success&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; btntext:&quot;About US&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum.`,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; image:&quot;https://miro.medium.com/max/800/1*rF4Eig5mJBaX5zi9LGl1fw.jpeg&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp;  &#125;<br />
&nbsp; &nbsp; &nbsp;  &#125;<br />
&nbsp; &nbsp; &nbsp; /&gt;</p>

                                   </code>
                              
                               </div>
                             </div>

                             {
                               //Final card códigos
                             }
                             <p className=""><strong>1 . section</strong> is the section of the HTML to be able to group content</p>
                             <p className=""><strong>2 . bgcolor</strong> It is used to change the component's background color, remember we are using bootstrap's defaults for colors and styles</p>
                              <div className="card">
                                <div className="card-body">
                                  <div class="container">
                                  <div className="row gap-1 mx-auto ">
                                    <div className="col-sm-3 p-2 bg-primary">
                                    <span className="text-white">bg-primary</span>
                                    </div>
                                    <div className="col-sm-3 p-2 bg-secondary">
                                    <span className="text-white">bg-secondary</span>
                                    </div>
                                    <div className="col-sm-3 p-2 bg-success">
                                    <span className="text-white">bg-success</span>
                                    </div>
                                    <div className="col-sm-3 p-2 bg-danger">
                                    <span className="text-white">bg-danger</span>
                                    </div>
                                    <div className="col-sm-3 p-2 bg-warning">
                                    <span className="text-white">bg-warning</span>
                                    </div>
                                    <div className="col-sm-3 p-2 bg-info">
                                    <span className="text-white">bg-info</span>
                                    </div>
                                    <div className="col-sm-3 p-2 bg-light">
                                    <span className="text-dark">bg-light</span>
                                    </div>
                                    <div className="col-sm-3 p-2 bg-dark">
                                    <span className="text-white">bg-dark</span>
                                    </div>
                                    <div className="col-sm-3 p-2 bg-body">
                                    <span className="text-dark">bg-body</span>
                                    </div>
                                    <div className="col-sm-3 p-2 bg-white">
                                    <span className="text-dark">bg-white</span>
                                    </div>
                                    <div className="col-sm-3 p-2 bg-transparent">
                                    <span className="text-dark">bg-transparent</span>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                             <p className="mt-5"><strong>3 . title</strong> where will be the title of the component, that is, where will show what the section is about</p>
                             <p className="mt-5">
                               <strong>4 . colortitle</strong> set the section title color
                             </p>
                             {
                               //card text-color
                             }
                             <div className="card">
                               <div className="card-body">
                                 <p className="text-primary">
                                   text-primary
                                 </p>
                                  <p className="text-secondary">
                                   text-secondary
                                 </p>
                                  <p className="text-success">
                                   text-success
                                 </p>
                                  <p className="text-danger">
                                   text-danger
                                 </p>
                                  <p className="text-warning">
                                   text-warning
                                 </p>
                                  <p className="text-body">
                                   text-body
                                 </p>
                                  <p className="text-muted">
                                   text-muted
                                 </p>
                                  <p className="text-white bg-dark">
                                   text-white
                                 </p>
                                  <p className="text-black-50">
                                   text-black-50
                                 </p>
                                 <p className="text-white-50 bg-dark">
                                   text-white-50
                                 </p>
                               </div>
                             </div>
                             {
                               //final text-color
                             }
                             <p className="mt-3">
                             <strong>5 . borderbottom</strong> Line below the Title Follows the Bootstrap colors</p>
                             {
                               //border color
                             }
                             <div className="card">
                               <div className="card-body">
                                 <p className="border border-primary border-top-0 border-start-0 border-end-0">border-primary</p>
                                 <p className="border border-secondary border-top-0 border-start-0 border-end-0">border-secondary</p>
                                 <p className="border border-success border-top-0 border-start-0 border-end-0">border-success</p>
                                 <p className="border border-danger border-top-0 border-start-0 border-end-0">border-danger</p>
                                 <p className="border border-warning border-top-0 border-start-0 border-end-0">border-warning</p>
                                 <p className="border border-info border-top-0 border-start-0 border-end-0">border-info</p>
                                 <p className="border border-light border-top-0 border-start-0 border-end-0">border-light</p>
                                 <p className="border border-dark border-top-0 border-start-0 border-end-0">border-dark</p>
                                 <p className="border border-white border-top-0 border-start-0 border-end-0">border-white</p>
                               </div>
                             </div>
                             {
                               //final  border color
                             }
                             <p className="mt-3">
                               <strong>6 . subtitle</strong> Insert the subtitle of the section just below the title
                             </p>
                             <p className="mt-3">
                               <strong>7 . colorsubtitle</strong> Inserts the subtitle color. (follows bootstrap text color standards)
                             </p>
                             <p className="mt-3">
                               <strong>8 . textcolor</strong> Color of all section text except title and subtitle colors
                             </p>
                             <p className="mt-3">
                               <strong>9 . btntext</strong> Sections button text
                             </p>
                             <p className="mt-3">
                               <strong>10 . description</strong> Section text where all the text that describes the section goes
                             </p>
                             <p className="mt-3">
                               <strong>11 . image</strong> Where the images of each section are inserted.
                             </p>
                             <ul>
                               <li>11 a. The images can be on the right or on the left by simply selecting the corresponding component See <Link href="/documentation/sections">
    <a>this page!</a>
  </Link>
                                 <ul>
                                   <li>sectionLeft</li>
                                   <li>sectionRight</li>
                                   <li>sectionDiagonleft</li>
                                   <li>sectionDiagonRight</li>
                               </ul></li>
                             </ul>
                             
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