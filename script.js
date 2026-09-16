if (
!CSS.supports("(animation-timeline: view()) and (animation-range: 0 100%)"))
{
  class Slider {
    constructor(element) {
      const input = element;
      const sync = () => {
        const val = (input.value - input.min) / (input.max - input.min);
        document.documentElement.style.setProperty(
        "--compare",
        Math.round(val * 100));

      };
      console.info("polyfilling scroll animation for input:", element);
      input.addEventListener("input", sync);
      // on iOS, you'll also want to cater for starting an interaction
      input.addEventListener("pointerdown", sync);
      sync();
    }}

  const sliders = document.querySelectorAll(".slider");
  for (const slider of sliders) new Slider(slider);
}
