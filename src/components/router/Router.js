import React, { Component } from 'react';

// Calculate route
const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
};

export class Router extends Component {
    // Property intialiser syntax
    state = {
      route: getCurrentPath()
    }

    handleLinkClick = (route) => {
        this.setState({route});
        history.pushState(null, '', route)
    }

    static childContextTypes = {
      route: React.PropTypes.string,
      linkHandler: React.PropTypes.func
    }

    getChildContext = () => {
      return {
        route: this.state.route,
        linkHandler: this.handleLinkClick
      }
    }

    // fires when the browser's back and forward btns are clicked
    componentDidMount() {
        window.onpopstate = () => {
          this.setState({route: getCurrentPath()})
        }
    }

    render() {
      return <div>{this.props.children}</div>
    }
}
