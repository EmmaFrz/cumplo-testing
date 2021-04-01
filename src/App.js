import AppContext from './context/appContext';
import InitialState from './hooks/useInitialState';
import Main from './container/App';

const App = () => {
    const state = InitialState();
    return(
        <AppContext.Provider value={state}>
            <Main />
        </AppContext.Provider>
    );
}

export default App;