import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../recursosAssets/img/boton-icon.svg'
import { BASE_URL } from '../../utils/request';
import './estilo.css'

type Props = {
    saleId: number;
}
function handleClick(id:number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
        toast.info("SMS enviado com sucesso");
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
