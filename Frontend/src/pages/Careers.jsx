import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import

const jobs = [
  {
    title: "Cybersecurity Analyst",
    location: "Hyderabad | Bengaluru | Chennai | Mumbai",
    experience: "..",
    description: `We have an opportunity to shape your career and provide a journey where your passion for cybersecurity meets real-world impact...
    You will go through 3 rounds:
    1-Online Assessment
    2-Technical round(If you qualify assessment round)
    3-HR Round(If you qualify GD round)`,
  },
  {
    title: "Junior Software Engineer (Fresher)",
    location: "Hyderabad, Bengaluru, Chennai, Mumbai",
    experience: "..",
    description: `We are a fast-growing investment company passionate about building innovative software solutions...
    You will go through 3 rounds:
    1-Online Assessment
    2-Technical round(If you qualify assessment round)
    3-HR Round(If you qualify GD round)`,
  },
  {
    title: "Frontend Engineer (Fresher)",
    location: "Hyderabad | Bengaluru | Chennai | Mumbai",
    experience: "..",
    description: `As a Junior Software Engineer, you’ll be part of a fast-paced development team delivering innovative software solutions...
    You will go through 3 rounds:
    1-Online Assessment
    2-Technical round(If you qualify assessment round)
    3-HR Round(If you qualify GD round)`,
  },
];

const Careers = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState(""); // for button search
  const navigate = useNavigate(); // ✅ hook to navigate

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleApplyClick = (jobTitle) => {
    navigate(`/apply/${encodeURIComponent(jobTitle)}`);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // prevent reload
    setSubmittedSearch(searchTerm);
  };

  // Filter jobs based on submitted search term
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(submittedSearch.toLowerCase()) ||
      job.location.toLowerCase().includes(submittedSearch.toLowerCase())
  );

  return (
    <div className="service-card show">
      <section className="services-hero mb-4">
        <h1>Join the Revolution at Noir Capital</h1>
        {/* ✅ Search form with button */}
        <form onSubmit={handleSearch} className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Search jobs by title or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-2 border rounded bg-transparent text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-4 py-2 border border-white text-white rounded bg-black hover:bg-white hover:text-black transition duration-300"
          >
            Search
          </button>
        </form>
      </section>

      {filteredJobs.length > 0 ? (
        filteredJobs.map((job, index) => (
          <div
            key={index}
            className="service-card show mb-6 border-b pb-4"
          >
            <h2
              className="text-xl font-semibold mb-2 text-white cursor-pointer"
              onClick={() => toggleDescription(index)}
            >
              {job.title}
            </h2>

            <p className="text-sm text-[#ccc] mb-1">📍 {job.location}</p>

            {openIndex === index && (
              <>
                <p className="text-[#ddd] whitespace-pre-line mb-4">
                  {job.description}
                </p>

                <button
                  className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-white transition duration-300"
                  onClick={() => handleApplyClick(job.title)}
                >
                  Apply Now
                </button>
              </>
            )}
          </div>
        ))
      ) : (
        <p className="text-[#ccc]">No jobs found.</p>
      )}
    </div>
  );
};

export default Careers;
