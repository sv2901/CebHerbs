import { Link } from "react-router-dom";
import { categories, exportDestinations, importDestinations } from "../data/productData.js";

const Home = () => {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Farm-to-fork connectivity</p>
          <h1>Premium Botanicals for Import & Export</h1>
          <p className="hero-copy">
            Cutting Edge Botanical Pvt. Ltd. connects trusted farms, processing
            partners, and global buyers with consistent quality, traceable
            sourcing, and reliable logistics.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="button primary">
              Explore Products
            </Link>
            <Link to="/enquiry" className="button ghost">
              Request a Quote
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <h3>What we offer</h3>
          <div className="offer-grid">
            <div>
              <h4>Export</h4>
              <p>
                Premium Indian botanicals, spices, and extracts shipped to{" "}
                {exportDestinations.join(", ")}.
              </p>
            </div>
            <div>
              <h4>Import</h4>
              <p>
                Curated global sourcing from {importDestinations.join(", ")} for
                consistent supply.
              </p>
            </div>
          </div>
          <p className="note">
            No public pricing — every shipment is customized for your
            requirements.
          </p>
        </div>
      </section>

      <section className="categories-preview">
        <div className="section-title">
          <h2>Export Categories</h2>
          <p>
            Explore our high-demand botanical categories with full compliance,
            documentation, and batch-level QA.
          </p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} />
              <div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <Link to={`/products/${category.id}`} className="text-link">
                  View products →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="insight">
        <div className="insight-text">
          <h2>Why global buyers choose CEB</h2>
          <ul>
            <li>Direct farm sourcing and audited processing partners.</li>
            <li>Batch traceability with quality documentation.</li>
            <li>Flexible packaging, labeling, and compliance support.</li>
            <li>Dedicated account managers for quick response time.</li>
          </ul>
        </div>
        <div className="insight-card">
          <h3>Featured Botanical: Ashwagandha</h3>
          <p>Popular for wellness formulations and functional beverages.</p>
          <ul>
            <li>Stress and lifestyle support blends</li>
            <li>Capsule and powder manufacturing</li>
            <li>Functional beverages and tonics</li>
          </ul>
          <Link to="/products/indian-botanicals" className="button primary">
            View Ashwagandha
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
