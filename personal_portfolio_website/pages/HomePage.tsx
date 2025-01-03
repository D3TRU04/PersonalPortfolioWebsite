'use client'
import React from 'react';
import NavBar from './NavBar';

function LandingPage() {
  return (
    <>
      <NavBar activePath="" />
      <div className="bg-gradient-to-b from-white to-[#F5F7FA] w-full min-h-screen">
        <div className="container mx-auto py-10 space-y-8">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to Our Landing Page!
            </h1>
            <p className="text-lg text-gray-600">
              Experience the ultimate platform to simplify your workflow and enhance productivity.
            </p>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800">Feature 1</h3>
              <p className="text-gray-600">Learn more about our first feature and how it can benefit you.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800">Feature 2</h3>
              <p className="text-gray-600">Discover the advantages of using our second feature.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800">Feature 3</h3>
              <p className="text-gray-600">Explore the functionality of our third feature in depth.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-4">
              Join us today and take your projects to the next level.
            </p>
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition">
              Get Started Now
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
