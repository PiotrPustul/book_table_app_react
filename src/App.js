import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/footer/footer';
import Home from './components/Pages/Home/Home';
import Menu from './components/Pages/Menu/Menu';
import Contact from './components/Pages/Contact/Contact';
import Book from './components/Pages/BookTable/Book/Book';
import NotFound from './components/Pages/NotFound';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <header>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/contact" component={Contact} />
            <Route path="/book" component={Book} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;