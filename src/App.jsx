import './App.css'

const servicos = [
  { icone: '🩺', titulo: 'Consultas', texto: 'Atendimento clínico completo para cães, gatos e outros pets.' },
  { icone: '💉', titulo: 'Vacinação', texto: 'Protocolo de vacinas atualizado para cada fase da vida.' },
  { icone: '🛁', titulo: 'Banho e Tosa', texto: 'Cuidado e carinho para deixar seu pet limpinho e feliz.' },
  { icone: '🔬', titulo: 'Exames', texto: 'Exames laboratoriais e de imagem com resultado rápido.' },
]

function App() {
  return (
    <>
      <header className="topo">
        <a href="#inicio" className="logo">🐾 Patinhas Felizes</a>
        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-texto">
            <h1>Cuidado de verdade para quem ama você</h1>
            <p>
              Clínica veterinária com atendimento carinhoso, equipe
              especializada e estrutura completa para o seu pet.
            </p>
            <a href="#contato" className="botao">Agendar consulta</a>
          </div>
          <div className="hero-emoji" aria-hidden="true">🐶🐱</div>
        </section>

        <section id="servicos" className="secao">
          <h2>Nossos serviços</h2>
          <div className="cards">
            {servicos.map((servico) => (
              <article key={servico.titulo} className="card">
                <span className="card-icone">{servico.icone}</span>
                <h3>{servico.titulo}</h3>
                <p>{servico.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sobre" className="secao sobre">
          <h2>Sobre nós</h2>
          <p>
            Há mais de 10 anos cuidamos da saúde e do bem-estar dos animais com
            amor, ética e dedicação. Cada pet é tratado como parte da nossa
            família.
          </p>
        </section>

        <section id="contato" className="secao contato">
          <h2>Contato</h2>
          <p>📍 Rua das Flores, 123 - Centro</p>
          <p>📞 (11) 99999-9999</p>
          <p>🕗 Seg a Sáb, das 8h às 19h</p>
        </section>
      </main>

      <footer className="rodape">
        <p>© 2026 Patinhas Felizes. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App