import profileImage from "../images/leonardo.jpeg";

export default function AboutMe() {
  return (
    <section className='container mx-auto'>
      <h2 className='p-3 font-bold tracking-wider text-center text-sky-400 '>
        About me
      </h2>
      <h3 className='mb-8 font-medium text-center'>
        Vou contar um pouco mais sobre meu trabalho...
      </h3>
      <div className='flex justify-between'>
        <img
          className='w-56 h-56 rounded-full '
          src={profileImage}
          alt='Leonardo Terra de Melo, autor da página'
        />
        <article className='max-w-xl text-lg text-justify'>
          Estudante em desenvolvimento de software na Trybe. Em processo de
          aprendizado na área de tecnologia como desenvolvedor full stack.
          Atualmente aprendendo HTML, Javascript, CSS e React-Redux. Com o sonho
          de me tornar um dev full stack Graduando em Engenharia Química na
          UFRJ, com experiência empresarial em gerenciamento de projetos,
          marketing e comercial. “Todos os nossos sonhos podem se tornar
          realidade, se nós tivermos a coragem para persegui-los”. (Walt Disney)
        </article>
      </div>
    </section>
  );
}
