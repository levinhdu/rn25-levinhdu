import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}

function Detail() {
  const param = useParams();
  const [stateUser, setStateUser] = useState<IUser>();
  useEffect(() => {
    const url =
      "https://63528cd1a9f3f34c3740db77.mockapi.io/api/v1/users/" + param.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((user) => setStateUser(user))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="ms-5">
      <h4>ID User: {stateUser?.id}</h4>
      <h4>Name User: {stateUser?.name}</h4>
    </div>
  );
}

export default Detail;
