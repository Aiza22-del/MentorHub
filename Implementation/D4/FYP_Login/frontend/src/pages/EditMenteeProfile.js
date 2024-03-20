import React from 'react';
import { Link } from 'react-router-dom';
import "../css/classNav.css"
import "../css/ProfileFormStyle.css"
import "../css/profileFormBootstrap.css"

function EditMenteeProfile() {
  return (
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


      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light" id="ftco-navbar" >
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




      
      <div>
      <section class="book_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col">
          <form>
            <h4>
              Edit <span>Mentee Profile</span>
            </h4>
            <div class="form-row ">
              <div class="form-group col-lg-4">
                <label for="inputPatientName">Patient Name </label>
                <input type="text" class="form-control" id="inputPatientName" placeholder=""/>
              </div>
              <div class="form-group col-lg-4">
                <label for="inputDoctorName">Doctor's Name</label>
                <select name="" class="form-control wide" id="inputDoctorName">
                  <option value="Normal distribution ">Normal distribution </option>
                  <option value="Normal distribution ">Normal distribution </option>
                  <option value="Normal distribution ">Normal distribution </option>
                </select>
              </div>
              <div class="form-group col-lg-4">
                <label for="inputDepartmentName">Department's Name</label>
                <select name="" class="form-control wide" id="inputDepartmentName">
                  <option value="Normal distribution ">Normal distribution </option>
                  <option value="Normal distribution ">Normal distribution </option>
                  <option value="Normal distribution ">Normal distribution </option>
                </select>
              </div>
            </div>
            <div class="form-row ">
              <div class="form-group col-lg-4">
                <label for="inputPhone">Phone Number</label>
                <input type="number" class="form-control" id="inputPhone" placeholder="XXXXXXXXXX"/>
              </div>
              <div class="form-group col-lg-4">
                <label for="inputSymptoms">Symptoms</label>
                <input type="text" class="form-control" id="inputSymptoms" placeholder=""/>
              </div>
              <div class="form-group col-lg-4">
                <label for="inputDate">Choose Date </label>
                <div class="input-group date" id="inputDate" data-date-format="mm-dd-yyyy">
                  <input type="text" class="form-control" readonly/>
                  <span class="input-group-addon date_icon">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="btn-box">
              <button type="submit" class="btn ">Submit Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
      </div>


    </div>

    )
}

export default EditMenteeProfile;