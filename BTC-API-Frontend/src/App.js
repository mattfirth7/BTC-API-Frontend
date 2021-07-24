import './App.css';

import { Wallet, Transaction } from './components';

function App() {
  return (
    <div className="App">
      <h1>Bitcoin Core API </h1>
      <Wallet />
      <Transaction />   
    </div>
  );
}

export default App;
