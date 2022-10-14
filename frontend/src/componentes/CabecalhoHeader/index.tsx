import icon from '../../recursosAssets/img/logo.svg'
import './estilo.css'
function Cabecalho() {
    return (
        <>
            <header>
                <div className= "cabecalho-conteiner">

                <img src={icon} alt="" />
                <h1>SMS</h1>
                <p>Vamos que Vamos
                    <a href="#">@andreRelhasFalconi</a>
                </p>
            </div>
        </header>
    </>
    )
}

export default Cabecalho