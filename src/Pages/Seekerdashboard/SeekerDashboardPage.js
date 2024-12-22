import React, { useState } from "react";
import StatsWidget from "../../components/seekerdashboard/StatsWidget";

const SeekerDashboardPage = () => {
  const userStats = {
    appliedJobs: 3,
    savedJobs: 17,
    interviewSchedule: 8,
  };

  const userProfile = {
    fullName: "User",
    email: "user@example.com",
    contactNumber: "12345678",
    portfolioURL: "https://portfolio.example.com",
    location: "Thimphu",
    resume: "resume.pdf", // Placeholder for the resume file
    profilePicture: "https://via.placeholder.com/150", // Replace with actual profile picture URL
  };

  const applications = [
    { company: "Gojek", applied: true, selection: true, interview: "Waiting", hired: "Rejected" },
    { company: "Medium", applied: true, selection: true, interview: "Waiting", hired: "" },
    { company: "Notion", applied: true, selection: true, interview: "Done", hired: "Hired" },
  ];

  const savedJobs = [
    { title: "Frontend Developer", company: "Tech Corp", location: "Thimphu" },
    { title: "Backend Developer", company: "CodeWorks", location: "Paro" },
    { title: "UI/UX Designer", company: "Creative Minds", location: "Punakha" },
  ];

  const [activeSection, setActiveSection] = useState("Dashboard");

  const renderContent = () => {
    if (activeSection === "My Applications") {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-5">My Applications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-gray-50 rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="border-b p-3">Company</th>
                  <th className="border-b p-3">Applied</th>
                  <th className="border-b p-3">Selection</th>
                  <th className="border-b p-3">Interview</th>
                  <th className="border-b p-3">Hired</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border-b p-3 text-gray-800">{app.company}</td>
                    <td className="border-b p-3 text-center">{app.applied ? "✔️" : ""}</td>
                    <td className="border-b p-3 text-center">{app.selection ? "✔️" : ""}</td>
                    <td className="border-b p-3 text-center">
                      {app.hired === "Rejected" || app.hired === "Hired" ? "Done" : app.interview || "-"}
                    </td>
                    <td className="border-b p-3 text-center">{app.hired || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activeSection === "Schedule Interview") {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-5">Scheduled Interviews</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-gray-50 rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="border-b p-3">Company</th>
                  <th className="border-b p-3">Interview Status</th>
                </tr>
              </thead>
              <tbody>
                {applications
                  .filter((app) => app.interview === "Waiting" && !["Rejected", "Hired"].includes(app.hired))
                  .map((app, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border-b p-3 text-gray-800">{app.company}</td>
                      <td className="border-b p-3 text-center">{app.interview}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activeSection === "Bookmark") {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-5">Saved Jobs</h2>
          <div className="grid grid-cols-1 gap-4">
            {savedJobs.map((job, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md">
                <h3 className="text-md font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeSection === "Profile") {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-5">Profile Details</h2>
          <div className="space-y-4">
            <div>
              <strong>Full Name:</strong> {userProfile.fullName}
            </div>
            <div>
              <strong>Email:</strong> {userProfile.email}
            </div>
            <div>
              <strong>Contact Number:</strong> {userProfile.contactNumber}
            </div>
            <div>
              <strong>Portfolio URL:</strong> <a href={userProfile.portfolioURL} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{userProfile.portfolioURL}</a>
            </div>
            <div>
              <strong>Location:</strong> {userProfile.location}
            </div>
            <div>
              <strong>Resume:</strong> <a href={`/${userProfile.resume}`} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <StatsWidget title="Applied Jobs" count={userStats.appliedJobs} />
          <StatsWidget title="Preferred Jobs" count={userStats.savedJobs} />
          <StatsWidget title="Interview Schedule" count={userStats.interviewSchedule} />
        </div>

        {/* Profile Views Chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">Profile Views</h2>
          <div className="h-40 bg-gray-200 rounded-md">[Chart Placeholder]</div>
        </div>
      </>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-lg font-bold">JobBoard Bhutan</div>
        <nav className="mt-6">
          <ul>
            <li
              className={`p-4 hover:bg-gray-100 cursor-pointer ${
                activeSection === "Dashboard" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSection("Dashboard")}
            >
              Dashboard
            </li>
            <li
              className={`p-4 hover:bg-gray-100 cursor-pointer ${
                activeSection === "My Applications" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSection("My Applications")}
            >
              My Applications
            </li>
            <li
              className={`p-4 hover:bg-gray-100 cursor-pointer ${
                activeSection === "Schedule Interview" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSection("Schedule Interview")}
            >
              Schedule Interview
            </li>
            <li className="p-4 hover:bg-gray-100 cursor-pointer">Discover</li>
            <li
              className={`p-4 hover:bg-gray-100 cursor-pointer ${
                activeSection === "Bookmark" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSection("Bookmark")}
            >
              Bookmark
            </li>
            <li
              className={`p-4 hover:bg-gray-100 cursor-pointer ${
                activeSection === "Profile" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSection("Profile")}
            >
              Profile
            </li>
            <li className="p-4 hover:bg-gray-100 cursor-pointer">Help Center</li>
            <li className="p-4 hover:bg-gray-100 cursor-pointer">Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Welcome user!</h1>
          <div className="flex items-center">
            <img
              src={userProfile.profilePicture}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="font-medium">{userProfile.fullName}</span>
          </div>
        </div>

        {renderContent()}
      </main>
    </div>
  );
};

export default SeekerDashboardPage;
