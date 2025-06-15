import "./styles/main.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const headerElement = document.querySelector('.header') as HTMLElement | null;
const navLinkElements = headerElement?.querySelectorAll('nav__link');
const toggleButtonElement = headerElement?.querySelector('.toggle-button') as HTMLElement | null;
const logoTextElement = headerElement?.querySelector('logo__text') as HTMLElement | null;
const logoElement = headerElement?.querySelector('.logo') as HTMLElement | null;
const heroElement = document.querySelector('.hero') as HTMLElement | null;
const heroContainerElement = heroElement?.querySelector('.hero__container') as HTMLElement | null;
const heroOverlayElement = heroElement?.querySelector('.hero__overlay') as HTMLElement | null;
const sectionDarkElements = document.querySelectorAll('[data-theme="dark"]');
const themeSectionsElement = document.querySelectorAll<HTMLElement>('[data-theme]');
const heroTitleElement = heroElement?.querySelector('.hero__title') as HTMLElement | null;
const heroTitleLinesElement = heroElement?.querySelectorAll('.hero__line') ?? [];
const heroSubtitleElement = heroElement?.querySelector('.hero__subtitle') as HTMLElement | null;
const heroImageContainerElement = heroElement?.querySelector('.hero__image-container') as HTMLElement | null;
const heroImgElement = heroElement?.querySelector('.hero__img') as HTMLElement | null;
const conceptElement = document.querySelector('.concept') as HTMLElement | null;
const conceptTitleLines = conceptElement?.querySelectorAll('.concept__line') ?? [];
const triggerElements = document.querySelectorAll('[data-theme-trigger]');
const sectionLightElement = document.querySelector('.section-light') as HTMLElement | null;
const conceptTitleElements = conceptElement?.querySelectorAll('.concept__title')
const conceptAccentElement = conceptElement?.querySelector('.concept__title-accent') as HTMLElement | null;
const conceptTextElement = conceptElement?.querySelector('.concept__title-text') as HTMLElement | null;
const conceptDescriptionElement = conceptElement?.querySelector('.concept__title-description') as HTMLElement | null;
const supportElement = document.querySelector('.support') as HTMLElement | null;
const supportTitleElement = supportElement?.querySelector('.support__title') as HTMLElement | null;
const supportSubtitleElement = supportElement?.querySelector('.support__subtitle') as HTMLElement | null;
const supportImgElement = supportElement?.querySelector('.support__img') as HTMLElement | null;
const supportLinkElement = supportElement?.querySelector('.support__link') as HTMLElement | null;
const supportLinkIconElement = supportElement?.querySelector('.support__link-icon') as HTMLElement | null;
const supportLinkTextElement = supportElement?.querySelector('.support__link-text') as HTMLElement | null;

if (heroTitleElement) {
  gsap.set(heroTitleElement, { opacity: 0, y: 100 });
}

gsap.fromTo(heroTitleElement,
  { opacity: 0, y: 100 },
  {
  y: 0,
  opacity: 1,
  duration: 1.5,
  ease: 'power3.out',
  stagger: 0.15,
  scrollTrigger: {
    trigger: heroElement,
    start: 'top 85%',
    toggleActions: 'play reset play reset'
  }
});


gsap.fromTo(heroSubtitleElement,
  { opacity: 0, y: 80 },
  {
    opacity: 0.8,
    y: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 0,
    scrollTrigger: {
      trigger: heroElement,
      start: 'top 80%',
      toggleActions: 'play reset play reset'
    }
  }
);

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  const lightSection = document.querySelector<HTMLElement>('section[data-theme="light"]');

  if (!header || !lightSection) return;

  ScrollTrigger.create({
    trigger: lightSection,
    start: 'top 5%',
    end: 'bottom 10%',
    toggleClass: {
      targets: header,
      className: 'header--dark',
    },

    scrub: true,
  });
});

if (heroElement && heroOverlayElement && heroTitleElement && heroSubtitleElement && heroImgElement) {
  ScrollTrigger.create({
    trigger: heroElement,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      const progress = gsap.utils.clamp(0, 1, self.progress * 1.5);
      const overlayOpacity = progress.toFixed(3);
      const textOpacity = (1 - progress).toFixed(3);
      const imageOpacity = (1 - progress * 1.2).toFixed(3);

      heroOverlayElement.style.opacity = overlayOpacity;
      heroTitleElement.style.opacity = textOpacity;
      heroSubtitleElement.style.opacity = textOpacity;
      heroImgElement.style.opacity = imageOpacity;
    }
  });
}

if (conceptElement && conceptTitleElements && conceptTitleLines.length && conceptTextElement && conceptDescriptionElement) {

  gsap.set(conceptTitleElements, { y: '100%', opacity: 0 });

  // Анимация появления строк заголовка
  gsap.fromTo(conceptTitleElements,
    { y: '100%', opacity: 1 },
    {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power3.out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: conceptElement,
      start: 'top 80%',
      toggleActions: 'play reset play reset',
    }
  });

  gsap.fromTo(conceptTitleLines,
    { y: '80%', opacity: 1 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0,
      scrollTrigger: {
        trigger: conceptElement,
        start: 'top 85%',
        toggleActions: 'play reset play reset',
      }
    }
  );
}

if (supportTitleElement) {
  gsap.set(supportTitleElement, { opacity: 0, y: 100 });
}

gsap.fromTo(supportTitleElement,
  { opacity: 0, y: 100 },
  {
  y: 0,
  opacity: 1,
  duration: 1.5,
  ease: 'power3.out',
  stagger: 0.15,
  scrollTrigger: {
    trigger: supportElement,
    start: 'top 85%',
    toggleActions: 'play reset play reset'
  }
});


gsap.fromTo(supportSubtitleElement,
  { opacity: 0, y: 80 },
  {
    opacity: 0.8,
    y: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 0,
    scrollTrigger: {
      trigger: supportElement,
      start: 'top 80%',
      toggleActions: 'play reset play reset'
    }
  }
);

gsap.fromTo(supportLinkElement,
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 0,
    scrollTrigger: {
      trigger: supportElement,
      start: 'top 80%',
      toggleActions: 'play reset play reset'
    }
  }
);

if (supportImgElement) {
  gsap.fromTo(
    supportImgElement,
    {
      opacity: 0,
      scale: 1.1
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.support',
        start: 'top 80%',
        toggleActions: 'play reset play reset',
      }
    }
  );
}
