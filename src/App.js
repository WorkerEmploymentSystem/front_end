import './App.css';
import { Container, Row } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import AdminList from './components/AdminList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import AddCustomer from './components/registration/AddCustomer';
import AddWorker from './components/registration/AddWorker';
import WorkerProfile from './components/profile/WorkerProfile';
import AddWorkDesc from './components/profile/AddWorkDesc'
import ViewProfile from './components/profile/ViewProfile';
import Register from './components/registration/register.component';
import CustomerProfile from './components/test/customerProfile.component';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/profile/" component={CustomerProfile} exact />
        <Route path="/profile/ViewProfile/:id" component={ViewProfile} exact />
        <Route path="/add-customer" component={Register} exact />
        <Route path="/add-worker" component={AddWorker} exact />
        <Route path="/view-admins" component={AdminList} exact />

        <Route path="/profile/add-work/:id" component={AddWorkDesc} exact />
        <Route path="/profile/WORKER/:id" component={WorkerProfile} exact />
        <Container>
          <Row>
            <Route path="/login" component={Login} exact />
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
