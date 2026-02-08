const About = () => {
  return (
    <div className="page about">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Cebherbs.com</p>
          <h1>Farm-to-fork botanical supply chain</h1>
          <p>
            Cutting Edge Botanical Pvt. Ltd. partners with growers, aggregators,
            and processing units to deliver botanicals that meet international
            compliance and traceability standards.
          </p>
        </div>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h3>Direct sourcing</h3>
          <p>
            Hand-picked botanicals secured from verified farms, ensuring
            freshness, potency, and ethical procurement.
          </p>
        </div>
        <div className="about-card">
          <h3>Quality assurance</h3>
          <p>
            Each batch follows stringent QA with documentation support for
            export compliance, certifications, and client requirements.
          </p>
        </div>
        <div className="about-card">
          <h3>Global logistics</h3>
          <p>
            Tailored export packaging, labeling, and freight coordination for
            reliable delivery worldwide.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
