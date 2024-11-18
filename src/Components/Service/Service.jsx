import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Service = () => {
  return (
   <>
   <Navbar></Navbar>
   <div className="flex justify-center items-center my-5 min-h-screen bg-gray-100">
      <div className="card bg-white shadow-lg p-8 w-full max-w-4xl">
        <h2 className="font-bold text-3xl text-center text-blue-600 mb-4">Career Counseling Services</h2>
        <p className="text-center text-lg text-gray-600 mb-6">Our career counseling services help you navigate your professional journey with personalized guidance. We offer various services to help you achieve your career goals!</p>

        <div className="space-y-6">
          <div className="service-item p-4 bg-blue-50 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-blue-700">Career Path Guidance</h3>
            <p className="text-gray-700 mt-2">
              We provide expert advice to help you identify the best career paths based on your interests, strengths, and qualifications.
            </p>
          </div>

          <div className="service-item p-4 bg-blue-50 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-blue-700">Resume and CV Building</h3>
            <p className="text-gray-700 mt-2">
              Our team will assist you in crafting an impressive resume or CV that highlights your skills and experiences to stand out to employers.
            </p>
          </div>

          <div className="service-item p-4 bg-blue-50 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-blue-700">Interview Preparation</h3>
            <p className="text-gray-700 mt-2">
              Get personalized coaching for interviews, including mock interviews and feedback to help you present yourself confidently.
            </p>
          </div>

          <div className="service-item p-4 bg-blue-50 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-blue-700">Job Search Strategies</h3>
            <p className="text-gray-700 mt-2">
              Learn how to effectively search for jobs, network, and utilize job platforms to land the best opportunities.
            </p>
          </div>

          <div className="service-item p-4 bg-blue-50 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-blue-700">Career Transition Support</h3>
            <p className="text-gray-700 mt-2">
              Are you thinking of switching careers? Our experts will guide you in making a smooth transition into a new field.
            </p>
          </div>

          <div className="service-item p-4 bg-blue-50 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-blue-700">Skill Development Plans</h3>
            <p className="text-gray-700 mt-2">
              Based on your career goals, we will help you develop a personalized skill-building plan to enhance your employability.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-gray-700">Ready to start your career journey? Get in touch with our experts today!</p>
        </div>
      </div>
    </div>
   <Footer></Footer>
   </>
  );
};

export default Service;
