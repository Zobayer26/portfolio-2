import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { FormEvent } from "react";

const Contact = () => {

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "ACCESS_KEY");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    if (object.name === '' || object.email === '' || object.message === "") {
      alert("Please Enter text")
    }
    else {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        alert(res.message)
      }
    }

  };
  return (
    <section id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm Currently available to take on new projects, so feel free to
            send me message about anything that you want to work on. You can
            contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt=" " />
              <p>zobayerarif126@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+8801982700664</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt=" " />
              <p>Sector 10, Uttara ,Dhaka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter Your name" name="name" required
          />
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" placeholder="Enter your message" rows={8} required />
          <button type="submit"
            className="contact-submit">Submit now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
