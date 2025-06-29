const ContactMap = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12">
          <div style={{ height: "400px", backgroundColor: "#f8f9fa" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105738.42915002464!2d150.94515684335937!3d-33.6196584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sHawkesbury%20City%20Council!5e0!3m2!1sen!2sau!4v1640995200000!5m2!1sen!2sau"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ciardi Joinery Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
