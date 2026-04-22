export default function SiteFooter() {
  return (
    <footer className="custom-footer-home">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="footer-title">Business Hours</h3>
            <p className="footer-text mb-0">Mon - Fri: 11 AM - 10 PM</p>
            <p className="footer-text mb-0">Sat - Sun: 12 PM - 11 PM</p>
          </div>

          <div className="col-md-6 text-md-end">
            <h3 className="footer-title">Follow Us</h3>
            <p className="footer-text mb-0">Instagram - @CraWings</p>
            <p className="footer-text mb-0">Facebook - @CraWings</p>
            <p className="footer-text mb-0">Twitter - @CraWings</p>
          </div>
        </div>
      </div>
    </footer>
  );
}