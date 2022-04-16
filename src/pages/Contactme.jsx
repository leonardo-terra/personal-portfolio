import { Form, Button } from "react-bootstrap";

export default function Contactme() {
  return (
    <section className='pb-5 mt-5 bg-gray-200'>
      <div className='container mx-auto'>
        <h2 className='p-3 font-bold tracking-wider text-center text-sky-400 '>
          Contato
        </h2>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Nome</Form.Label>
            <Form.Control type='text' placeholder='Digite seu nome' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Digite seu email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicMessage'>
            <Form.Label>Mensagem</Form.Label>
            <Form.Control
              as='textarea'
              rows={5}
              placeholder='Digite sua mensagem'
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}
