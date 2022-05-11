import './body.css';
import Header from './header/Header';
import Skills from './skills/Skills';
import About from './about/About';
import Contact from './contact/Contact';

const Body = () => {
  return (
    <div className="body">
      <section id="header">
        <Header />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="header">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Body;