import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import FinishedBooks from "./pages/FinishedBooks";
import ReadingList from "./pages/ReadingList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Discover} />
        <Route path="/reading" component={ReadingList} />
        <Route path="/finish" component={FinishedBooks} />
      </Switch>
    </Router>
  );
}

export default App;
