import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/Home';

import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';
import FormPage from './pages/SignInSignUpForm';

import MentorDashboard from './pages/MentorDashboard';
import MenteeDashboard from './pages/MenteeDashboard';

import MentorProfile from './pages/MentorProfile'; 
import EditMentorProfile from './pages/EditMentorProfile'; 

import MenteeProfile from './pages/MenteeProfile'; 
import EditMenteeProfile from './pages/EditMenteeProfile'; 

import MentorInsightHub from './pages/MentorInsight'; 
import AdviceList from './pages/AdviceList'; 
import EditAdvice from './pages/EditAdvice'; 
import SearchAdvice from './pages/SearchAdvice'; 

import SearchMentor from './pages/SearchMentor'; 



const router = createBrowserRouter([
  { path: '/', element: <HomePage />},
  { path: '/HomePage', element: <HomePage />},
  
  { path: '/SignUp', element: <SignUpPage />},
  { path: '/SignIn', element: <SignInPage />},
  { path: '/SignInSignUpForm', element: <FormPage />},

  { path: '/MentorDashboard', element: <MentorDashboard />},
  { path: '/MenteeDashboard', element: <MenteeDashboard />},

  { path: '/MentorProfile', element: <MentorProfile />},
  { path: '/EditMentorProfile', element: <EditMentorProfile />},

  { path: '/MenteeProfile', element: <MenteeProfile />},
  { path: '/EditMenteeProfile', element: <EditMenteeProfile />},

  { path: '/MentorInsightHub', element: <MentorInsightHub />},
  { path: '/AdviceList', element: <AdviceList />},
  { path: '/EditAdvice', element: <EditAdvice />},
  { path: '/SearchAdvice', element: <SearchAdvice />},

  { path: '/SearchMentor', element: <SearchMentor />}



])

function App() {
  return <RouterProvider router={router} />;
}
export default App;
