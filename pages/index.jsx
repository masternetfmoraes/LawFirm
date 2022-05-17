import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import components
import TopNavbar from './components/TopNavbar';
import Carrossel from './components/Carrossel'
import About from './components/About'
import Team from './components/Team'
import Footer from './components/Footer'

import SectionPageleft from './components/SectionPageleft'
import SectionPageright from './components/SectionPageright'




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
      <About />
      <Team />
     
      <SectionPageright title="Other Section" description="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor. " image="https://mbatime4u.com/wp-content/uploads/2020/01/3.jpg" />
      <SectionPageleft title="Who We Are" description="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nisi vitae lectus mollis hendrerit. Aenean euismod auctor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in accumsan nisl. In ante quam, auctor quis tincidunt in, congue eget tortor. " image="https://yenna.org/wp-content/uploads/2020/09/whoarewe-05-1-1024x677.jpg" />
      <Footer />
    </>
  )
}
