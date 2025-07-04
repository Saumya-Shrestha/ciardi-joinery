import Banner from "../components/common/Banner";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";

const ContactUs = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Banner
          title="CONTACT US"
          description="Get in Touch for Your Next Project"
        />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <ContactInfo />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <ContactForm />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <ContactMap />
      </section>
    </>
  );
};

export default ContactUs;
