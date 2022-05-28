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
import Team from './../components/Team'


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
                         <section id="sectiontopnavbar" >
                           {
                           //card TopNavbar
                         }
                         <div className="card mt-5">
                           <div className="card-body">
                             <p className="h5">TopNavbar</p>
                             <div className="">
                            <TopNavbar navbarContent={
      {
        bg:"light",
        variant:"light",
        brandname:"Brand Here",
        items: [
          {
            label:"Home",
            url :"https://www.fabianomoraes.net"
          },
          {
            label:"Link-1",
            url :"#"
          }
        ]
        
      }
      } dropdown={
        {
        title:"Drop Down",
        id:"iddropdown",
      item:[
          {
        itemlabel:"item 01",
        itemhref:"#01"
      },{
        itemlabel:"item 02",
        itemhref:"#02",   
      },
        {
        itemlabel:"item 03",
        itemhref:"#03",   
      }
        ]
      }
      } />
                             </div>
                             <br />
                             <code>
                              <p>&lt;TopNavbar navbarContent=&#123;<br />
&nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; bg:&quot;light&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; variant:&quot;light&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; brandname:&quot;LawFirm&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; items: [<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label:&quot;Home&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url :&quot;https://www.fabianomoraes.net&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label:&quot;About&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url :&quot;#about&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label:&quot;Who we Are&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url :&quot;https://www.google.com&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label:&quot;History&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url :&quot;https://www.history.com&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label:&quot;Documentation&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url :&quot;/documentation&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;<br />
&nbsp; &nbsp; &nbsp; &nbsp; ]<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br />
&nbsp; &nbsp; &nbsp; &#125;<br />
&nbsp; &nbsp; &nbsp; &#125; dropdown=&#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; title:&quot;Menu Drop Down&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; id:&quot;iddropdown&quot;,<br />
&nbsp; &nbsp; &nbsp; item:[<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; itemlabel:&quot;item 01&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; itemhref:&quot;#01&quot;<br />
&nbsp; &nbsp; &nbsp; &#125;,&#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; itemlabel:&quot;item 02&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; itemhref:&quot;#02&quot;, &nbsp;&nbsp;<br />
&nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; itemlabel:&quot;item 03&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; itemhref:&quot;#03&quot;, &nbsp;&nbsp;<br />
&nbsp; &nbsp; &nbsp; &#125;<br />
&nbsp; &nbsp; &nbsp; &nbsp; ]<br />
&nbsp; &nbsp; &nbsp; &#125;<br />
&nbsp; &nbsp; &nbsp; &#125; /&gt;</p>

                             </code>
                           </div>
                         </div>
                         {
                           //final card sections TopNavbar
                         }
                         </section>


                         
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
                         <section id="sectionteam" >
                           {
                           //card team
                         }
                         <div className="card mt-5">
                           <div className="card-body">
                             <p className="h5">Team</p>
                             <div className="">
                               <Team teamContent={
      {
        sectionid:"team",
        bgcolor:"bg-dark",
        textcolor:"text-white",
        title:"Team Member",
        colortitle:"text-warning",
        text:"We believe that as a boutique practice, we are better placed to respond quickly to our clients needs and to provide bespoke service to our clients. We pride ourselves on not just being our clients lawyers.",
        items:[
          {
            img:"https://i.pinimg.com/736x/df/03/be/df03bed16a9c7ee0af654268734e877c.jpg",
            name:"John Doe",
            occupation:"C.E.O"
          },
          {
            img:"https://assets.fireside.fm/file/fireside-images/podcasts/images/f/f5b24404-14da-4b82-8a25-6de95d2b991b/guests/c/c936bcb7-48f3-48ec-a4e4-759b7e6bc6dd/avatar_small.jpg?v=0",
            name:"Mary Jane",
            occupation:"Lawyer"
          }
        ]
      }
      } />
                             </div>
                             <br />
                             <code>
                              <p>&lt;Team teamContent=&#123;<br />
&nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; sectionid:&quot;team&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; bgcolor:&quot;bg-dark&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; textcolor:&quot;text-white&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; title:&quot;Team Member&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; colortitle:&quot;text-warning&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; text:&quot;We believe that as a boutique practice, we are better placed to respond quickly to our clients needs and to provide bespoke service to our clients. We pride ourselves on not just being our clients lawyers.&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; items:[<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; img:&quot;https://i.pinimg.com/736x/df/03/be/df03bed16a9c7ee0af654268734e877c.jpg&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; name:&quot;John Doe&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; occupation:&quot;C.E.O&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; img:&quot;http://irtsurveys.co.uk/wp-content/uploads/2014/09/team3-300x300.jpg&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; name:&quot;Petter Park&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; occupation:&quot;Web Design&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; img:&quot;https://assets.fireside.fm/file/fireside-images/podcasts/images/f/f5b24404-14da-4b82-8a25-6de95d2b991b/guests/c/c936bcb7-48f3-48ec-a4e4-759b7e6bc6dd/avatar_small.jpg?v=0&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; name:&quot;Mary Jane&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; occupation:&quot;Lawyer&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;<br />
&nbsp; &nbsp; &nbsp; &nbsp; ]<br />
&nbsp; &nbsp; &nbsp; &#125;<br />
&nbsp; &nbsp; &nbsp; &#125; /&gt;</p>

                             </code>
                           </div>
                         </div>
                         {
                           //final card team
                         }
                         </section>


                          <section id="sectionfooter" >
                           {
                           //card footer
                         }
                         <div className="card mt-5">
                           <div className="card-body">
                             <p className="h5">Footer</p>
                             <div className="">
                            <Footer sectionContent={
      {
        section:"footer",
        bgcolor:"bg-dark",
        textcolor:"text-white",
        titlefooter:"FooterSection",
        subtitlebrand:"Lorem subtitle ipsum",
        titlenavcontact:"Contact US",
        urls: "https://www.google.com",
        titleurl: "google",
        itemsnavcontact: [
          {
            label:"Fabiano Moraes",
            url :"https://www.fabianomoraes.net"
          },
          {
            label:"Google",
            url :"https://www.google.com"
          },
          {
            label: "Products",
            url: "/produtos"
          },
          {
            label: "contact@lawfirm.com",
            url: "mailto:contact@lawfirm.com"
          }
        ],
        titleservices:"Our Services",
        itemsnavservices: [
          {
            label:"CORPORATE & SECURITIES",
            url :"https://www.fabianomoraes.net"
          },
          {
            label:"REAL ESTATE LAW",
            url :"https://www.google.com"
          },
          {
            label: "INSURANCE LAW",
            url: "/produtos"
          },
          {
            label: "Family",
            url: "mailto:contact@lawfirm.com"
          }
        ],
      }
      } />
                             </div>
                             <br />
                             <code>
                              <p>&lt;Footer sectionContent=&#123;<br />
&nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; section:&quot;footer&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; bgcolor:&quot;bg-dark&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; textcolor:&quot;text-white&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; titlefooter:&quot;LawFirm&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; subtitlebrand:&quot;Lorem subtitle ipsum&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; titlenavcontact:&quot;Contact US&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; urls: &quot;https://www.google.com&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; titleurl: &quot;google&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; itemsnavcontact: [<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label:&quot;Fabiano Moraes&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url :&quot;https://www.fabianomoraes.net&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label:&quot;Google&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url :&quot;https://www.google.com&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label: &quot;Products&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url: &quot;/produtos&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label: &quot;contact@lawfirm.com&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url: &quot;mailto:contact@lawfirm.com&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;<br />
&nbsp; &nbsp; &nbsp; &nbsp; ],<br />
&nbsp; &nbsp; &nbsp; &nbsp; titleservices:&quot;Our Services&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; itemsnavservices: [<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label:&quot;CORPORATE &amp; SECURITIES&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url :&quot;https://www.fabianomoraes.net&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label:&quot;REAL ESTATE LAW&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url :&quot;https://www.google.com&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label: &quot;INSURANCE LAW&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url: &quot;/produtos&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#123;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label: &quot;Family&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url: &quot;mailto:contact@lawfirm.com&quot;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;<br />
&nbsp; &nbsp; &nbsp; &nbsp; ],<br />
&nbsp; &nbsp; &nbsp; &#125;<br />
&nbsp; &nbsp; &nbsp; &#125; /&gt;</p>

<p>&nbsp;</p>

                             </code>
                           </div>
                         </div>
                         {
                           //final card footer
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