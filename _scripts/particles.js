/*
  animated particle network behind the site header and footer, in the logo colors.
*/

{
  const onLoad = () => {
    const containers = document.querySelectorAll(".particles[id]");
    if (!containers.length || !window.particlesJS) return;

    // respect users who prefer less motion
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const config = {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 900 } },
        color: { value: ["#2563eb", "#22c55e", "#3b82f6", "#ef4444"] },
        shape: { type: "edge" },  // square, echoing the pixel V
        opacity: { value: 0.9 },
        size: { value: 3.5, random: true },
        line_linked: {
          enable: true,
          distance: 120,
          color: "#3b82f6",
          opacity: 0.45,
          width: 0.8,
        },
        move: { enable: !still, speed: 1.2 },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !still, mode: "grab" },
          onclick: { enable: false },
          resize: true,
        },
        modes: { grab: { distance: 140, line_linked: { opacity: 0.6 } } },
      },
      retina_detect: true,
    };

    for (const container of containers)
      window.particlesJS(container.id, config);
  };

  // wait for the deferred particles.js library
  window.addEventListener("load", onLoad);
}
