export const AnimateOnScroll = (gsap, element) => {
  gsap.fromTo(
    element, 
    {y: '+=75', opacity: 0}, 
    {
      y: 0, opacity: 1, 
      stagger: 0.2, duration: 1, 
      ease: 'easeInOut', 
      scrollTrigger: {
        trigger: element,
        start: 'top 75%'
      }
    }
  )
}