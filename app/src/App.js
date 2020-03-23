import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Projects from './components/projects';
import Project from './components/project';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route
          exact path = '/'
          render = {
            props => {
              return (
                <>
                  <h1>Get your hand dirty!</h1>
                  <Projects
                    {...props} 
                  />
                </>
          )}}
      />
       <Route
          exact path = '/details'
          render = {
            props => {
              return (
                <>
                  <Project
                    {...props}
                  />
                </>
          )}}
      />
      
      </Switch>
    </div>
  );
}

export default App;
