const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".topbar nav a")];

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      link.style.color = active ? "var(--ink)" : "";
      link.style.borderBottomColor = active ? "var(--accent)" : "";
    });
  },
  { rootMargin: "-18% 0px -64% 0px", threshold: [0.1, 0.35, 0.6] }
);

sections.forEach((section) => observer.observe(section));
