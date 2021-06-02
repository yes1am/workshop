import React from "react";
import { Router } from "../react-router";
import { createHashHistory as createHistory } from "../history";

/**
 * The public API for a <Router> that uses window.location.hash.
 */
class HashRouter extends React.Component {
  history = createHistory(this.props);

  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}

export default HashRouter;
