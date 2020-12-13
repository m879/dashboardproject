import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Mygroups from './components/Mygroups';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Posts from './components/CreatePost';
import Groups from './components/Groups';
import Profile from './components/Profile';
import Settings from './components/Settings';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Dashboard} exact/>
             <Route path="/posts" component={Home} />
             <Route path="/messages" component={Posts}/>
             <Route path="/contact" component={Mygroups}/>
             <Route path="/groups" component={Groups}/>
             <Route path="/settings" component={Settings}/>
             <Route path="/profile" component={Profile}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;