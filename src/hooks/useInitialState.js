import { useEffect, useState } from "react";
import Api from '../helpers/api';

const InitialState = () => {
    const [state, setState] = useState({ 
        dolares:[], 
        startDate:'', 
        endDate:'',  
        dolarAverage: 0, 
        minDolarPrice: 0, 
        maxDolarPrice: 0, 
        dolarDates:[], 
        dolarValues:[]
    });
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const getTodayDolar = async () => {
            setLoading(true);
            try {
                const response = await Api.getDayDolar();
                setState( prevState => {
                    return{
                        ...prevState,
                        dolares:[...response.Dolares],
                        dolarAverage: response.Dolares[0].Valor,
                        minDolarPrice: response.Dolares[0].Valor,
                        maxDolarPrice: response.Dolares[0].Valor,
                        dolarDates: [response.Dolares[0].Fecha], 
                        dolarValues: [parseFloat(response.Dolares[0].Valor)]
                    }
                })
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false)
            }
        }
        getTodayDolar();
    },[]);

    const handleDateChange = (event) => {
        setState(prevState => {
            return{
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const getDolarByDates = async () => {
        setLoading(true)
        let start = state.startDate.split('-');
        let end = state.endDate.split('-');
        let values = [];
        let dates = [];
        try {
            const response = await Api.getDateDolar(start, end);
            response.Dolares.map( d => values.push(parseFloat(d.Valor)));
            response.Dolares.map( d => dates.push(d.Fecha))
            const total = values.reduce( (accumulator, current) => accumulator + current, 0);
            setState( prevState => {
                return{
                    ...prevState,
                    dolares:[...response.Dolares],
                    dolarAverage: Math.round(total/values.length),
                    minDolarPrice: Math.min(...values),
                    maxDolarPrice: Math.max(...values),
                    dolarDates: dates,
                    dolarValues: values
                }
            })
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            setState( prevState => {
                return{
                    ...prevState,
                    endDate:'',
                    startDate:''
                }
            })
        }
    }

    return { state, loading, handleDateChange, getDolarByDates };
}

export default InitialState;