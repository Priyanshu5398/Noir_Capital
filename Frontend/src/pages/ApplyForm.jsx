import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ApplyForm = () => {
  const { jobTitle } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    // fatherName: "",
    mobile: "",
    email: "",
    qualification: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    alert("Application submitted!");
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">
        Apply for {decodeURIComponent(jobTitle)}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

        {/* Name */}
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded text-black"
            required
          />
        </div>

       
        {/* <div>
          <label className="block mb-1">Father’s Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded text-black"
            required
          />
        </div> */}

        {/* Mobile Number */}
        <div>
          <label className="block mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            pattern="[0-9]{10}"
            maxLength="10"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded text-black"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded text-black"
            required
          />
        </div>

        {/* Highest Qualification */}
        <div>
          <label className="block mb-1">Highest Qualification</label>
          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded text-black"
            required
          >
            <option value="">-- Select --</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Diploma">Diploma</option>
            <option value="Graduation">Graduation</option>
            <option value="Post Graduation">Post Graduation</option>
          </select>
        </div>

        {/* Upload Resume */}
        <div>
          <label className="block mb-1">Upload Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full px-3 py-2 rounded bg-white text-black"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white border border-white transition duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;