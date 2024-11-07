// src/app/contact/Contact.js
import styles from './Contact.module.css';

const Contact = () => (
  <section id="contact" className={styles.contact}>
    <p>Email: zaki@lazissabilillah.com</p>
    <p>Phone: +62 8595 4312 258</p>
    <p>
      LinkedIn: 
      <a href="https://www.linkedin.com/in/mahdi-romzuz-zaki-b41b77248/" className={styles.contactLink}>
        Mahdi Romzuz Zaki
      </a>
    </p>
  </section>
);

export default Contact;