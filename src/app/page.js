// src/app/page.js
import About from './about/About';
import Skills from './skills/Skills';
import ContactInfo from './contact/Contact';

export default function HomePage() {
  return (
    <>
      <About />
      <Skills />
      <ContactInfo />
    </>
  );
}
