import logo from './logo.svg';
import './App.css';
import Projects from './Components/FrontEnd/Components/Projects'
import AddProject from './Components/FrontEnd/Components/AddProject'
import pageNotFound from './Components/FrontEnd/Components/pageNotFound'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Button} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/Projects'component={Projects}/>
          <Route path='/Add' component={AddProject}/>
          <Route path='/*' component={pageNotFound}/>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
