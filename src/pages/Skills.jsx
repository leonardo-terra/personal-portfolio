import { Accordion, ListGroup } from "react-bootstrap";

export default function Skills() {
  return (
    <section className='container flex justify-around mx-auto mt-5'>
      <article className='max-w-md pr-4 text-justify text-md'>
        <h3>Sobre mim:</h3>
        <h4 className='text-base'>
          Desenvolvedor Full stack em processo de criação. Atualmente sou
          estudante na Trybe | XP inc.
        </h4>
        <h4 className='text-base'>
          No momento, estou mais envolvido em desenvolvimento Front-end,
          programando usando ferramentas do universo de ReactJS.
        </h4>
        <h4 className='text-base'>
          Fun fact? Provavelmente o único dev do planeta que não gosta de café.
          :( kkk
        </h4>
      </article>
      <article className='max-w-xl pl-4 text-justify text-md'>
        <h3>Skills:</h3>
        <Accordion defaultActiveKey='0' className='w-[600px] z-0'>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Front-end</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                <ListGroup.Item>HTML5</ListGroup.Item>
                <ListGroup.Item>CSS3</ListGroup.Item>
                <ListGroup.Item>Javascript</ListGroup.Item>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>Redux</ListGroup.Item>
                <ListGroup.Item>Single Page Applications (SPA)</ListGroup.Item>
                <ListGroup.Item>Bootstrap</ListGroup.Item>
                <ListGroup.Item>Tailwind</ListGroup.Item>
                <ListGroup.Item>Jest</ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Idiomas</Accordion.Header>
            <Accordion.Body>
              <ListGroup.Item>Português Nativo</ListGroup.Item>
              <ListGroup.Item>Inglês Fluente</ListGroup.Item>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>Outras habilidades</Accordion.Header>
            <Accordion.Body>
              <ListGroup.Item>
                Desenvolvimento Agile: SCRUM e Kanban
              </ListGroup.Item>
              <ListGroup.Item>Docker</ListGroup.Item>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </article>
    </section>
  );
}
