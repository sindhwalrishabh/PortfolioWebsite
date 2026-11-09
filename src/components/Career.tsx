import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Green Intern</h4>
                <h5>1M1B(One Million One Billion)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
             Green Skills & Applied AI Internship
Completed the Green Skills & Applied AI Internship under 1M1B, gaining exposure to 
artificial intelligence and sustainability-focused solutions. Worked on AgriSense AI, 
an agriculture-based project focused on plant disease detection, crop management, 
and nutrient deficiency guidance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Intern</h4>
                <h5>Pegasystems</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
           Completed a Pega internship, gaining practical exposure to low-code 
           application development, workflow automation, and business process management 
           using the Pega Platform.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4></h4>
                <h5></h5>
              </div>
              <h3></h3>
            </div>
            <p>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
