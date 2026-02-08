import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">
          <div className="brand-mark">CEB</div>
          <div>
            <p className="brand-title">Cebherbs.com</p>
            <p className="brand-subtitle">
              Cutting Edge Botanical Pvt. Ltd.
            </p>
          </div>
        </div>
        <nav className="site-nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/enquiry" className="nav-cta">
            Enquiry
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <h4>Cebherbs.com</h4>
          <p>
            Import & export partner for premium botanicals, spices, oleoresins,
            and herbal extracts.
          </p>
        </div>
        <div>
          <h4>Global Presence</h4>
          <p>
            Strategic sourcing across Asia, Africa, and the Americas with
            destination-ready logistics.
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>sales@cebherbs.com</p>
          <p>+91 00000 00000</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
