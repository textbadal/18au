import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Import App component
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Internship from './pages/internship'; // Corrected to use uppercase
import Services from './pages/Services'; // Correct import statement
import Jobs from './pages/Jobs';
import Courses from './pages/Courses';

import Enrollment from './pages/Enrollment';
import ThankYou from './pages/ThankYou'; // Correct import path for ThankYou
import CertificateVerification from './pages/CertificateVerification';
import CertificateDetails from './components/CertificateDetails';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Enroll from './pages/enroll';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import ReferralProgram from './pages/ReferralProgram';
import Report from './pages/Report';



import WebDevelopmentCourse from './pages/course-details/WebDevelopmentCourse';
import Revit from './pages/course-details/Revit';
import SCADA from './pages/course-details/SCADA';




import Law from './pages/Internship/Law';
import BE from './pages/Internship/BE';
import BCA from './pages/Internship/BCA';
import BBA from './pages/Internship/BBA';
import BCom from './pages/Internship/BCom';
import BA from './pages/Internship/BA';
import Pharmacy from './pages/Internship/Pharmacy';
import Medical from './pages/Internship/Medical';
import Architecture from './pages/Internship/Architecture';
import Hospitality from './pages/Internship/Hospitality';
import Media from './pages/Internship/Media';
import Psychology from './pages/Internship/Psychology';
import Agriculture from './pages/Internship/Agriculture';





// Job pages (Make sure these files exist)
import Architectural from './pages/jobs/Architectural';
import Developer from './pages/jobs/Developer';
import Marketing from './pages/jobs/Marketing';
import Hr from './pages/jobs/Hr';
import ContentWriting from './pages/jobs/ContentWriting';
import GraphicDesign from './pages/jobs/GraphicDesign';

import WebDevelopment from './pages/courses/WebDevelopment';
import PythonProgramming from './pages/courses/PythonProgramming';
import DigitalMarketing from './pages/courses/DigitalMarketing';
import MachineLearning from './pages/courses/MachineLearning';
import AdvancedExcel from './pages/courses/AdvancedExcel';
import AutoCAD from './pages/courses/AutoCAD';
import DataScience from './pages/courses/DataScience';
import CCPPProgramming from './pages/courses/CCPPProgramming';

import FullStackDevelopment from './pages/courses/FullStackDevelopment';
import CyberSecurity from './pages/courses/CyberSecurity';
import HRManagement from './pages/courses/HRManagement';
import ElectricVehicle from './pages/courses/ElectricVehicle';
import UIUXDesign from './pages/courses/UIUXDesign';
import ProductManagement from './pages/courses/ProductManagement';
import FinancialModelling from './pages/courses/FinancialModelling';
import SupplyChainLogistics from './pages/courses/SupplyChainLogistics';

import Donation from './components/Donation';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="internship" element={<Internship />} />
      

        <Route path="services" element={<Services />} /> {/* Updated to match the correct component */}
        <Route path="Jobs" element={<Jobs />} /> {/* Updated to match the correct component */}

        <Route path="courses" element={<Courses />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="certificate-verification" element={<CertificateVerification />} />
        <Route path="/details" element={<CertificateDetails />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      
        <Route path="enroll" element={<Enroll />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="ReferralProgram" element={<ReferralProgram />} />
        <Route path="Report" element={<Report />} />



        <Route path="/course-details/web-development" element={<WebDevelopmentCourse />} />
        <Route path="/course-details/revit" element={<Revit />} />
        <Route path="/course-details/scada" element={<SCADA />} />



        <Route path="internship/law" element={<Law />} /> 
        <Route path="/internship/BE/BTech/MTech" element={<BE />} /> 
        <Route path="/internship/BCA/MCA" element={<BCA />} /> 
        <Route path="/internship/BBA/MBA" element={<BBA />} /> 
        <Route path="/internship/BCom/MCom" element={<BCom />} /> 
        <Route path="/internship/BA/MA/BSc/MSc" element={<BA />} /> 
        <Route path="/internship/Pharmacy" element={<Pharmacy />} /> 
        <Route path="/internship/Medical" element={<Medical />} /> 
        <Route path="/internship/Architecture" element={<Architecture />} /> 
        <Route path="/internship/Hospitality and Tourism" element={<Hospitality />} /> 
        <Route path="/internship/Media and Journalism" element={<Media />} /> 
        <Route path="/internship/Psychology" element={<Psychology />} /> 
        <Route path="/internship/Agriculture" element={<Agriculture />} /> 





       
     
        {/* Job Routes */}
        <Route path="/jobs/Architectural Jobs" element={<Architectural />} />
        <Route path="/jobs/Developer Jobs" element={<Developer />} />
        <Route path="/jobs/Marketing jobs" element={<Marketing />} />
        <Route path="/jobs/Hr Jobs" element={<Hr />} />
        <Route path="/jobs/Content Writing Jobs" element={<ContentWriting />} />
        <Route path="/jobs/Graphic Design Jobs" element={<GraphicDesign />} />

        <Route path="/courses/WebDevelopment" element={<WebDevelopment />} />
      <Route path="/courses/PythonProgramming" element={<PythonProgramming />} />
      <Route path="/courses/DigitalMarketing" element={<DigitalMarketing />} />
      <Route path="/courses/MachineLearning" element={<MachineLearning />} />
      <Route path="/courses/AdvancedExcel" element={<AdvancedExcel />} />
      <Route path="/courses/AutoCAD" element={<AutoCAD />} />
      <Route path="/courses/DataScience" element={<DataScience />} />
      <Route path="/courses/CCPPProgramming" element={<CCPPProgramming />} />

      <Route path="/courses/FullStackDevelopment" element={<FullStackDevelopment />} />
      <Route path="/courses/CyberSecurity" element={<CyberSecurity />} />
      <Route path="/courses/HRManagement" element={<HRManagement />} />
      <Route path="/courses/ElectricVehicle" element={<ElectricVehicle />} />
      <Route path="/courses/UIUXDesign" element={<UIUXDesign />} />
      <Route path="/courses/ProductManagement" element={<ProductManagement />} />
      <Route path="/courses/FinancialModelling" element={<FinancialModelling />} />
      <Route path="/courses/SupplyChainLogistics" element={<SupplyChainLogistics />} />
      <Route path="donation" element={<Donation />} />


      </Route>
    </Routes>
  </Router>
);
