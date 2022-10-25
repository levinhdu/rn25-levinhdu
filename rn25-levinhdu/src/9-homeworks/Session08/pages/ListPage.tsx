import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}


function ListPage() {
  const navi = useNavigate();
  const [sateListUsers, setSateListUsers] = useState<IUser[]>([]);
  const [del, setDel] = useState(false);
  const [idDel, setIdDel] = useState("")
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
    // console.log(id);
    navi("/detail/" + id);
  };

  const gotoUpdate = (id: string) => {
    // console.log(id);
    navi("/updateUser/" + id);
  };

  const handleDelete = (id: string) => {
    const url =
      "https://63528cd1a9f3f34c3740db77.mockapi.io/api/v1/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log("DELETE: ", json);
        handleClose()
        getListUsersAPI();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleModal = (id: string) => {
    setDel(true);
    setIdDel(id)
  };

  const handleClose = () => {
    setDel(false);
  };

  return (
    <>
      <div
        className="modal"
        tabIndex={-1}
        style={{
          display: del === true ? "block" : "none",
          backgroundColor: "rgba(135,135,135,0.5)",
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete User</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete the user?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(idDel)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-dark table-striped text-center">
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
                  className="btn btn-primary ms-2"
                  onClick={() => gotoUpdate(user.id)}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-danger ms-2"
                  // onClick={() => handleDelete(user.id)}
                  onClick={() =>handleModal(user.id)}
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
