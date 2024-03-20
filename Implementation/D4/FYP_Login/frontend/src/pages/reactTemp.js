import React, { useState } from 'react';

import "../css/argon-dashboard-react.css"
import "../css/argon-dashboard-react.min.css"
import "../css/style.css"
import { Link } from 'react-router-dom';
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";
  // core components
  import UserHeader from "../components/Headers/UserHeader.js";
  
  const MentorInsightHub = () => {
    const [adviceTitle, setAdviceTitle] = useState('Hardcoded Title');
    const [problemStatement, setProblemStatement] = useState('Hardcoded Problem Statement');
    const [solution, setSolution] = useState('Hardcoded Solution');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle submission logic here
      console.log('Submitted:', adviceTitle, problemStatement, solution);
    };
  
    return (
      <>
<UserHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            {/* Mentor Profile Card - Unchanged */}
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Mentor Insight</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit} className="mx-auto"> {/* Apply mx-auto class for horizontal centering */}
                  <h6 className="heading-small text-muted mb-4">
                    Mentor Advice
                  </h6>
                  <div className="pl-lg-4">
                    
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="title">
                              Advice Title
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="title"
                              placeholder="Enter advice title"
                              type="text"
                              value={adviceTitle}
                              onChange={(e) => setAdviceTitle(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="problemStatement"
                            >
                              Problem Statement
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="problemStatement"
                              placeholder="Enter problem statement"
                              type="textarea"
                              rows="4"
                              value={problemStatement}
                              onChange={(e) => setProblemStatement(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="solution"
                            >
                              Solution
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="solution"
                              placeholder="Enter solution"
                              type="textarea"
                              rows="4"
                              value={solution}
                              onChange={(e) => setSolution(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Submit Button */}
                    <div className="text-right">
                      <Button color="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default MentorInsightHub;