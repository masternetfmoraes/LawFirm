import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import components
import TopNavbar from './components/TopNavbar';
import Carrossel from './components/Carrossel'
import Team from './components/Team'
import Footer from './components/Footer'

import SectionDiagonleft from './components/SectionDiagonleft'
import SectionDiagonright from './components/SectionDiagonright'

import SectionLeft from './components/SectionLeft'
import SectionRight from './components/SectionRight'



export default function Home() {
  return (
    <>
      <Head>
        <title> Law Firm</title>
        <
        meta name = "description"
        content = "LawFirm This site was made using Nextjs" / >
        <meta name="ABSTRACT" content="LawFirm website,Template Made using Replit and NextJS and Bootstrap" />
        <meta name="KEYWORDS" content="LawFirm, Lawyers, Law" />
        <meta name="ROBOT" content="All" />
        <meta name="robots" content="index, follow" />
        <meta name="distribution" CONTENT="global" />
        <meta name="copyright" content="LawFirm" />
        <link rel="canonical" href="https://www.falwfirm.com" />
        <link rel = "icon"
        href = "/favicon.ico" />
        </Head>
      <TopNavbar navbarContent={
      {
        bg:"light",
        variant:"light",
        brandname:"LawFirm",
        items: [
          {
            label:"Home",
            url :"https://www.fabianomoraes.net"
          },
          {
            label:"About",
            url :"#about"
          },
          {
            label:"Who we Are",
            url :"https://www.google.com"
          },
          {
            label:"History",
            url :"https://www.history.com"
          }
        ]
        
      }
      } dropdown={
        {
        title:"Menu Drop Down",
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
      <Carrossel />
      
      <SectionDiagonright sectionContent={
        {
         section:"Who",
          bgcolor:"bg-dark",
          title:"Who We Are",
          colortitle:"text-warning",
          borderbottom: "border-mutted",
          subtitle:"About We",
          colorsubtitle:"text-mutted",
          textcolor:"text-white",
          btncolor:"btn-warning",
          btntext:"Who more",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor,`,
          image:"https://mbatime4u.com/wp-content/uploads/2020/01/3.jpgg"
        }
      }
      />
      <SectionLeft sectionContent={
        {
          section:"about",
          bgcolor:"bg-white",
          title:"About Us",
          colortitle:"text-dark",
          borderbottom: "border-mutted",
          subtitle:"About We",
          colorsubtitle:"text-primary",
          textcolor:"text-dark",
          btncolor:"btn-success",
          btntext:"About US",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum.`,
          image:"https://miro.medium.com/max/800/1*rF4Eig5mJBaX5zi9LGl1fw.jpeg",
          
        }
      }
      />
      <SectionDiagonleft sectionContent={
        {
          section:"advantages",
          bgcolor:"bg-danger",
          title:"Why",
          colortitle:"text-warning",
          borderbottom: "border-success",
          subtitle:"Why choose us",
          colorsubtitle:"text-warning",
          textcolor:"text-white",
          btncolor:"btn-warning",
          btntext:"Why more",
          description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor. `,
          image:"https://yenna.org/wp-content/uploads/2020/09/whoarewe-05-1-1024x677.jpg"      
      }
      } 
      />
      <Team />  
      <SectionRight sectionContent={
        {
          section:"right",
          bgcolor:"bg-white",
          title:"Section Right",
          colortitle:"text-dark",
          borderbottom: "border-mutted",
          subtitle:"Right",
          colorsubtitle:"text-primary",
          textcolor:"text-dark",
          btncolor:"btn-warning",
          btntext:"Right More ++",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum.`,
          image:"https://s3-assets.eastidahonews.com/wp-content/uploads/2019/08/29184954/AdobeStock_Mediation.jpg",
        }
      }
      />
      <Footer sectionContent={
      {
        section:"footer",
        bgcolor:"bg-dark",
        textcolor:"text-white",
        titlefooter:"LawFirm",
        subtitle:"Lorem subtitle ipsum",
        titlenavfooter:"Contact US",
        urls: "https://www.google.com",
        titleurl: "google",
        items: [
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
      }
      } />
    </>
  )
}
