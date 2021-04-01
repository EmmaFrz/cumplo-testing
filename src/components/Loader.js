  
import './css/Loader.css';

const Loader = () => {
    return (
      <div className='PageLoading'>
          <div className="lds-grid">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
      </div>  
    );
}

export default Loader;