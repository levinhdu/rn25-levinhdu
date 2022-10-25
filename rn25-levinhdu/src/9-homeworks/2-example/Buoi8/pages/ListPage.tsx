import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}

function ListPage() {
  const navi = useNavigate();
  const [sateListUsers, setSateListUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getListUsersAPI();
  }, []);
  const getListUsersAPI = () => {
    const url = "https://63528cd1a9f3f34c3740db77.mockapi.io/api/v1/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setSateListUsers(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const gotoDetail = (id: string) => {
    // console.log(id)
    navi("/detail/" + id);
  };

  const handleDelete = (id: string) => {
    const url =
      "https://63528cd1a9f3f34c3740db77.mockapi.io/api/v1/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("DELETE: ", json);
        getListUsersAPI();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <table className="table container table-dark table-striped text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {sateListUsers?.map((user: IUser) => (
            <tr key={`item-user-${user.id}`}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => gotoDetail(user.id)}
                >
                  Detail
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListPage;
