import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import PhoneSystemsPage from './components/PhoneSystemsPage';
import GpsFleetManagementSoftware from './components/GpsFleetManagementSoftware';
import BestEmployeeMangementSoftware from './components/BestEmployeeMangementSoftware'
import CompareBazaarHomepage from './components/CompareBazaarHomepage'
import CareersPage from './components/CareersPage';
import BestCallCenterManagement from './components/BestCallCenterManagement';
import ContactPage from './components/Contact';
import  BestCRMSoftware from './components/BestCRMSoftware';
import EmailMarketing from './components/EmailMarketing';
import BestWebsiteBuildingPlatform from './components/BestWebsiteBuildingPlatform';
import BestProjectManagement from './components/BestProjectManagement';
import Advertise from './components/Advertise';
import EditorialProcess from './components/EditorialProcess';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse'
import Accessibility from './components/Accessibility';

// function App() {
//   return (
//     <>
//       <Home/>
//       <PhoneSystemsPage />
//     </>
//   );
// }
// export default App
//BestEmployeeMangementSoftware
//Compare Bazaar 

function App() {
  return( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/phone-systems" element={<PhoneSystemsPage />} />
        <Route path="/GpsFleetMangement" element={<GpsFleetManagementSoftware />} />
        <Route path="/BestEmployeeMangementSoftware" element={< BestEmployeeMangementSoftware/>} />
        <Route path="/Callcenter" element={<BestCallCenterManagement />} />
        <Route path="/About us" element={<CompareBazaarHomepage />} />
        <Route path="/BestCRMSoftware" element={<BestCRMSoftware />} />
        <Route path="/EmailMarketing" element={<EmailMarketing />} />
        <Route path="/Careers" element={<CareersPage />} />
        <Route path="/contact-sales" element={<ContactPage />} />
        <Route path="/BestWebsiteBuildingPlatform" element={<BestWebsiteBuildingPlatform />} />
        <Route path="/BestProjectManagement" element={<BestProjectManagement />} />
        <Route path="/Advertise" element={<Advertise />} />
        <Route path="/EditorialProcess" element={<EditorialProcess />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/Accessibility" element={<Accessibility />} />
      </Routes>
    </Router>
  )
}

export default App;