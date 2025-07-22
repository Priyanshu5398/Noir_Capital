import React, { useState } from "react";

const ApplyButton = () => {
  const [showFormLink, setShowFormLink] = useState(false);

  return (
    <div>
      {!showFormLink ? (
        <button
          style={{ color: "white" }}
          onClick={() => setShowFormLink(true)}
          className="service-card show"
        >
          Apply Now
        </button>
      ) : (
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJnF8Tmk3aFnRvvBWHahIvWsp74_7PRGeG7aDGeFhdOjha7A/viewform?usp=sharing&ouid=111157103197476395811" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mt-2"
        >
          Fill Application Form
        </a>
      )}
    </div>
  );
};
export default ApplyButton;

