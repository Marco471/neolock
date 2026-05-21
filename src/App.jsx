import "./App.css";

import fechadura1 from "./assets/fechaduras/fechadura1.jpg";
import interruptor1 from "./assets/interruptores/interruptor1.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>

      {/* NAVBAR */}

      <header className="navbar">

        <h2>NEOLOCK</h2>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </nav>

      </header>

      {/* HERO */}

      <section className="hero" id="inicio">

        <div
          className="hero-text"
          data-aos="fade-right"
        >

          <h1>
            Tecnologia inteligente para proteger sua casa.
          </h1>

          <p>
            Instalação premium de fechaduras digitais,
            interruptores inteligentes e automação residencial.
          </p>

          <a href="https://wa.me/5511991882423">
            Falar com especialista
          </a>

        </div>

        <div
          className="hero-image"
          data-aos="fade-left"
        >

          <img
            src={fechadura1}
            alt="Fechadura Digital"
          />

        </div>

      </section>

      {/* SECTION GREEN */}

      <section
        className="section-two"
        id="servicos"
      >

        <div
          className="section-image"
          data-aos="fade-right"
        >

          <img
            src={interruptor1}
            alt="Interruptor Inteligente"
          />

        </div>

        <div
          className="section-text"
          data-aos="fade-left"
        >

          <h2>
            Controle sua casa com um toque.
          </h2>

          <p>
            Segurança, automação e praticidade
            em um sistema moderno instalado
            profissionalmente.
          </p>

        </div>

      </section>

      {/* GALLERY */}

      <section
        className="gallery"
        id="galeria"
        data-aos="fade-up"
      >

        <h2>
          Projetos realizados
        </h2>

        <div className="gallery-grid">

          <img src={fechadura1} alt="" />

          <img src={interruptor1} alt="" />

          <img src={fechadura1} alt="" />

        </div>

      </section>

      {/* CONTACT */}

      <section
        className="contact"
        id="contato"
        data-aos="zoom-in"
      >

        <h2>
          Entre em contato
        </h2>

        <p>
          Solicite um orçamento e transforme
          sua casa com tecnologia inteligente.
        </p>

        <a href="https://wa.me/5511991882423">
          WhatsApp
        </a>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <p>
          © 2026 NeoLock. Todos os direitos reservados.
        </p>

        <span>
          Desenvolvido por 11 99188-1423
        </span>

      </footer>

    </div>
  );
}

export default App;