import './styles/style.css';
import './styles/animation.css';
import './styles/adaptive.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Header from './components/Header';
import Note from './components/Note';
import Error from './components/Error';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/create" component={Create}/>
            <Route exact path="/note/" component={Note}/>
            <Route exact path="/note/:noteURL" component={Note}/>
            <Route component={Error}/>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
