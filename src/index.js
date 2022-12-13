// import React from "react";
// import ReactDOM from "react-dom";
// import "react-toastify/dist/ReactToastify.css";
// import "./styles/styles.scss";

// import App from "./containers/App";

// import { Provider } from "react-redux";
// import reduxStore, { persistor } from "./redux";

// const renderApp = () => {
//   ReactDOM.render(
//     <Provider store={reduxStore}>
//       <App persistor={persistor} />
//     </Provider>,
//     document.getElementById("root")
//   );
// };

// renderApp();
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
import React, { Component } from 'react';
import { render } from 'react-dom';
// import Hello from './containers/MapCpm/Hello.js'
// import MarkerWithLabel from './MarkerWithLabel';
// import ControllZoom from './ControlledZoom';
import InfoWindow from './containers/MapCpm//InfoWindow';
// import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <InfoWindow />
        <p>
          Start editing to see some magic happen :
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
