export function AnimationClass(selector: string, animation: string): void {
  new Promise((resolve, reject) => {
    const element = document.querySelector(selector);

    element?.classList.add(animation);
    function handleAnimationEnd(event: any) {
      event.stopPropagation();
      element?.classList.remove(animation);
      resolve('Animation ended');
    }

    element?.addEventListener('animationend', handleAnimationEnd, {
      once: true,
    });
  });
}
