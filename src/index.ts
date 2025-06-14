import "./styles/main.scss";
import { gsap } from "gsap";

const headerElement = document.querySelector('.header') as HTMLElement | null;
const navLinkElements = headerElement?.querySelectorAll('nav__link');
const toggleButtonElement = headerElement?.querySelector('.toggle-button') as HTMLElement | null;
const logoTextElement = headerElement?.querySelector('logo__text') as HTMLElement | null;
const logoElement = headerElement?.querySelector('.logo') as HTMLElement | null;
const heroElement = document.querySelector('.hero') as HTMLElement | null;
const heroTitleElement = heroElement?.querySelector('.hero__title') as HTMLElement | null;
const heroTitleLinesElement = heroElement?.querySelectorAll('.hero__line');
const heroSubtitleElement = heroElement?.querySelector('.hero__subtitle') as HTMLElement | null;
const heroImageContainerElement = heroElement?.querySelector('hero__image-container') as HTMLElement | null;
const heroImgElement = heroElement?.querySelector('hero__img') as HTMLElement | null;
const conceptElement = document.querySelector('.concept') as HTMLElement | null;
const conceptTitleElement = conceptElement?.querySelector('.concept__title') as HTMLElement | null;
const conceptAccentElement = conceptElement?.querySelector('.concept__title-accent') as HTMLElement | null;
const conceptTextElement = conceptElement?.querySelector('.concept__title-text') as HTMLElement | null;
const conceptDescriptionElement = conceptElement?.querySelector('.concept__title-description') as HTMLElement | null;
const supportElement = document.querySelector('.support') as HTMLElement | null;
const supportTitleElement = supportElement?.querySelector('.support__title') as HTMLElement | null;
const supportSubtitleElement = supportElement?.querySelector('.support__subtitle') as HTMLElement | null;
const supportImgElement = supportElement?.querySelector('.support__img') as HTMLElement | null;
const supportLinkIconElement = supportElement?.querySelector('.support__link-icon') as HTMLElement | null;
const supportLinkTextElement = supportElement?.querySelector('.support__link-text') as HTMLElement | null;

if (heroTitleLinesElement) {
  gsap.set(heroTitleLinesElement, { opacity: 0, y: 50 });
}

if (heroTitleLinesElement) {
gsap.to(heroTitleLinesElement, {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.15,
  delay: 0.3,
});
}

if (heroSubtitleElement) {
  gsap.fromTo(
    heroSubtitleElement,
    { opacity: 0, y: 30 },
    {
      opacity: 0.8,
      y: 0,
      duration: 1.1,
      ease: "power2.out",
      delay: 1
    }
  );
}
