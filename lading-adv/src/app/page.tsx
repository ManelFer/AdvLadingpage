import { About } from './_components/about';
import {Hero} from './_components/hero';
import {Service} from './_components/services'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service/>
    </main>
  );
}
