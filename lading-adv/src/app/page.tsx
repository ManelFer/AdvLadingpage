import { About } from './_components/about';
import {Hero} from './_components/hero';
import {Service} from './_components/services'
import {Form} from './_components/form'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service/>
      <Form />
    </main>
  );
}
