import React, { useEffect, useRef, useState } from "react";
import {
  ContactComponent,
  ContactShapeWrapper,
} from "components/HOMEPAGE/Contact/ContactStyles";
import ButtonComponent from "components/Button/Button";
import gsap from "gsap";
import { isBrowser } from "utils/isBrowser";
import { useIntersection } from "react-use";
import { encode } from "utils/encode";
import { navigate } from "gatsby";
import ContactShape from "assets/images/contact-shape.inline.svg";

const Contact = () => {
  const [animated, setAnimated] = useState(false);
  const contactSectionWrapper = useRef(null);
  const contactShapeWrapper = useRef(null);

  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (typeof window !== "undefined") {
      window
        .fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...state,
          }),
        })
        .then(() => navigate(form.getAttribute("action")))
        // eslint-disable-next-line no-alert
        .catch((error) => window.alert(error));
    }
  };

  const animateAbout = () => {
    const [elements] = contactShapeWrapper.current.children;
    const contactSection = contactSectionWrapper.current;

    const rectangle = elements.getElementById("Rectangle");
    const rectangle1 = elements.getElementById("Rectangle-1");
    const ornamentWhite = elements.getElementById("Ornament/Dotted/white");
    const oval = elements.getElementById("Oval");
    const fill1 = elements.getElementById("Fill-1");

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    gsap.set(contactSection, { y: 75 });

    tl.fromTo(
      rectangle,
      { rotation: 45, transformOrigin: "50% 50%" },
      { rotation: -45, duration: 1.5 }
    );
    tl.fromTo(
      [ornamentWhite, oval, fill1, rectangle1],
      { scaleY: 0 },
      { duration: 1, scaleY: 1 },
      "-=0.75"
    );

    tl.to(contactSection, { y: 0, autoAlpha: 1, duration: 1 }, "-=1.5");
  };

  let sectionRatio = 0;

  if (isBrowser() && window.innerWidth < 768) {
    sectionRatio = 0.7;
  } else {
    sectionRatio = 0.7;
  }

  const intersection = useIntersection(contactSectionWrapper, {
    root: null,
    rootMargin: "0px",
    threshold: sectionRatio,
  });

  useEffect(() => {
    if (
      intersection &&
      intersection.intersectionRatio > sectionRatio &&
      animated === false
    ) {
      animateAbout();
      setAnimated(true);
    }
  });

  return (
    <ContactComponent ref={contactSectionWrapper}>
      <ContactShapeWrapper ref={contactShapeWrapper}>
        <ContactShape />
      </ContactShapeWrapper>
      <div className="container">
        <div className="row contact">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="contact__form"
            action="/"
            onSubmit={handleSubmit}
          >
            <h5>Fell free to contact me and say hello!</h5>
            <input type="hidden" name="contact" value="contact" />
            <p hidden>
              <label htmlFor="hidden">
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} id="hidden" />
              </label>
            </p>
            <fieldset>
              <label htmlFor="name">
                <span>Name:</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email">
                <span>Email:</span>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your E-mail"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="message">
                <span>Message:</span>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message"
                  onChange={handleChange}
                />
              </label>
            </fieldset>
            <ButtonComponent type="submit">Send Message</ButtonComponent>
          </form>
        </div>
      </div>
    </ContactComponent>
  );
};

export default Contact;
