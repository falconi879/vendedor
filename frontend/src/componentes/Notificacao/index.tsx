import axios from 'axios';
import icon from '../../recursosAssets/img/boton-icon.svg'
import { BASE_URL } from '../../utils/request';
import './estilo.css'

type Props = {
    saleId: number;
}
function handleClick(id:number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
        console.log("SUCESSO");
    })
}

function NotificacaoBotao({saleId} : Props) {
    return (

        <div className="botao-notificar" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificação"/>
        </div>

    )
}

export default NotificacaoBotao
