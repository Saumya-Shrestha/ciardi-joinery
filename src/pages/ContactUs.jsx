import Banner from "../components/common/Banner";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";

const ContactUs = () => {
  return (
    <>
      <Banner
        title="CONTACT US"
        description="Get in Touch for Your Next Project"
      />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </>
  );
};

export default ContactUs;
