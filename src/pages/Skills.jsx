import { Accordion, ListGroup } from "react-bootstrap";

export default function Skills() {
  return (
    <section className='container flex justify-around mx-auto mt-5'>
      <article className='max-w-md pr-4 text-justify text-md'>
        <h3>Sobre mim:</h3>
        Desenvolvedor Full stack em processo de criação. Atualmente sou
        estudante na Trybe, turma XP inc.
        <br />
        No momento, estou mais envolvido em desenvolvimento Front-end,
        programando usando ferramentas do universo de ReactJS.
        <br />
        Fun fact? Provavelmente o único dev do planeta que não gosta de café.
        <br />
        :( kkk
      </article>
      <article className='max-w-xl pl-4 text-justify text-md'>
        <h3>Skills:</h3>
        <Accordion defaultActiveKey='0' className='w-[600px]'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Front-end</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </article>
    </section>
  );
}
