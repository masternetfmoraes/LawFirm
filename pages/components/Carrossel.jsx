import { Carousel,Container,Row,Col } from 'react-bootstrap';

import styles from '../../styles/Home.module.css'
export default function Carrossel(){
  return(
    <>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.dibailbonds.com/sites/default/files/parallax-backgrounds/criminal-defense-denver.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
      <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://popugaychiki.com/wp-content/uploads/2021/10/sa-4.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
      <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.francofirm.com/wp-content/uploads/2016/08/home_lawyer2_subheader2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <Container className="bg-dark" fluid>
        
        <Row>
          <Col sm>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            className= {`${styles.ico} ${styles.fillw} ${styles.p5}`}><path d="M240.1 4.216C249.1-1.405 262-1.405 271.9 4.216L443.6 102.4L447.1 104V104.9L495.9 132.2C508.5 139.4 514.6 154.2 510.9 168.2C507.2 182.2 494.5 192 479.1 192H31.1C17.49 192 4.795 182.2 1.071 168.2C-2.653 154.2 3.524 139.4 16.12 132.2L63.1 104.9V104L68.37 102.4L240.1 4.216zM64 224H128V416H168V224H232V416H280V224H344V416H384V224H448V420.3C448.6 420.6 449.2 420.1 449.8 421.4L497.8 453.4C509.5 461.2 514.7 475.8 510.6 489.3C506.5 502.8 494.1 512 480 512H32C17.9 512 5.46 502.8 1.373 489.3C-2.713 475.8 2.517 461.2 14.25 453.4L62.25 421.4C62.82 420.1 63.41 420.6 64 420.3V224z"/>
          </svg>
            <p className="display-6 text-white text-center">
            Justice </p>
          </Col>
          <Col sm>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className= {`${styles.ico} ${styles.fillw} ${styles.p5}`}
            ><path d="M512 216.3c0-6.125-2.344-12.25-7.031-16.93L482.3 176.8c-4.688-4.686-10.84-7.028-16.1-7.028s-12.31 2.343-16.1 7.028l-5.625 5.625L329.6 69.28l5.625-5.625c4.687-4.688 7.03-10.84 7.03-16.1s-2.343-12.31-7.03-16.1l-22.62-22.62C307.9 2.344 301.8 0 295.7 0s-12.15 2.344-16.84 7.031L154.2 131.5C149.6 136.2 147.2 142.3 147.2 148.5s2.344 12.25 7.031 16.94l22.62 22.62c4.688 4.688 10.84 7.031 16.1 7.031c6.156 0 12.31-2.344 16.1-7.031l5.625-5.625l113.1 113.1l-5.625 5.621c-4.688 4.688-7.031 10.84-7.031 16.1s2.344 12.31 7.031 16.1l22.62 22.62c4.688 4.688 10.81 7.031 16.94 7.031s12.25-2.344 16.94-7.031l124.5-124.6C509.7 228.5 512 222.5 512 216.3zM227.8 238.1L169.4 297.4C163.1 291.1 154.9 288 146.7 288S130.4 291.1 124.1 297.4l-114.7 114.7c-6.25 6.248-9.375 14.43-9.375 22.62s3.125 16.37 9.375 22.62l45.25 45.25C60.87 508.9 69.06 512 77.25 512s16.37-3.125 22.62-9.375l114.7-114.7c6.25-6.25 9.376-14.44 9.376-22.62c0-8.185-3.125-16.37-9.374-22.62l58.43-58.43L227.8 238.1z"/></svg>
          <p className="display-6 text-white text-center">
            Hammer </p></Col>
          <Col sm>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
            className= {`${styles.ico} ${styles.fillw} ${styles.p5}`}
            ><path d="M554.9 154.5c-17.62-35.25-68.12-35.38-85.87 0c-87 174.3-84.1 165.9-84.1 181.5c0 44.13 57.25 80 128 80s127.1-35.88 127.1-80C639.1 319.9 641.4 327.3 554.9 154.5zM439.1 320l71.96-144l72.17 144H439.1zM256 336c0-16.12 1.375-8.75-85.12-181.5c-17.62-35.25-68.12-35.38-85.87 0c-87 174.3-84.1 165.9-84.1 181.5c0 44.13 57.25 80 127.1 80S256 380.1 256 336zM127.9 176L200.1 320H55.96L127.9 176zM495.1 448h-143.1V153.3C375.5 143 393.1 121.8 398.4 96h113.6c17.67 0 31.1-14.33 31.1-32s-14.33-32-31.1-32h-128.4c-14.62-19.38-37.5-32-63.62-32S270.1 12.62 256.4 32H128C110.3 32 96 46.33 96 64S110.3 96 127.1 96h113.6c5.25 25.75 22.87 47 46.37 57.25V448H144c-26.51 0-48.01 21.49-48.01 48c0 8.836 7.165 16 16 16h416c8.836 0 16-7.164 16-16C544 469.5 522.5 448 495.1 448z"/></svg>
            <p className="display-6 text-white text-center">
            Mediation </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}