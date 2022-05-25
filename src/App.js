import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer'
import {Switch,Route } from 'react-router-dom';
import Search from './Search';
import Host from './Host';
import Login from './Login';
import Logout from './Logout';


function App() {
  
  return (
    <div className="App">
      
        
      <Header/>
      <Switch>
      <Route path='/search'>
        <Search/>
        </Route>
        <Route path='/host'>
          <Host/>

        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/logout'>
          <Logout/>

        </Route>
      <Route path='/'>
        <Homepage/>
        </Route>
      
      </Switch>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
