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
  //import UserHeader from "../components/Headers/UserHeader.js";
  
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
      <div className="navStyle">
        <div className="container-fluid px-md-5 pt-4 pt-md-5">
          <div className="row justify-content-between">
            <div className="col-md-8 order-md-last">
              <div className="row">
                <div className="col-md-6 text-center">
                  <a className="navbar-brand" href="index.html">MentorHub</a>
                </div>
                <div className="col-md-6 text-center">
                  <Link className="navbar-brand" to="/HomePage"><small>HOME</small></Link>
                  <a className="navbar-brand" href="index.html"><small>ABOUT</small></a>
                  <a className="navbar-brand" href="index.html"><small>SERVICE</small></a>
                  <a className="navbar-brand" href="index.html"><small>TESTIMONIAL</small></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff' }}>
          <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars"></span> Menu
              </button>
              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item active"><Link to="/MentorDashboard" className="nav-link">Dashboard</Link></li>
                  <li className="nav-item"><Link to="/SearchMentor" className="nav-link">Search Mentor</Link></li>
                  <li className="nav-item"><Link to="/SearchAdvice" className="nav-link">Mentor Insight</Link></li>
                  <li className="nav-item"><a href="top-seller.html" className="nav-link">Chat</a></li>
                  <li className="nav-item"><a href="book.html" className="nav-link">Payment</a></li>
                  <li className="nav-item"><Link to="/MentorProfile" className="nav-link">Profile</Link></li>
                  <li className="nav-item"><a href="blog.html" className="nav-link">Notification</a></li>
                  <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>




      {/*
<UserHeader />*/}





<div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("../images/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello Jesse</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
              <Button color="info">
  <Link to="/EditAdvice" >
    Edit profile
  </Link>
</Button>

            </Col>
          </Row>
        </Container>
      </div>





        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../images/team-4-800x800.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody>
              </Card>
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