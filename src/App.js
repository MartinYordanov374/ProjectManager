import logo from './logo.svg';
import './App.css';
import Projects from './Components/FrontEnd/Components/Projects'
import AddProject from './Components/FrontEnd/Components/AddProject'
import pageNotFound from './Components/FrontEnd/Components/pageNotFound'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {Provider } from 'react-redux'
import {store} from './Components/BackEnd/store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/Projects'component={Projects}/>
            <Route path='/Add' component={AddProject}/>
            <Route path='/*' component={pageNotFound}/>


          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
