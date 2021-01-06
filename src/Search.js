import React from "react";
import "./Search.css";
import { Form, Button } from "react-bootstrap";

export default function Search() {
  return (
    <Form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a City...:)"
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary"
          ></input>
        </div>{" "}
      </div>
    </Form>
  );
}
