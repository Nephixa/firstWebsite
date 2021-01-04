import './App.scss';
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Hero} exact/>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
