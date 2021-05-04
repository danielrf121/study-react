import { Provider } from 'react-redux'

import Count from "./components/count";
import Effect from "./components/effect";
import Redux from "./components/redux";
import ReduxThree from './components/redux-three';
import ReduxTwo from './components/redux-two';
import UseLoadingList from "./hooks/useLoadingList";
import UseStatusTest from "./hooks/useStatusTest";
import store from './store';

function App() {

  let { status, handleTest } = UseStatusTest();
  let { list, loadingList } = UseLoadingList();
  console.log('statusTestValue na view', status);

  function externalHook() {
    console.log('externalHook');
    handleTest(1);
  }

  async function hookApi() {
    await loadingList();
    console.log('list', list);
  }

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Olá, reactJS</h1>
        </header>

        {/* ##################################### */}
        <Count></Count>
        <hr/>

        {/* ##################################### */}
        <Effect></Effect>
        <hr/>

        {/* ##################################### */}
        <h2>Teste hook externo</h2>
        <span>Valor do hook: {status}</span><br/><br/>
        <button onClick={() => externalHook()}>
          Teste
        </button>
        <hr/>

        {/* ##################################### */}
        <h2>Hook externo com serviço</h2>
        
        {list.loading && (<span>Loading...</span>)}
        
        {!list.loading && list.data.length > 0 && (
          <ul>
            {list.data.map((value: any, index) => {
              return <li key={index}>{value.name}</li>
            })}
          </ul>
        )}

        <br/>
        <br/>
        <button onClick={() => hookApi()}>
          Load
        </button>
        <hr/>

        {/* ##################################### */}
        <Redux></Redux>
        <ReduxTwo></ReduxTwo>
        <ReduxThree></ReduxThree>
      </div>
    </Provider>
  );
}

export default App;
