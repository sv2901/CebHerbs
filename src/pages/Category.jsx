import { Link, useParams } from "react-router-dom";
import { categories } from "../data/productData.js";

const Category = () => {
  const { categoryId } = useParams();
  const category = categories.find((item) => item.id === categoryId);

  if (!category) {
    return (
      <div className="page">
        <section className="page-hero">
          <div>
            <h1>Category not found</h1>
            <p>Explore our full catalog to find the right botanicals.</p>
          </div>
          <Link to="/products" className="button primary">
            Back to products
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="page category">
      <section className="page-hero">
        <div>
          <p className="eyebrow">{category.name}</p>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
        <Link to="/enquiry" className="button primary">
          Enquire about {category.name}
        </Link>
      </section>

      <div className="product-grid">
        {category.products.map((product) => (
          <div key={product.name} className="product-card">
            <h3>{product.name}</h3>
            <p>Use cases:</p>
            <ul>
              {product.uses.map((use) => (
                <li key={use}>{use}</li>
              ))}
            </ul>
            <Link to="/enquiry" className="text-link">
              Request a quote →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
