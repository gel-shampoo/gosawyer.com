const toggle = document.querySelector('.theme-toggle');
const disc = toggle.querySelector('.theme-toggle__disc');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const hover = matchMedia('(hover: hover)');

toggle.addEventListener('click', () => {
  const blue = toggle.getAttribute('aria-pressed') === 'false';
  document.body.dataset.theme = blue ? 'blue' : 'paper';
  toggle.setAttribute('aria-pressed', String(blue));
});

toggle.addEventListener('pointerenter', (event) => {
  if (!hover.matches || reducedMotion.matches || event.pointerType === 'touch') return;

  // Approximate Webflow's two-second Out Elastic rotation with sampled keyframes.
  disc.getAnimations().forEach((animation) => animation.cancel());
  const frames = Array.from({ length: 61 }, (_, index) => {
    const time = index / 60;
    const eased = time === 0 || time === 1
      ? time
      : 1 + 2 ** (-10 * time) * Math.sin((10 * time - 0.75) * (2 * Math.PI / 3));
    return { transform: `rotateY(${360 * eased}deg)` };
  });
  disc.animate(frames, 2000);
});

toggle.hidden = false;
