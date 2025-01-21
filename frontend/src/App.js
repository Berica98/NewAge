import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import GroupDiscussion from "./pages/GroupDiscussion";
import ExerciseGathering from "./pages/ExerciseGathering";
import PrincipalOffice from "./pages/PrincipalOffice";
import AwardNigeria from "./pages/AwardNigeria";
import ExcursionOutdoor from "./pages/ExcursionOutdoor";
import StudentCounselor from "./pages/StudentCounselor";

// Admin and Student Pages
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import StudentList from "./pages/StudentList";
import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";

// Components for additional dashboards
import StudentDashboard from "./components/StudentDashboard";
import ParentDashboard from "./components/ParentDashboard";
import TeacherDashboard from "./components/TeacherDashboard";
import CounselorDashboard from "./components/CounselorDashboard";
import PrincipalDashboard from "./components/PrincipalDashboard";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
            {/* Page Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/group-discussion" element={<GroupDiscussion />} />
            <Route path="/exercise-gathering" element={<ExerciseGathering />} />
            <Route path="/principal-office" element={<PrincipalOffice />} />
            <Route path="/award" element={<AwardNigeria />} />
            <Route path="/excursion" element={<ExcursionOutdoor />} />
            <Route path="/student-counselor" element={<StudentCounselor />} />

            {/* Admin and Student Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin/students" element={<StudentList />} />
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/student/register" element={<StudentRegister />} />

            {/* Dashboard Routes */}
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/parent" element={<ParentDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/counselor" element={<CounselorDashboard />} />
            <Route path="/principal" element={<PrincipalDashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
