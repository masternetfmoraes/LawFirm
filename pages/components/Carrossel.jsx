import { Carousel,Container,Row,Col } from 'react-bootstrap';

import styles from '../../styles/Home.module.css'
export default function Carrossel({carouselContent}){
  return(
    <>
      <section id={carouselContent.sectionid}>
    <Carousel fade>
      {
        carouselContent.carouselitem.map((item,img,title,subtitle)=>{
          return <Carousel.Item>
              <img src={item.img}
      className="d-block w-100"
      alt="imagecarousel"
    /><Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </Carousel.Caption>
        </Carousel.Item>
        })
      }
</Carousel>
        </section>
    </>
  );
}