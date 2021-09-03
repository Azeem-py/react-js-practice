import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUser] = useState([]);
  const getUser = async () => {
    const resoponse = await fetch(url);
    const users = await resoponse.json();
    localStorage.setItem("usersData", users);
    setUser(users);
  };

  useEffect(() => getUser(), []);
  return (
    <>
      <h2>Github user</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="login" srcset="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
