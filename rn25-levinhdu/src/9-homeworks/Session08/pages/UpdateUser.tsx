import { log } from "console";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
});

interface IUser {
  id: string;
  name: string;
}

function UpdateUser() {
  const navi = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const url =
        "https://63528cd1a9f3f34c3740db77.mockapi.io/api/v1/users/" + param.id;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        // .then((json) => {
        //   // Xử lý kết quả JSON ở đây
        //   console.log(json);
        // })
        .then(() => navi("/"))
        .catch((error) => {
          // Nếu có lỗi
          console.error(error);
        });
    },
  });
  const param = useParams();
  const [stateUser, setStateUser] = useState<IUser>({ id: "", name: "" });
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
      <form className="ms-5" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">ID User: </label>
          <input
            type="text"
            defaultValue={stateUser?.id}
            className="ms-5"
            name="id"
            disabled
          />
        </div>
        <div className="mt-3">
          <label htmlFor="">Name User: </label>
          <input
            type="text"
            defaultValue={stateUser?.name}
            className="ms-4"
            name="name"
            onChange={formik.handleChange}
          />
          <p className="text-danger">{formik.errors.name ?? null}</p>
        </div>
        <button type="submit" className="btn btn-primary mt-3 ms-5">
          Save
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
