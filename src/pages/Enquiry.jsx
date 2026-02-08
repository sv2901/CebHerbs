import { useState } from "react";
import { categories } from "../data/productData.js";

const defaultForm = {
  company: "",
  contactName: "",
  email: "",
  phone: "",
  country: "",
  category: "",
  product: "",
  quantity: "",
  packaging: "",
  destinationPort: "",
  incoterms: "",
  certifications: "",
  message: "",
};

const Enquiry = () => {
  const [form, setForm] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = "sales@cebherbs.com";
    const subject = `New Import/Export Enquiry from ${form.company || "Prospect"}`;
    const bodyLines = [
      `Company: ${form.company}`,
      `Contact Name: ${form.contactName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Country: ${form.country}`,
      `Category: ${form.category}`,
      `Product: ${form.product}`,
      `Quantity: ${form.quantity}`,
      `Packaging: ${form.packaging}`,
      `Destination Port: ${form.destinationPort}`,
      `Incoterms: ${form.incoterms}`,
      `Certifications Required: ${form.certifications}`,
      `Message: ${form.message}`,
    ];
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="page enquiry">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Enquiry</p>
          <h1>Tell us what you need</h1>
          <p>
            Share your product requirements, compliance needs, and logistics
            details. Our team will respond with a tailored quote.
          </p>
        </div>
      </section>

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Company Name
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Contact Person
            <input
              type="text"
              name="contactName"
              value={form.contactName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Business Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone / WhatsApp
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Country
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
            />
          </label>
          <label>
            Product Category
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Product Name
            <input
              type="text"
              name="product"
              value={form.product}
              onChange={handleChange}
              placeholder="e.g., Ashwagandha Root, Hibiscus Flower"
              required
            />
          </label>
          <label>
            Estimated Quantity
            <input
              type="text"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="e.g., 2 MT per month"
              required
            />
          </label>
          <label>
            Preferred Packaging
            <input
              type="text"
              name="packaging"
              value={form.packaging}
              onChange={handleChange}
              placeholder="e.g., 25kg kraft bags, drums"
            />
          </label>
          <label>
            Destination Port
            <input
              type="text"
              name="destinationPort"
              value={form.destinationPort}
              onChange={handleChange}
              placeholder="e.g., Hamburg, Dubai"
            />
          </label>
          <label>
            Incoterms
            <input
              type="text"
              name="incoterms"
              value={form.incoterms}
              onChange={handleChange}
              placeholder="e.g., FOB, CIF, DDP"
            />
          </label>
          <label>
            Certifications Needed
            <input
              type="text"
              name="certifications"
              value={form.certifications}
              onChange={handleChange}
              placeholder="e.g., Organic, ISO, GMP"
            />
          </label>
        </div>

        <label>
          Additional Notes
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us about your quality specs, target markets, and timelines."
          />
        </label>

        <button className="button primary" type="submit">
          Send Enquiry
        </button>
        {submitted && (
          <p className="form-confirmation">
            Your email client should open with the enquiry details. Update the
            recipient email when ready.
          </p>
        )}
      </form>
    </div>
  );
};

export default Enquiry;
