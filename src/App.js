import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Further from './Further';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Notfound from './NotFound';
// import Further from  './Further';



function App() {

 
   // We can not output objects or booleans
   
  return (
    <Router> 
        <div className="App">
          <Navbar />
          <div className="Content">
            {/* <h1> App Component </h1> */}
            <Switch>
              <Route exact path="/">
                <Home/> 
              </Route>
              <Route path="/Create">
                <Create/> 
              </Route>
              <Route path="/Further">
                <Further/> 
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails/>
              </Route>
              <Route path="*">
                <Notfound/>
              </Route>
            </Switch>
            {/* switch component makes sure that browser goes from top
            to bottom searching for a particular oage and when it gets that 
            the seacrh ends there if not for switch the process will go on  */}


            </div> 
        </div>
    </Router>
  );
}

export default App; // we export App so that we can use 
// this in other files too

