import React, { Component } from "react";
import "./css/index.css";
import Header from "./Header";
import axios from "axios";
import UserList from "./UserList";
// import User from "./User";

class App extends Component {
  state = {
    users: [],
    isLoading: false,
    errMessage: " ",
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(`https://randomuser.me/api/?page=0&results=10`)
      .then((res) => {
        console.log(res.data.results);
        this.setState({ users: res.data.results });
      })
      .catch((error) =>
        this.setState({
          errorMsg: "Error while loading data. Try again later.",
        })
      )
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { users, isLoading, errMessage } = this.state;
    return (
      <>
        <div className="app-container">
          <Header heading="Random_Users" />
        </div>
        {isLoading && <p className="loader">Loading...</p>}
        {errMessage && <p>{errMessage}</p>}
        <UserList users={users} />
      </>
    );
  }
}

export default App;
