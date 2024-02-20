import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import page1 from './page1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={page1} />　
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
