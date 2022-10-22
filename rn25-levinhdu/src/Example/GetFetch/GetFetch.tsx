import React, { useEffect, useState } from "react";

interface IUser{
    name:string,
    id: string
}

function GetFetch() {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    const url = "https://63528cd1a9f3f34c3740db77.mockapi.io/api/v1/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setUsers(json)
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(users);
  }, []);
  return(
    <>
    <ul>
         {users.map((user: IUser) => {
          return <li key={user.id}>{user.id} {user?.name}</li>;
        })}
      </ul>
    </>
  );
}
export default GetFetch

// import React from "react";
// import axios from "axios";

// interface IUser {
//   id: string;
//   name: string;
//   avatar: string;
// }

// function Users() {
//   const [loading, setLoading] = React.useState(true);
//   const [users, setUsers] = React.useState<IUser[]>([]);

//   React.useEffect(() => {
//     const config = {
//       method: "get",
//       url: "https://63528cd1a9f3f34c3740db77.mockapi.io/api/v1/users",
//     };

//     axios(config)
//       .then(function (response) {
//         // Save to state
//         console.log(response.data);
//         setUsers(response.data);
//         console.log(users);
//         setLoading(false);
//       })
//       .catch(function (error) {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Danh sách người dùng</h2>
//       {loading && (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//             width: "100vw",
//           }}
//         >
//           Loadding...
//         </div>
//       )}
//       <ul>
//         {users.map((user: IUser) => {
//           return <li key={user.id}>{user.id} {user?.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Users;

