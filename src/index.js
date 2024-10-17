import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

class Customer extends React.Component {
  render() {
    return <h2> I am from {this.props.city} </h2>;
  }
}
class Details extends React.Component {
  render() {
    const cityname = "Pokhara";
    return (
      <div>
        <h2> Hello! </h2> <Customer city="Kathmandu" />
        <Customer city={cityname} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Details />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
