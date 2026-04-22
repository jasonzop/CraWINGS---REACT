export default function Contact() {
  return (
    <main className="contact-page-custom">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row g-5 align-items-start contact-row-custom">
          <div className="col-lg-6">
            <div className="contact-map-wrap">
              <iframe
                title="CraWings Location"
                src="https://www.google.com/maps?q=1769%20Central%20Park%20Ave,%20Yonkers,%20NY%2010710&z=14&output=embed"
                width="100%"
                height="470"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form-side">
              <h2 className="contact-page-title">Contact Us</h2>

              <form className="contact-form-custom">
                <input
                  type="text"
                  className="form-control contact-input-custom"
                  placeholder="Name"
                />

                <input
                  type="email"
                  className="form-control contact-input-custom"
                  placeholder="Email"
                />

                <textarea
                  className="form-control contact-input-custom"
                  rows="4"
                  placeholder="Message"
                ></textarea>

                <button type="submit" className="contact-send-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}