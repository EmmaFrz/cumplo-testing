import { useContext } from 'react';
import AppContext from "../context/appContext";
import Button from '../components/Button';
import Input from '../components/Input';
import './css/SearchBar.css';
import './css/Input.css';
import './css/Button.css';

const SearchBar = () => {
    const { state, handleDateChange, getDolarByDates } = useContext(AppContext);
    const { startDate, endDate } = state;
    return(
        <section className='searchbar-grid'>
            <Input 
                name="startDate" 
                value={ startDate } 
                onChange={ handleDateChange }  
                max={ endDate === '' ? new Date().toISOString().split('T')[0] : endDate } 
                className='input-style'
            />
            <Input 
                name="endDate" 
                value={ endDate } 
                onChange={ handleDateChange } 
                min={ startDate }  
                max={ new Date().toISOString().split('T')[0] }
                className='input-style'
            />
            <Button  onClick={ getDolarByDates } className='button-style' disabled={(startDate === '' || endDate === '')}>
                Buscar
            </Button>
        </section>
    )
}

export default SearchBar;