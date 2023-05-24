import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [details, setDetails] = useState({
    studentAddress: "",
    studentEmail: "",
    studentName: "",
  });
  const [fetchedData, setFetchedData] = useState([]);
  const [updateDetails, setUpdatedetails] = useState({
    Id: "",
    studentEmail: "",
  });
  const create = async () => {
    axios
      .post("http://localhost:8080/api/students", details)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err.data);
      });
  };

  const fetchData = async () => {
    axios.get("http://localhost:8080/api/students").then(function (response) {
      setFetchedData(response.data);
      console.log(response.data);
    });
  };
  console.log(updateDetails.Id + " " + updateDetails.studentEmail);
  const updateData = async () => {
    axios
      .put(
        "http://localhost:8080/api/students/update_email/" + updateDetails.Id,
        updateDetails.studentEmail,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err.data);
      });
  };
  return (
    <div
      style={{ backgroundColor: "white", height: "100vh", margin: "0px" }}
      className="App"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>CREATE OPERATION</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <label>Enter Student's address :</label>
          <input
            style={{ margin: "10px" }}
            value={details.studentAddress}
            onChange={(e) => {
              setDetails((prev) => ({
                ...prev,
                studentAddress: e.target.value,
              }));
            }}
          ></input>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <label>Enter student's Email :</label>
          <input
            style={{ margin: "10px" }}
            value={details.studentEmail}
            onChange={(e) => {
              setDetails((prev) => ({ ...prev, studentEmail: e.target.value }));
            }}
          ></input>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <label>Enter student name :</label>
          <input
            style={{ margin: "10px" }}
            value={details.studentName}
            onChange={(e) => {
              setDetails((prev) => ({ ...prev, studentName: e.target.value }));
            }}
          ></input>
        </div>

        <button
          style={{
            border: "2px solid black",
            backgroundColor: "#7f8274",
            color: "white",
            padding: "5px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          onClick={create}
        >
          Add Student
        </button>
        <h1>UPDATE STUDENT'S EMAIL</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <label>Enter student ID :</label>
          <input
            style={{ margin: "10px" }}
            value={updateDetails.Id}
            onChange={(e) => {
              setUpdatedetails((prev) => ({ ...prev, Id: e.target.value }));
            }}
          ></input>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <label>Enter student's updated Email :</label>
          <input
            style={{ margin: "10px" }}
            value={updateDetails.studentEmail}
            onChange={(e) => {
              setUpdatedetails((prev) => ({
                ...prev,
                studentEmail: e.target.value,
              }));
            }}
          ></input>
        </div>
        <button
          style={{
            border: "2px solid black",
            backgroundColor: "#7f8274",
            color: "white",
            padding: "5px",
            borderRadius: "3px",
            cursor: "pointer",
            margin: "10px",
          }}
          onClick={updateData}
        >
          Update
        </button>
        <button
          style={{
            border: "2px solid black",
            backgroundColor: "#7f8274",
            color: "white",
            padding: "5px",
            borderRadius: "3px",
            cursor: "pointer",
            margin: "10px",
          }}
          onClick={fetchData}
        >
          Show all
        </button>
      </div>
      {/* {fetchedData.map((item, id) => (
        <div>
          
        </div>
      ))} */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>FETCHED DETAILS</h1>

        {fetchedData.map((item) => (
          <div key={item.id}>
            <p>Student id : {item.id}</p>
            <p>Student name : {item.studentName}</p>
            <p>Student Email :{item.studentEmail}</p>
            <p>Student Address :{item.studentAddress}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
