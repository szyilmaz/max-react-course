import { Route, Switch } from 'react-router-dom';
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';


function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/"><AllMeetupsPage /></Route>
        <Route path="/new-meetup"><NewMeetup /></Route>
        <Route path="/favorites"><Favorites /></Route>
      </Switch>
    </Layout>
  );
}

export default App;
