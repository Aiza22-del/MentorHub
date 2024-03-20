import {Link} from 'react-router-dom';

function HomePage() {
    return<div>
        <h2>Home Welcome</h2>
        <Link to="/SignInSignUpForm">Form</Link>
        <br></br>
        <Link to="/MentorDashboard">Mentor Dashboard</Link>
        <br></br>
        <Link to="/MenteeDashboard">Mentee Dashboard</Link>
        <br></br>
        <Link to="/MentorInsightHub">MentorInsightHub</Link>
        <br></br>
    </div>

}
export default HomePage;