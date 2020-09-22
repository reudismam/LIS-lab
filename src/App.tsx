import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Editais from './pages/Editais';
import Erro404 from './pages/Erro404';
import CriarConta from './pages/CriarConta';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/editais" component={Editais} />
        <Route path="/signup" component={CriarConta} />
        <Route component={Erro404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
