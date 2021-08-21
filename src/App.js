import './App.css';
import Home from './components/admin/pages/Home';
import AddUser from './components/admin/pages/AddUser';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addUser" component={AddUser} />
          <Route path="/editUser/:id" component={AddUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
