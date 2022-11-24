import React from "react";
import "./css/index.css";

const User = ({ user }) => {
  console.log(user);
  console.log(user.location.country);
  return (
    <div>
      {user && (
        <div className="user-container">
          <img
            src={user.picture.large}
            alt={user.name.first + " " + user.name.last}
            className="user-picture"
          />
          <div>
            <p>
              <strong>Name : </strong>
              {user.name.first + " " + user.name.last}{" "}
            </p>
            <p>
              <strong>Coutry : </strong>
              {user.location.country}{" "}
            </p>
            <p>
              <strong>Email : </strong>
              {user.email}
            </p>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default User;
