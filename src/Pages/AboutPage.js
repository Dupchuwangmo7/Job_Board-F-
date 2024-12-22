import React from 'react';

const AboutPage = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-blue-50 via-gray-100 to-blue-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-12 px-8 shadow-lg">
          <h1 className="text-5xl font-extrabold text-center tracking-wide leading-tight">
            About Job Board Bhutan
          </h1>
        </header>

        {/* Main Content */}
        <main className="p-8">
          <p className="text-lg text-gray-800 leading-relaxed text-center">
            Job Board Bhutan is a platform dedicated to connecting Bhutanese job seekers with exciting career opportunities.
            We aim to empower the youth of Bhutan by providing a transparent, youth-focused, and direct approach to employment.
          </p>

          {/* Image Section */}
          <div className="mt-12 text-center">
            <img
              src="https://via.placeholder.com/600x300"
              alt="About Job Board Bhutan"
              className="mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          {/* Team Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
              Meet the Team
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
              <li className="bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                <strong className="text-blue-600 text-xl">Dupchu Wangmo</strong>
                <p className="text-gray-600">Frontend Developer and Backend Developer</p>
              </li>
            
              <li className="bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                <strong className="text-blue-600 text-xl">Tandin Zangmo</strong>
                <p className="text-gray-600">UI/UX Designer</p>
              </li>
              <li className="bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                <strong className="text-blue-600 text-xl">Douglas Sim</strong>
                <p className="text-gray-600">Project Manager</p>
              </li>
              <li className="bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                <strong className="text-blue-600 text-xl">Kamal</strong>
                <p className="text-gray-600">Project Guide</p>
              </li>
              <li className="bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                <strong className="text-blue-600 text-xl">Sonam Yangchen</strong>
                <p className="text-gray-600">Co-Guide</p>
              </li>
              <li className="bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                <strong className="text-blue-600 text-xl">Pema Dolker</strong>
                <p className="text-gray-600">Backend Developer and Frontend Developer</p>
              </li>
            </ul>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 py-8">
          <p className="text-sm text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Job Board Bhutan. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
