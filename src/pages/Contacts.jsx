import { ImLocation2 } from "react-icons/im";
import { BsTelephoneForwardFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { TiSocialAtCircular } from "react-icons/ti";

export default function Contacts() {
  return (
    <section className='pb-5 mt-5 bg-gray-200'>
      <div className='container mx-auto'>
        <h2 className='p-3 font-bold tracking-wider text-center text-sky-400 '>
          Contato
        </h2>
        <div className='flex justify-around'>
          <div className='flex flex-col items-center w-1/3 justify-items-center'>
            <ImLocation2 className='w-12 h-20 mb-2' />
            <h6 className='font-normal'>Location</h6>
            <h6 className='font-normal'>Rio de Janeiro/RJ</h6>
            <h6 className='font-normal'>Brasil</h6>
          </div>
          <div className='flex flex-col items-center w-1/3'>
            <BsTelephoneForwardFill className='w-12 h-20 mb-2' />
            <h6 className='font-normal'> Celular: (21) 97099-5956 </h6>
            <h6 className='font-normal'>email: leo.terra.melo@gmail.com</h6>
          </div>
          <div className='flex flex-col items-center w-1/3'>
            <TiSocialAtCircular className='w-12 h-20 mb-2' />
            <div>
              <BsLinkedin className='inline-block' />
              <a
                href='https://www.linkedin.com/in/leonardo-terra/'
                target='_blank'
                rel='noreferrer'
              >
                <h6 className='inline-block ml-1 font-normal'>LinkedIn</h6>
              </a>
            </div>

            <div>
              <BsGithub className='inline-block' />
              <a
                href='https://github.com/leonardo-terra'
                target='_blank'
                rel='noreferrer'
              >
                <h6 className='inline-block ml-1 font-normal'>GitHub</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
