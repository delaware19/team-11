import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import "./styles.css";

class App extends React.Component ***REMOVED***
  state = ***REMOVED*** isSaving: false ***REMOVED***;
  handleOnClick = () => ***REMOVED***
    this.setState(***REMOVED*** isSaving: !this.state.isSaving ***REMOVED***);
  ***REMOVED***;

  render() ***REMOVED***
    const ***REMOVED*** isSaving ***REMOVED*** = this.state;
    return (
      <div className="App">
        <Button isSaving=***REMOVED***isSaving***REMOVED*** onClick=***REMOVED***this.handleOnClick***REMOVED*** />
      </div>
    );
  ***REMOVED***
***REMOVED***

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);