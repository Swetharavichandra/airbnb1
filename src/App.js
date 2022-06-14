import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer'
import {Switch,Route } from 'react-router-dom';
import Search from './Search';
import Host from './Host';
import Login from './Login';
import Contact from './Contact';
import Explore from './Explore';



function App() {

  
  
  return (
    <div className="App">

      
        
      <Header/>
      <Switch>
      <Route path='/search'>
        <Search/>
        </Route>
        <Route path='/explore'>
        <Explore/>
        </Route>
        <Route path='/host'>
          <Host/>

        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/contact'>
          <Contact/>

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
