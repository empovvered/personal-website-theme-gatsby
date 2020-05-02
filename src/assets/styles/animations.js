import gsap from "gsap";

export const fadeIn = (sectionWrapper) => {
  const element = sectionWrapper.current;

  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

  gsap.set(element, { y: 75 });

  tl.to(element, { y: 0, autoAlpha: 1, duration: 1 });
};
