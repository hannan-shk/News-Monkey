import "./App.css";

import React, {useState} from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const pageSize = 6;
  const country = "us";
  // apikey = "478c1c70f6254d8b9ba21d3d889897ba";

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={3}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={setProgress}
                // apiKey={apikey}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={setProgress}
                // apiKey={apikey}
                key="business"
                pageSize={pageSize}
                country={country}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={setProgress}
                // apiKey={apikey}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                category="entertainment"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={setProgress}
                // apiKey={apikey}
                key="technology"
                pageSize={pageSize}
                country={country}
                category="technology"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={setProgress}
                // apiKey={apikey}
                key="science"
                pageSize={pageSize}
                country={country}
                category="science"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={setProgress}
                // apiKey={apikey}
                key="health"
                pageSize={pageSize}
                country={country}
                category="health"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={setProgress}
                // apiKey={apikey}
                key="sports"
                pageSize={pageSize}
                country={country}
                category="sports"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App
