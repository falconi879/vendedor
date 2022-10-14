import Cabecalho from "./componentes/CabecalhoHeader"
import Card from "./componentes/Card"
import NotificacaoBotao from "./componentes/Notificacao"

function App() {
  return (
    <>

      <Cabecalho />
      <main>
        <section id="vendas">
          <div className="container">
            <Card/>
          </div>
        </section>
      </main>

    </>
  )
}

export default App
