import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import components
import TopNavbar from './components/TopNavbar';
import Carrossel from './components/Carrossel'
import Team from './components/Team'
import Price from './components/Price'
import Testimonials from './components/Testimonials'
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
          },
          {
            label:"Dashboard",
            url: "/admin"
          },
           {
            label:"Documentation",
            url :"/documentation"
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
      <Carrossel carouselContent={
      {
        sectionid:"idCarousel",
        carouselitem:[
          {
             img:"https://goldenblatt.bold-themes.com/main-demo/wp-content/uploads/sites/2/2019/10/hero_home_05.jpg",
        title:"Title Carousel 01",
        subtitle:"Lorem ipsum doloret dominem rec suit apsut"
          },
          {
             img:"https://goldenblatt.bold-themes.com/main-demo/wp-content/uploads/sites/2/2019/10/hero_home_02.jpg",
        title:"Label Carousel 02",
        subtitle:"Lorem ipsum doloret dominem rec suit apsut"
          },
          {
             img:"https://goldenblatt.bold-themes.com/main-demo/wp-content/uploads/sites/2/2019/10/hero_home_04.jpg",
        title:"Title Carousel 03",
        subtitle:"Lorem ipsum doloret dominem rec suit apsut"
          }
        ]
       
      }
      }
        />
      
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
          img:"https://mbatime4u.com/wp-content/uploads/2020/01/3.jpg"
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
          img:"https://goldwaterlawfirm.com/wp-content/uploads/2019/05/How-an-Essure-Lawyer-Can-Help-You-e1471365588763.jpg"      
      }
      } 
      />
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
            img:"http://irtsurveys.co.uk/wp-content/uploads/2014/09/team3-300x300.jpg",
            name:"Petter Park",
            occupation:"Web Design"
          },
          {
            img:"https://assets.fireside.fm/file/fireside-images/podcasts/images/f/f5b24404-14da-4b82-8a25-6de95d2b991b/guests/c/c936bcb7-48f3-48ec-a4e4-759b7e6bc6dd/avatar_small.jpg?v=0",
            name:"Mary Jane",
            occupation:"Lawyer"
          }
        ]
      }
      } />  
      <Price priceContent={
      {
        section:"price",
        "bgsectioncolor":"bg-white",
        titlesection:"Price",
        titlesectioncolor:"text-dark",
        cardprice:[
          //cardprice start
          
          {
            bgcolorcard:"bg-dark",
            textcolorcard:"text-white",
            titlecard:"Family Law",
            subtitlecard:"Subtitle here",
            coincard:"usd",
            pricecard:"1,25",
            priceitems:[
              {
                itemlabel:"Family law ordenance"
              },
              {
                itemlabel:"Creative Design"
              },
              {
                itemlabel:"03 Mockups Month"
              }
            ],
           linkurl: [
              {
                label:"See this",
                url:"See"
              }
            ]
          },
          //card price end
          //card price start
          {
            bgcolorcard:"bg-danger",
            textcolorcard:"text-white",
            titlecard:"Child Law",
            subtitlecard:"Subtitle here",
            coincard:"usd",
            pricecard:",35",
            priceitems:[
              {
                itemlabel:"Intuitive Texts"
              },
              {
                itemlabel:"Creation List"
              },
              {
                itemlabel:"Creative Design"
              }
            ],
            linkurl: [
              {
                label:"Documentation",
                url:"Docu"
              },
              {
                label:"Buy",
                url:"Docu2"
              }
            ]
          },
          //card price end
          //card price start
          {
            bgcolorcard:"bg-warning",
            textcolorcard:"text-white",
            titlecard:"International Law",
            subtitlecard:"Subtitle here",
            coincard:"usd",
            pricecard:"30,05",
            priceitems:[
              {
                itemlabel:"Surrogacy"
              },
              {
                itemlabel:"Adoption Services"
              },
              {
                itemlabel: "Special Guardianship Order"
              },
              {
                itemlabel:"Care Proceedings"
              }
            ],
            linkurl: [
              {
                label:"See More",
                url:"see"
              },
              {
                label:"Documentation",
                url:"docu"
              },
              {
                label:"Buy",
                url:"buy"
              }
            ]
          }
          //cardprice end
          ]
        
      }
      } />

      <Testimonials />
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
    </>
  )
}
