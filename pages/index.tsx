import type { NextPage } from 'next'
import { Footer } from '../components/Footer';
import { Header } from '../components/Header'
import { Meta } from '../partials/Meta'
import { Contact } from '../sections/Contact';
import { Home } from '../sections/Home';
import { Team } from '../sections/Team';
import { Work } from '../sections/Work';

const App: NextPage = () => {
  return (
    <>
      <Meta />
      <div>
        <Header />
        <div className='px-8 sm:px-[8ch] h-screen flex items-center' id="home" style={{ boxShadow: "inset 0 -80px 80px -10px rgba(45, 179, 255, 0.05)" }}>
          <Home />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id='team'>
          <Team />
        </div>
        <div id='contact'>
          <Contact />
        </div>
        <div className='py-8' style={{ boxShadow: "inset 0 -20px 80px -10px rgba(45, 179, 255, 0.05), inset 0 20px 80px -10px rgba(45, 179, 255, 0.05)" }} />
        <Footer />
      </div>
    </>
  )
}

export default App;
