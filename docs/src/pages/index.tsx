import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './home.css';

export default function Home() {
  return (
    <Layout title="IA Lab" description="Arquitectura y microservicios">
      <main>

        {/* HERO */}
        <section className="hero">

          {/* fondo animado */}
          <div className="sparkles"></div>
          <div className="data-lines"></div>

          <div className="hero-content">
            <div className="hero-text">
              <h1>IA Lab</h1>
              <p>Arquitectura, microservicios y desarrollo real</p>

              <Link to="/docs/projects/overview" className="btn">
                Explorar proyectos
              </Link>
            </div>

            <div className="hero-image">
              <img src={useBaseUrl('/img/hero.png')} alt="hero" />
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section className="cards">

          {/* ARQUITECTURA */}
          <div className="card">
            <div className="card-image">
              <img src={useBaseUrl('/img/architecture.jpg')} alt="arquitectura" />
            </div>

            <div className="card-content">
              <h3>Arquitectura</h3>
              <p>Diseño y evolución del sistema</p>

              <Link to="/docs/projects/architecture" className="card-btn">
                Ver más
              </Link>
            </div>
          </div>

          {/* GATEWAY */}
          <div className="card">
            <div className="card-image">
              <img src={useBaseUrl('/img/gateway.jpg')} alt="gateway" />
            </div>

            <div className="card-content">
              <h3>Gateway</h3>
              <p>Punto de entrada del sistema</p>

              <Link to="/docs/projects/gateway" className="card-btn">
                Explorar
              </Link>
            </div>
          </div>

          {/* SERVICIOS */}
          <div className="card">
            <div className="card-image">
              <img src={useBaseUrl('/img/services.jpg')} alt="servicios" />
            </div>

            <div className="card-content">
              <h3>Servicios</h3>
              <p>Microservicios independientes</p>

              <Link to="/docs/projects/accounting-service" className="card-btn">
                Ver servicios
              </Link>
            </div>
          </div>

          {/* TUTORIALES */}
          <div className="card">
            <div className="card-image">
              <img src={useBaseUrl('/img/tutorials.jpg')} alt="tutoriales" />
            </div>

            <div className="card-content">
              <h3>Tutoriales</h3>
              <p>Guías paso a paso</p>

              <Link to="/docs/tutorials/accounting-service" className="card-btn">
                Aprender
              </Link>
            </div>
          </div>

        </section>

      </main>
    </Layout>
  );
}