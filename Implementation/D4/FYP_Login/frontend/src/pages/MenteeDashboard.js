import React from 'react';
import { Link } from 'react-router-dom';
import "../css/classNav.css";
import "../css/dashboard/css/linearicons.css";
import "../css/dashboard/css/font-awesome.min.css";
import "../css/dashboard/css/bootstrap.css";
import "../css/dashboard/css/magnific-popup.css";
import "../css/dashboard/css/nice-select.css";
import "../css/dashboard/css/animate.min.css";

import "../css/dashboard/css/main.css";



function MenteeDashboard() {
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
                  <li className="nav-item active"><Link to="/MenteeDashboard" className="nav-link">Dashboard</Link></li>
                  <li className="nav-item"><Link to="/SearchMentor" className="nav-link">Search Mentor</Link></li>
                  <li className="nav-item"><Link to="/SearchAdvice" className="nav-link">Mentor Insight</Link></li>
                  <li className="nav-item"><a href="top-seller.html" className="nav-link">Chat</a></li>
                  <li className="nav-item"><a href="book.html" className="nav-link">Payment</a></li>
                  <li className="nav-item"><Link to="/MenteeProfile" className="nav-link">Profile</Link></li>
                  <li className="nav-item"><a href="blog.html" className="nav-link">Notification</a></li>
                  <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>




      <section className="banner-area relative section-gap" id="home">
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row fullscreen d-flex align-items-center justify-content-between">
            <div className="banner-content col-lg-9 col-md-12">
              <h1 className="text-uppercase">
                We Ensure better education
                for a better world
              </h1>
              <p className="pt-10 pb-10 " style={{ color: 'white' }}>
  In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.
</p>
<div className='section-gap-small'></div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-area ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-feature">
                <div className="title">
                  <h4>Learn Online Courses</h4>
                </div>
                <div className="desc-wrap">
                  <p>
                    Usage of the Internet is becoming more common due to rapid advancement
                    of technology.
                  </p>
                  <a href="#">Join Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-feature">
                <div className="title">
                  <h4>No.1 of universities</h4>
                </div>
                <div className="desc-wrap">
                  <p>
                    For many of us, our very first experience of learning about the celestial bodies begins when we saw our first.
                  </p>
                  <a href="#">Join Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-feature">
                <div className="title">
                  <h4>Huge Library</h4>
                </div>
                <div className="desc-wrap">
                  <p>
                    If you are a serious astronomy fanatic like a lot of us are, you can probably remember that one event.
                  </p>
                  <a href="#">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-event-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Upcoming Events of our Institute</h1>
                <p>If you are a serious astronomy fanatic like a lot of us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MenteeDashboard;
