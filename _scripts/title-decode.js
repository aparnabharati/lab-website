/*
  on the home page, scrambles the site title into random glyphs and
  "decodes" it back, left to right, once on load.
*/

{
  const glyphs = "01<>/\\|#%&*+=?";
  const duration = 1100;

  const onLoad = () => {
    const title = document.querySelector("header[data-big] .title");
    if (!title) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // text nodes and their final text, keeping the styled spans intact
    const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    const finals = nodes.map((node) => node.textContent);
    const total = finals.join("").length;

    // lock width so the glyphs don't shift the layout
    title.style.display = "inline-block";
    title.style.width = title.getBoundingClientRect().width + "px";
    title.style.whiteSpace = "nowrap";

    const start = performance.now();
    const frame = (now) => {
      const revealed = Math.floor(((now - start) / duration) * total);
      let index = 0;
      nodes.forEach((node, n) => {
        node.textContent = [...finals[n]]
          .map((char) =>
            index++ < revealed || char === " "
              ? char
              : glyphs[Math.floor(Math.random() * glyphs.length)]
          )
          .join("");
      });
      if (revealed < total) window.requestAnimationFrame(frame);
      else {
        nodes.forEach((node, n) => (node.textContent = finals[n]));
        title.style.removeProperty("width");
        title.style.removeProperty("display");
        title.style.removeProperty("white-space");
      }
    };
    window.requestAnimationFrame(frame);
  };

  window.addEventListener("DOMContentLoaded", onLoad);
}
