export function scrollToTop(selector: string, offset: number = 0): void {
  const element = document.querySelector(selector);
  if (!element) return;
  window.scrollTo({
    behavior: 'smooth',
    top:
      element.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  });
}
