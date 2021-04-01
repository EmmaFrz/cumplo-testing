import { useContext } from 'react';
import P from '../components/P';
import H5 from './H5';
import AppContext from "../context/appContext";
import './css/Indicator.css';

const Indicators = () => {
    const { state, } = useContext(AppContext);
    const { dolarAverage, minDolarPrice, maxDolarPrice } = state;
    return(
        <>
            <H5>
                <strong>Bienvenidos a la plataforma del precio historico del dolar 🚀</strong>
            </H5>
            <center className='indicator-grid'>
                <P>
                    El valor más alto del 💵 fue de <strong>${ maxDolarPrice }</strong> 
                </P>
                <P>
                    El valor más bajo del 💵 fue de <strong>${ minDolarPrice }</strong> 
                </P>
                <P>
                    El promedio del 💵 fue de <strong>${ dolarAverage }</strong> 
                </P>
            </center>
        </>
    )
}

export default Indicators;