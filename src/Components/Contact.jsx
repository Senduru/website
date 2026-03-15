import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../Css/contact.css";

export const Contact = () => {
  const [contactData, setContactData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  
  // Fetch data.json dynamically
  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => setContactData(data))
      .catch((error) => console.error("Error fetching data.json:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email address.");
      return;
    }

    setError("");

    // Add the user's email as the 'reply_to' field
    const messageData = {
      ...formData,
      reply_to: formData.email, // This ensures the reply-to is set to the user's email
    };

    // Send the user's message to your email (Primary email)
    emailjs
      .send(
        "service_3jkzy3z", // Replace with your EmailJS Service ID
        "template_0am7roe", // Replace with your EmailJS Template ID
        messageData,
        "NtBbLUtjBYN0CHyC6" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent! Thank you for visiting.");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  if (!contactData) return <div>Loading...</div>;

  return (
    <div className="contact-container container" id="contact">
      <div className="text-center">
        <h2>{contactData.ContactTitle}</h2>
        <p>{contactData.description}</p>
      </div>

      <div className="row text-center">
        {contactData.contactMethods.map((method, index) => (
          <div key={index} className="col-md-4">
            <div className="contact-box">
              <img src={method.icon} alt={method.type} className="contact-logo" />
              <h4>{method.type}</h4>
              <a href={method.link} target="_blank" rel="noopener noreferrer">
                {method.text}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h3>{contactData.formTitle}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              {error && <p className="text-danger">{error}</p>}
              <div className="text-center mt-5">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 text-center">
            <a href={contactData.qrCode.link} target="_blank" rel="noopener noreferrer">
              <img src={contactData.qrCode.image} alt="QR Code" className="img-fluid" />
            </a>
            <div className="mt-4">
              {contactData.socialLinks.map((link, index) => (
                <button
                  key={index}
                  className={`btn btn-glow ${link.className} mx-2`}
                  onClick={() => window.open(link.href, "_blank")}
                >
                  <i className={link.icon}></i>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

