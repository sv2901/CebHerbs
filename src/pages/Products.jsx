import { Link } from "react-router-dom";
import { categories } from "../data/productData.js";

const Products = () => {
  return (
    <div className="page products">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Categories we offer</p>
          <h1>Botanicals curated for global trade</h1>
          <p>
            From premium Indian herbs to specialized extracts, every category is
            prepared for export-grade documentation and consistent quality.
          </p>
        </div>
        <Link to="/enquiry" className="button primary">
          Start an Enquiry
        </Link>
      </section>

      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <Link to={`/products/${category.id}`} className="button ghost">
                Explore products
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
