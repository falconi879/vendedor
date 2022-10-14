import NotificacaoBotao from '../Notificacao'
import './estilo.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
function Card() {

    const min =new Date(new Date().setDate(new Date().getDate()-365))

    const [minDate, setMinDate] = useState(min);
    const [maxDate, seMaxDate] = useState(new Date());

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
                        <tr>
                            <td className="show976">#1</td>
                            <td className="show576">08/07/22</td>
                            <td>Anakim</td>
                            <td className="show976">15</td>
                            <td className="show976">3</td>
                            <td>R$ 500.00</td>
                            <td>
                                <div className="botao-notificar-container">
                                    <NotificacaoBotao />
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className="show976">#2</td>
                            <td className="show576">08/07/22</td>
                            <td>Anakim</td>
                            <td className="show976">14</td>
                            <td className="show976">2</td>
                            <td>R$ 500.00</td>
                            <td>
                                <div className="botao-notificar-container">
                                    <NotificacaoBotao />
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className="show976">#3</td>
                            <td className="show576">08/07/22</td>
                            <td>Anakim</td>
                            <td className="show976">12</td>
                            <td className="show976">8</td>
                            <td>R$ 500.00</td>
                            <td>
                                <div className="botao-notificar-container">
                                    <NotificacaoBotao />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Card