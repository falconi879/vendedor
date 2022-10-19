import NotificacaoBotao from '../Notificacao'
import './estilo.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from "../../utils/request";
import { Sale } from '../../modelos/sale';
function Card() {

    const min =new Date(new Date().setDate(new Date().getDate()-365))

    const [minDate, setMinDate] = useState(min);
    const [maxDate, seMaxDate] = useState(new Date());

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(()=>{

        const dmin = minDate.toISOString().slice(0,10);
        const dmax = maxDate.toISOString().slice(0,10);

         

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`).then(response =>{
            setSales(response.data.content);
        })

    }, [minDate,maxDate]);

    return (
        <div className="card">
            <h2 className="titulo">Vend/as</h2>
            <div>
                <div className="venda-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="controle"
                        dateFormat="dd/MM/yyyy"
                    />

                </div>
                <div className="venda-container">
                <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => seMaxDate(date)}
                        className="controle"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="tabela">
                    <thead>
                        <tr>
                            <th className="show976">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show976">Visitas</th>
                            <th className="show976">Vendas</th>
                            <th>Total</th>
                            <th>Notificare</th>
                        </tr>
                    </thead>
                    <tbody>

                        {sales.map(sale =>{
                            return(
                                <tr key={sale.id}>
                            <td className="show976">{sale.id}</td>
                            <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                            <td>{sale.sellerName}</td>
                            <td className="show976">{sale.visited}</td>
                            <td className="show976">{sale.deals}</td>
                            <td>R$ {sale.amount.toFixed(2)}</td>
                            <td>
                                <div className="botao-notificar-container">
                                    <NotificacaoBotao saleId={sale.id} />
                                </div>
                            </td>

                        </tr>

                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Card