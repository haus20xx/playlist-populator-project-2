import * as React from 'react';
import './App.css';
import './include/bootstrap'

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeComponent from './components/home/home.component';
import ProfileComponent from './components/user/profile.component';
import PlaylistComponent from './components/playlist/create-playlist.component'
import SignInComponent from './components/sign-in/sign-in.component';
import RegisterComponent from './components/register/register.component';

import { AppNav} from './components/navigation/app-nav';
import { Provider } from 'react-redux';
import { store } from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            < AppNav />
            <div id ="main-content-container" >
              <Switch>
                <Route path="/profile" component={ProfileComponent} />
                <Route path="/sign-in" component={SignInComponent} />
                <Route path="/register" component={RegisterComponent} />
                <Route path="/playlist" component={PlaylistComponent} />
                <Route path="/home" component={HomeComponent} />
              </Switch>
            </div>
          </div>
        </BrowserRouter> 
      </Provider>
    );
  }
}

export default App;
