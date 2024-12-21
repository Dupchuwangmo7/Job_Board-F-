import React from 'react';

const AboutPage = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-blue-50 via-gray-100 to-blue-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-8 px-6">
          <h1 className="text-4xl font-extrabold text-center">About Job Board Bhutan</h1>
        </header>
        <main className="p-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Job Board Bhutan is a platform dedicated to connecting Bhutanese job seekers with exciting career opportunities.
            We aim to empower the youth of Bhutan by providing a transparent, youth-focused, and direct approach to employment.
          </p>
          <div className="mt-12 text-center">
            <img
              src="https://via.placeholder.com/600x300"
              alt="About Job Board Bhutan"
              className="mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Meet the Team</h2>
            <ul className="space-y-4 text-center">
              <li className="text-gray-700">
                <strong>Dupchu Wangmo</strong> - Frontend Developer and Backend Developer
              </li>
              <li className="text-gray-700">
                <strong>Pema Dolker</strong> - Backend Developer and frontend Developer
              </li>
              <li className="text-gray-700">
                <strong>Tandin Zangmo</strong> - UI/UX Designer
              </li>
              <li className="text-gray-700">
                <strong>Douglas Sim</strong> - Project Manager
              </li>
              <li className="text-gray-700">
                <strong>Kamal </strong> - Project Guide
              </li>
              <li className="text-gray-700">
                <strong>Sonam Yangchen</strong> - Co-Guide
              </li>
            </ul>
          </section>
        </main>
        <footer className="bg-gray-100 py-4">
          <p className="text-sm text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Job Board Bhutan. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
