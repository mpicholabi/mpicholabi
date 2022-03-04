export function scrollToTop(selector: string, offset: number = 0): void {
    const element = document.querySelector(selector);
    if (!element) return;
    window.scrollTo({
      top: element.getBoundingClientRect().top - offset,
      behavior: 'smooth'
    });
}
