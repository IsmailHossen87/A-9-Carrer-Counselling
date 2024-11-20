import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contract = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Thank you for contacting us! We will get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
   <>
   <div className="container mx-auto">
    <Navbar></Navbar>
   </div>
     <div className="flex justify-center items-center my-7 min-h-max ">
      <div className="card bg-white shadow-lg p-8 w-full max-w-4xl">
        <h2 className="font-bold text-3xl text-center text-blue-600 mb-6">Contact Us</h2>

        {/* Success message */}
        {successMessage && (
          <div className="alert alert-success mb-4">
            <span>{successMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea textarea-bordered w-full h-40"
              required
            />
          </div>

          <div className="form-control">
            <button
              type="submit"
              className={`btn btn-primary w-full ${isSubmitting ? "loading" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold">Our Contact Information</h3>
          <p className="mt-2 text-gray-600">Feel free to reach out to us via email or phone.</p>
          <div className="mt-4 text-gray-700">
            <p>Email: <a href="mailto:support@company.com" className="underline text-blue-600">ismailhosen8757@gmail.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="underline text-blue-600">1754433707</a></p>
            <p>Address: 123 Company Street, City, Country</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto">
    <Footer></Footer>
   </div>
   </>
  );
};

export default Contract;