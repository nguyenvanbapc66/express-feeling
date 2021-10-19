import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import SuccessScreen from './success-screen';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/accept" exact component={SuccessScreen} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
