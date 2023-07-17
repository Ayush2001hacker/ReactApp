import "./App.css";
//import { Button } from "./MyComponents";
//import { useState } from "react";
import * as React from "react";
//import Employees from "./Employees/Employees";
//import { Button, Box } from "@mui/material";
import LoginPage from "./Login_Page/Login_Page";
//import { TextField } from "./MyComponents/TextField";
export default function App() {
  // const [employees, setEmployees] = useState();

  // const getEmployees = async (count) => {
  //   const response = await fetch(
  //     `https://dummy.restapiexample.com/api/v1/employee/${count}`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   setEmployees(data.data);
  // };

  return (
    <div>
      <LoginPage />
    </div>
  );
}
