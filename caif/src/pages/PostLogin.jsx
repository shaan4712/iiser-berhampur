import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../component/Sidebar'; // Adjust path as necessary
import Navbar from '../component/Navbar'; // Adjust path as necessary
import '../css files/PostLogin.css'; // Separate CSS file for PostLogin
import ViewLab from '../component/ViewLab'; // Import ViewLab
import PastTestRecordings from '../component/PastTestRecordings'; // Adjust path as necessary
import NewReservations from '../component/NewReservations';
import FAQ from '../pages/FAQ';

const PostLogin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setSidebarOpen(false);}

  return (
    <div className="post-login">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} handleSectionChange={handleSectionChange}/>
      <div className="main-content">
        {activeSection === 'ViewLab' && <ViewLab />}
        {activeSection === 'PastTestRecordings' && <PastTestRecordings />}
        {activeSection === 'NewReservations' && <NewReservations />}
        {activeSection === 'FAQ' && <FAQ />}
        {/* Render other components based on activePage */}
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default PostLogin;