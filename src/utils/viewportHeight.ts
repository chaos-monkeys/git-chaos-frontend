// https:// css-tricks.com/the-trick-to-viewport-units-on-mobile/
document.documentElement.style.setProperty(
  "--vh",
  `${window.innerHeight * 0.01}px`,
);

window.addEventListener("resize", () => {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`,
  );
});
