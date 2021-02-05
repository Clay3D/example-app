import React from 'react';
import {Form, InputGroup} from "react-bootstrap";

const About = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 offset-md-4">
          <Form>
            <input type="text" className="form-control"/>
            <button type="button" className="mt-5 form-control btn btn-primary">Submit</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default About;
