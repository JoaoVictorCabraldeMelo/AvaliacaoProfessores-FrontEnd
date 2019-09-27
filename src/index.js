import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App/App';
import Professores from './components/Professores/Professores';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
                  <Switch>
                    <Route path="/" exact={true} component={App}/>
                    <Route path="/professores" component={Professores}/>
                  </Switch>
                </BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
