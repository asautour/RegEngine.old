import React from "react";
import Sidebar from "react-sidebar";
import MenuBar from "./menubar";
import SidebarContent from "./sidebar";
import MainContent from "./main-content";

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  content: {
    padding: "16px"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30
    };

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this);
    this.renderPropNumber = this.renderPropNumber.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
  }

  onSetOpen(open) {
    this.setState({ open: open });
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  }

  renderPropCheckbox(prop) {
    const toggleMethod = ev => {
      const newState = {};
      newState[prop] = ev.target.checked;
      this.setState(newState);
    };

    return (
      <p key={prop}>
        <input
          type="checkbox"
          onChange={toggleMethod}
          checked={this.state[prop]}
          id={prop}
        />
        <label htmlFor={prop}> {prop}</label>
      </p>
    );
  }

  renderPropNumber(prop) {
    const setMethod = ev => {
      const newState = {};
      newState[prop] = parseInt(ev.target.value, 10);
      this.setState(newState);
    };

    return (
      <p key={prop}>
        {prop}{" "}
        <input type="number" onChange={setMethod} value={this.state[prop]} />
      </p>
    );
  }

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a
            onClick={this.menuButtonClick}
            href="#"
            style={styles.contentHeaderMenuLink}
          >
            =
          </a>
        )}
        <span> RegAnalysis</span>
      </span>
    );

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      sidebarClassName: "custom-sidebar-class",
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen
    };

    return (
      <Sidebar {...sidebarProps}>
        <MenuBar title={contentHeader}>
          
          <div style={styles.content}>
            <p>
              React Sidebar is a sidebar component for React. It offers the
              following features:
            </p>
            <p>
              <a href="https://github.com/balloob/react-sidebar#installation">
                Instructions how to get started.
              </a>
            </p>
            <p>
              <b>Current rendered sidebar properties:</b>
            </p>
            {[
              "open",
              "docked",
              "transitions",
              "touch",
              "shadow",
              "pullRight"
            ].map(this.renderPropCheckbox)}
            {["touchHandleWidth", "dragToggleDistance"].map(
              this.renderPropNumber
            )}
          </div>
        </MenuBar>
      </Sidebar>
    );
  }
}

export default App;
