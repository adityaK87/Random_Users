import axios from "axios";
import React, { useState, useEffect } from "react";
import "./css/index.css";
import Header from "./Header";
import UserList from "./UserList";

const FunctionalBasedApp = () => {
  const [userData, setUserData] = useState({
    isLoading: false,
    // page: 0,
    errMessage: " ",
  });
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      // const { page, } = userData;
      try {
        setUserData({ ...userData, isLoading: true });
        let response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=10`
        );
        setUsers((users) => [...users, ...response.data.results]);
        console.log(response.data.results);
        console.log(response.data);
      } catch (error) {
        setUserData({
          ...userData,
          errMessage: "Error while loading data. Try again later.",
        });
      } finally {
        setUserData({ ...userData, isLoading: false });
      }
    };
    loadUser();
    // eslint-disable-next-line
  }, [page]);



  const loadMore = () => {
    // setUserData({ ...userData, page: userData.page + 1 });
    setPage((page) => page + 1)
  };

  return (
    <>
      <div className="app-container">
        <Header heading="Random_Users" />
      </div>
      {userData.errMessage && <p>{userData.errMessage}</p>}
      <UserList users={users} />
      <button className="btn" onClick={loadMore}>
        {userData.isLoading ? "Loading..." : "Lode More"}
      </button>
    </>
  );
};

export default FunctionalBasedApp;
