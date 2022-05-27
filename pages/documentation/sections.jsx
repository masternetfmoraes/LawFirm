import Link from 'next/link'
import TopNavbar from '../components/TopNavbar'
import Footer from  '../components/Footer'

import { useState } from 'react'
import { Button, Offcanvas, Container, Row, Col, 
       Breadcrumb } from 'react-bootstrap';

import Menuleft from './Menuleft'

import SectionLeft from './../components/SectionLeft'
import SectionRight from './../components/SectionRight'
import SectionDiagonleft from './../components/SectionDiagonleft'
import SectionDiagonright from './../components/SectionDiagonright'

export default function Sections(){

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
                             <p className="card-title h3">Sections</p>
                             
                            <p className="text-dark h5">
                            The sections are assembled with a view to agility, it is only necessary to change the contents</p>
                             </div>
                            </div>
                         <section id="sectionLeft" >
                           {
                           //card sectionleft
                         }
                         <div className="card mt-5">
                           <div className="card-body">
                             <p className="h5">sectionLeft</p>
                             <div className="">
                             <SectionLeft sectionContent={
        {
          section:"left",
          bgcolor:"bg-white",
          title:"Section Left",
          colortitle:"text-dark",
          borderbottom: "border-secondary",
          subtitle:"Subtitle Section Left",
          colorsubtitle:"text-primary",
          textcolor:"text-dark",
          btncolor:"btn-success",
          btntext:"About US",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. `,
          image:"https://miro.medium.com/max/800/1*rF4Eig5mJBaX5zi9LGl1fw.jpeg",
          
        }
      }
      />
                             </div>
                             <br />
                             <code>
                               <p>&lt;SectionLeft sectionContent=&#123;	<br />
&nbsp; &nbsp; &nbsp; &nbsp; &#123;	<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; section:&quot;about&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bgcolor:&quot;bg-white&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; title:&quot;About Us&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; colortitle:&quot;text-dark&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; borderbottom: &quot;border-secondary&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; subtitle:&quot;About We&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; colorsubtitle:&quot;text-primary&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; textcolor:&quot;text-dark&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; btncolor:&quot;btn-success&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; btntext:&quot;About US&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. `,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; image:&quot;https://miro.medium.com/max/800/1*rF4Eig5mJBaX5zi9LGl1fw.jpeg&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &#125;	<br />
&nbsp; &nbsp; &nbsp; &#125;	<br />
&nbsp; &nbsp; &nbsp; /&gt;</p>

                             </code>
                           </div>
                         </div>
                         {
                           //final card sections left
                         }
                         </section>
                         <section id="sectionRight" >
                           {
                           //card sectionright
                         }
                         <div className="card mt-5">
                           <div className="card-body">
                             <p className="h5">sectionRight</p>
                             <div className="">
                             <SectionRight sectionContent={
        {
          section:"right",
          bgcolor:"bg-white",
          title:"Section Right",
          colortitle:"text-dark",
          borderbottom: "border-mutted",
          subtitle:"Subtitle Section Right",
          colorsubtitle:"text-primary",
          textcolor:"text-dark",
          btncolor:"btn-warning",
          btntext:"Right More ++",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum.`,
          image:"https://s3-assets.eastidahonews.com/wp-content/uploads/2019/08/29184954/AdobeStock_Mediation.jpg",
        }
      }
      />
                             </div>
                             <br />
                             <code>
                               <p>&lt;SectionRight sectionContent=&#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; section:&quot;right&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bgcolor:&quot;bg-white&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; title:&quot;Section Right&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; colortitle:&quot;text-dark&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; borderbottom: &quot;border-mutted&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; subtitle:&quot;Right&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; colorsubtitle:&quot;text-primary&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; textcolor:&quot;text-dark&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; btncolor:&quot;btn-warning&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; btntext:&quot;Right More ++&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum.`,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; image:&quot;https://s3-assets.eastidahonews.com/wp-content/uploads/2019/08/29184954/AdobeStock_Mediation.jpg&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &#125;	<br />
&nbsp; &nbsp; &nbsp; &#125;	<br />
&nbsp; &nbsp; &nbsp; /&gt;</p>

                             </code>
                           </div>
                         </div>
                         {
                           //final card sections right
                         }
                         </section>
                          <section id="sectionDiagonleft" >
                           {
                           //card diagonLeft
                         }
                         <div className="card mt-5">
                           <div className="card-body">
                             <p className="h5">sectionDiagonleft</p>
                             <div className="">
                             <SectionDiagonleft sectionContent={
        {
          section:"advantages",
          bgcolor:"bg-primary",
          title:"Why",
          colortitle:"text-warning",
          borderbottom: "border-success",
          subtitle:"Why choose us",
          colorsubtitle:"text-warning",
          textcolor:"text-white",
          btncolor:"btn-warning",
          btntext:"Why more",
          description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor. `,
          img:"https://www.altitude365.com/wp-content/uploads/2016/11/shutterstock_184808168.jpg"      
      }
      } 
      />
                             </div>
                             <br />
                             <code>
                               <p>&lt;SectionDiagonleft sectionContent=&#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; section:&quot;advantages&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bgcolor:&quot;bg-danger&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; title:&quot;Why&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; colortitle:&quot;text-warning&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; borderbottom: &quot;border-success&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; subtitle:&quot;Why choose us&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; colorsubtitle:&quot;text-warning&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; textcolor:&quot;text-white&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; btncolor:&quot;btn-warning&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; btntext:&quot;Why more&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor. `,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; img:&quot;https://goldwaterlawfirm.com/wp-content/uploads/2019/05/How-an-Essure-Lawyer-Can-Help-You-e1471365588763.jpg&quot; &nbsp; &nbsp; &nbsp;<br />
&nbsp; &nbsp; &nbsp; &#125;<br />
&nbsp; &nbsp; &nbsp; &#125;&nbsp;<br />
&nbsp; &nbsp; &nbsp; /&gt;</p>

                             </code>
                           </div>
                         </div>
                         {
                           //final card diagonLeft
                         }
                         </section>
                          <section id="sectionDiagonright" >
                           {
                           //card diagonRight
                         }
                         <div className="card mt-5">
                           <div className="card-body">
                             <p className="h5">sectionDiagonright</p>
                             <div className="">
                             <SectionDiagonright sectionContent={
        {
         section:"Who",
          bgcolor:"bg-dark",
          title:"Diagon Right",
          colortitle:"text-warning",
          borderbottom: "border-mutted",
          subtitle:"Subtitle Diagon Right",
          colorsubtitle:"text-mutted",
          textcolor:"text-white",
          btncolor:"btn-warning",
          btntext:"Who more",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor,`,
          img:"https://www.celigo.com/wp-content/uploads/socialpost-webinar-3pl-netsuite.png"
        }
      }
      />
                             </div>
                             <br />
                             <code>
                               <p>&lt;SectionDiagonright sectionContent=&#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;section:&quot;Who&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bgcolor:&quot;bg-dark&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; title:&quot;Diagon Right&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; colortitle:&quot;text-warning&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; borderbottom: &quot;border-mutted&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; subtitle:&quot;Subtitle Diagon Right&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; colorsubtitle:&quot;text-mutted&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; textcolor:&quot;text-white&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; btncolor:&quot;btn-warning&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; btntext:&quot;Who more&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor,`,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; img:&quot;https://www.celigo.com/wp-content/uploads/socialpost-webinar-3pl-netsuite.png&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &#125;<br />
&nbsp; &nbsp; &nbsp; &#125;<br />
&nbsp; &nbsp; &nbsp; /&gt;</p>

                             </code>
                           </div>
                         </div>
                         {
                           //final card diagonLeft
                         }
                         </section>
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