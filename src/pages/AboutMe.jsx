import profileImage from "../images/leonardo.jpeg";

export default function AboutMe() {
  return (
    <section className='container pb-12 mx-auto border-b-4'>
      <h2 className='p-3 font-bold tracking-wider text-center text-sky-400 '>
        About me
      </h2>
      <h3 className='mb-8 font-medium text-center'>
        Vou contar um pouco mais sobre meu trabalho...
      </h3>
      <div className='flex justify-between'>
        <img
          className='w-56 h-56 rounded-full mr-28 ml-28'
          src={profileImage}
          alt='Leonardo Terra de Melo, autor da página'
        />
        <article className='max-w-xl text-justify'>
          <h4 className='text-base'>
            Estudante em desenvolvimento de software na Trybe. Em processo de
            aprendizado na área de tecnologia como desenvolvedor full stack.
            Atualmente aprendendo HTML, Javascript, CSS e React-Redux. Com o
            sonho de me tornar um dev full stack.
          </h4>
          <h4 className='text-base'>
            Graduando em Engenharia Química na UFRJ, com experiência empresarial
            em gerenciamento de projetos, marketing e comercial.
          </h4>
          <h4 className='text-base'>
            “Todos os nossos sonhos podem se tornar realidade, se nós tivermos a
            coragem para persegui-los”. (Walt Disney)
          </h4>
        </article>
      </div>
    </section>
  );
}
