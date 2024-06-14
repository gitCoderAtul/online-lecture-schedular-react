import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { Button, Modal } from "react-bootstrap";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(false);
  let [instList, setinstList] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // use effect
  function fetchData() {
    try {
      fetch(process.env.REACT_APP_API + "/instructorList")
        .then((res) => res.json())
        .then((value) => {
          console.log(value);
          setinstList(value);
        });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    try {
      fetch(process.env.REACT_APP_API + "/instructorList")
        .then((res) => res.json())
        .then((value) => {
          console.log(value);
          setinstList(value);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
 
  return (
    <div className="container_login ">
      <div className="login_box">
        <div className="login_form">
          <h1>User Login </h1>
          <form>
            <div className="my-5">
              <label> User Name </label>
              <input
                type="text"
                placeholder="Enter User Name"
                className="form-control"
              />
              <a onClick={handleShow}>Instructor List</a>
            </div>
            <div className="my-5">
              <Link
                to="/App"
                className="btn d-flex justify-content-center btn-primary"
              >
                {" "}
                Login{" "}
              </Link>
            </div>

            <div className="my-5">
              <p className="d-block text-center">
                or <Link to="/LoginAdmin"> Login As Admin </Link>{" "}
              </p>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title> Instructor List</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <table className="table table-hover  table-bordered table-md table-responsive-sm">
                  <thead className="table-primary">
                    <tr>
                      <th style={{ width: "100px" }}>Sr No.</th>
                      <th>Instructor Name </th>
                    </tr>
                  </thead>
                  <tbody>
                    {instList &&
                      instList.length > 0 &&
                      instList.map((value, index) => (
                        <tr key={value.id}>
                          <td>{index}</td>
                          <td>{value.instructorName}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </form>
        </div>
        <div className="login_img"></div>
      </div>
    </div>
  );
}
