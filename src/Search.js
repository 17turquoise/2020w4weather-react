import React from "react";
import "./Search.css";
import { Form, Button } from "react-bootstrap";

export default function Search() {
  return (
    <Form>
      <label>
        <input type="text" name="name" placeholder="Enter a City...:)" />
      </label>
      <Button type="submit">Search</Button>
    </Form>
  );
}
