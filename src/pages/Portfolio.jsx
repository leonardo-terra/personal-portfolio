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
            alt='explore meus projetos'
          />
          <Carousel.Caption>
            <h3 className='text-white underline drop-shadow-2xl'>
              Projetos realizados
            </h3>
            <p>Explore um pouco sobre meus projetos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className='object-cover d-block w-100 h-[480px]'
            src={require("../images/pixel-art.jpg")}
            alt='arte com pixels'
          />
          <Carousel.Caption>
            <a
              target='_blank'
              href='//pixel-art-git-main-leonardo-terra.vercel.app/'
              rel='noreferrer'
            >
              <h3 className='text-white underline drop-shadow-2xl'>
                Pixel-Art!
              </h3>
            </a>
            <p>Arte com pixels.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='object-cover d-block w-100 h-[480px]'
            src={require("../images/trybe-wallet.jpg")}
            alt='sua carteira virtual'
          />
          <Carousel.Caption>
            <a
              target='_blank'
              href='//trybe-wallet-five.vercel.app/'
              rel='noreferrer'
            >
              <h3 className='text-white underline drop-shadow-2xl'>
                Trybe-wallet
              </h3>
            </a>
            <p>Sua carteira virtual.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='object-cover d-block w-100 h-[480px]'
            src={require("../images/recipes-app.jpg")}
            alt='seu assistente de cozinha'
          />
          <Carousel.Caption>
            <a
              target='_blank'
              href='//recipes-apps.vercel.app/'
              rel='noreferrer'
            >
              <h3 className='text-white underline drop-shadow-2xl'>
                Recipes-App
              </h3>
            </a>
            <p>Seu assistente de cozinha.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
