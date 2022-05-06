import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import components
import TopNavbar from './components/TopNavbar';
import Carrossel from './components/Carrossel'
import About from './components/About'
import Team from './components/Team'
import Footer from './components/Footer'



export default function Home() {
  return (
    <>
      <TopNavbar />
      <Carrossel />
      <About />
      <Team />
      <Footer />
    </>
  )
}
