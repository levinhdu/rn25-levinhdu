import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
});

function InputCustom() {
  const navi = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
    },

    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // console.log(values);
      const url = "https://63528cd1a9f3f34c3740db77.mockapi.io/api/v1/users";
      fetch(url, {
        method: "POST",
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
        .then(()=> navi("/"))
        .catch((error) => {
          // Nếu có lỗi
          console.error(error);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='container mt-3'>
      <div>
        <label htmlFor="" className="me-5">Name User:</label>
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">{formik.errors.name ?? null}</p>
      </div>
      <button type="submit" className="btn btn-info ms-5">CREATE</button>
    </form>
  );
}

export default InputCustom;
