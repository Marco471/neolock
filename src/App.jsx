import "./App.css"

import fechadura1 from "./assets/fechaduras/fechadura1.jpg"
import fechadura2 from "./assets/fechaduras/fechadura2.jpg"
import fechadura3 from "./assets/fechaduras/fechadura3.jpg"

import interruptor1 from "./assets/interruptores/interruptor1.jpg"
import interruptor2 from "./assets/interruptores/interruptor2.jpg"
import interruptor3 from "./assets/interruptores/interruptor3.jpg"

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        overflowX: "hidden",
      }}
    >
      {/* HEADER */}

      <header
        className="slide-top"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
          backgroundColor: "#ffffff",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            color: "#0b5d3b",
            fontSize: "clamp(28px, 5vw, 42px)",
            margin: 0,
          }}
        >
          NeoLock
        </h1>

        <nav
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a href="#inicio">Início</a>
          <a href="#fechaduras">Fechaduras</a>
          <a href="#automacao">Automação</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* HERO */}

      <section
        id="inicio"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
          padding: "100px 20px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          className="slide-left"
          style={{
            flex: 1,
            minWidth: "300px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(40px, 8vw, 80px)",
              color: "#0b5d3b",
              lineHeight: "1.1",
              marginBottom: "20px",
            }}
          >
            Fechaduras Digitais Para Sua Casa
          </h2>

          <p
            style={{
              fontSize: "clamp(18px, 3vw, 24px)",
              color: "#555",
              lineHeight: "35px",
              maxWidth: "600px",
            }}
          >
            Instalação profissional, configuração completa
            no aplicativo e integração com Alexa.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=5511991882423"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <button className="premium-btn">
              Solicitar Orçamento
            </button>
          </a>
        </div>

        <div
          className="slide-right"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            minWidth: "300px",
          }}
        >
          <img
            src={fechadura1}
            alt=""
            className="zoom-image"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "30px",
              objectFit: "cover",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            }}
          />
        </div>
      </section>

      {/* FECHADURAS */}

      <section
        id="fechaduras"
        style={{
          padding: "80px 20px",
          backgroundColor: "#f8fafc",
        }}
      >
        <h2
          className="slide-top"
          style={{
            fontSize: "clamp(35px, 7vw, 60px)",
            color: "#0b5d3b",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Tecnologia e Segurança
        </h2>

        <div
          style={{
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            src={fechadura2}
            alt=""
            className="zoom-image"
            style={{
              width: "100%",
              maxWidth: "350px",
              borderRadius: "25px",
              objectFit: "cover",
            }}
          />

          <img
            src={fechadura3}
            alt=""
            className="zoom-image"
            style={{
              width: "100%",
              maxWidth: "350px",
              borderRadius: "25px",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* AUTOMAÇÃO */}

      <section
        id="automacao"
        style={{
          backgroundColor: "#0b5d3b",
          color: "#fff",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <div
            className="slide-left"
            style={{
              flex: 1,
              minWidth: "300px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(35px, 7vw, 65px)",
                lineHeight: "1.1",
              }}
            >
              Controle Sua Iluminação Pelo Celular
            </h2>

            <p
              style={{
                marginTop: "20px",
                fontSize: "20px",
                lineHeight: "35px",
                maxWidth: "600px",
              }}
            >
              Automatize sua iluminação e deixe sua casa
              mais moderna, prática e inteligente.
            </p>
          </div>

          <div
            className="slide-right"
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              minWidth: "300px",
            }}
          >
            <img
              src={interruptor1}
              alt=""
              className="zoom-image"
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "30px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "60px",
          }}
        >
          <img
            src={interruptor2}
            alt=""
            className="zoom-image"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "20px",
            }}
          />

          <img
            src={interruptor3}
            alt=""
            className="zoom-image"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "20px",
            }}
          />
        </div>
      </section>

      {/* CONTATO */}

      <section
        id="contato"
        style={{
          padding: "100px 20px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2
          className="slide-top"
          style={{
            fontSize: "clamp(35px, 7vw, 70px)",
            color: "#0b5d3b",
            marginBottom: "20px",
          }}
        >
          Transforme Sua Casa
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "35px",
          }}
        >
          Instalação profissional de fechaduras digitais,
          automação residencial e integração inteligente.
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=5511991882423"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <button className="premium-btn">
            Chamar no WhatsApp
          </button>
        </a>

        <p
          style={{
            marginTop: "50px",
            color: "#777",
            fontSize: "15px",
          }}
        >
          © 2026 NeoLock — Todos os direitos reservados
          <br />
          Desenvolvido por 11 99188-2423
        </p>
      </section>
    </div>
  )
}

export default App