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
      <TopNavbar />
      <Carrossel />
      
      <SectionDiagonright sectionContent={
        {
         section:"Who",
          bgcolor:"bg-success",
          title:"Who We Are",
          colortitle:"text-warning",
          borderbottom: "border-mutted",
          subtitle:"About We",
          colorsubtitle:"text-mutted",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor,`,
          image:"https://mbatime4u.com/wp-content/uploads/2020/01/3.jpgg",
          bgcolor:"bg-dark",
          textcolor:"text-white",
        }
      }
      />
      <SectionLeft sectionContent={
        {
          section:"about",
          bgcolor:"bg-success",
          title:"About Us",
          colortitle:"text-dark",
          borderbottom: "border-mutted",
          subtitle:"About We",
          colorsubtitle:"text-primary",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum.`,
          image:"https://miro.medium.com/max/800/1*rF4Eig5mJBaX5zi9LGl1fw.jpeg",
          bgcolor:"bg-white",
          textcolor:"text-dark",
        }
      }
      />
      <SectionDiagonleft sectionContent={
        {
          section:"advantages",
          bgcolor:"bg-success",
          title:"Why",
          colortitle:"text-warning",
          borderbottom: "border-success",
          subtitle:"Why choose us",
          colorsubtitle:"text-warning",
          description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor. `,
          image:"https://yenna.org/wp-content/uploads/2020/09/whoarewe-05-1-1024x677.jpg"      
      }
      } 
      />
      <Team />  
      <SectionRight sectionContent={
        {
          section:"about",
          bgcolor:"bg-success",
          title:"About Us",
          colortitle:"text-dark",
          borderbottom: "border-mutted",
          subtitle:"About We",
          colorsubtitle:"text-primary",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum.`,
          image:"https://miro.medium.com/max/800/1*rF4Eig5mJBaX5zi9LGl1fw.jpeg",
          bgcolor:"bg-white",
          textcolor:"text-dark",
        }
      }
      />
      <Footer />
    </>
  )
}
