
import './App.css';

import {Route , Switch} from 'react-router';
import Home from './pages/Resturent/Home';
import About from './pages/increment/About';
import Chat from './pages/Chat/Chat';
import DataStore from './pages/DataStore/DataStore';
import Cloud from './pages/Cloud/Cloud';
function App() {

    return ( <>

<Switch>
  <Route exact path="/" component={Home}></Route>
  <Route exact path="/about" component={About}></Route>
  <Route exact path="/chat" component={Chat}></Route>
  <Route exact path="/datastore" component={DataStore}></Route>
  <Route exact path="/cloud" component={Cloud}></Route>



</Switch>


  </>  );
}

export default App;