import Carousel from "react-bootstrap/Carousel";

export default function Portfolio() {
  return (
    <section className='container justify-around mx-auto mt-5'>
      <h2 className='p-3 font-bold tracking-wider text-center text-sky-400 '>
        Portfolio
      </h2>

      <Carousel className='container mt-auto'>
        <Carousel.Item interval={1000}>
          <img
            className='object-cover d-block w-100 h-[480px]'
            src={require("../images/projects.jpg")}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Projetos realizados</h3>
            <p>Explore um pouco sobre meus projetos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className='object-cover d-block w-100 h-[480px]'
            src={require("../images/pixel-art.jpg")}
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Pixel-Art! project</h3>
            <p>Arte com pixels.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='object-cover d-block w-100 h-[480px]'
            src={require("../images/trybe-wallet.jpg")}
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Trybe-wallet</h3>
            <p>Sua carteira virtual.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
