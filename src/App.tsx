import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Editais from './components/pages/Editais';
import Erro404 from './components/pages/Erro404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/editais" component={Editais} />
        <Route component={Erro404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
