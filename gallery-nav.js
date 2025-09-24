<!-- gallery-nav.js -->
<script>
// Ordered list of works. Slugs must match the HTML filenames and image basenames.
const WORKS = [
  "The_Capital",
  "Arachne",
  "Ariadne_auf_Naxos",
  "Urns",
  "Artist_at_Home",
  "Bayeuse_Tapestry",
  "Corps_Feminine",
  "Demon_of_History",
  "Dream_1",
  "Ethiopian_Gate",
  "Dream_2_Interior",
  "Trouble_Toil",
  "Etruscan_Urn_for_My_Mothers_Ashes",
  "Five_Maps_for_Happy_Marriages",
  "Glass_Alchemy",
  "Muses",
  "Red_Sky",
  "Strategies",
  "A_Truthful_Decameron"
];

(function () {
  // Figure out the current page slug from the URL, e.g. /Arachne.html -> "Arachne"
  const path = location.pathname.split("/").pop() || "index.html";
  const currentSlug = path.endsWith(".html") ? path.replace(/\.html$/,"") : path;

  const i = WORKS.indexOf(currentSlug);
  if (i === -1) return; // not an artwork page

  const prevSlug = WORKS[(i - 1 + WORKS.length) % WORKS.length];
  const nextSlug = WORKS[(i + 1) % WORKS.length];

  const prevHref = `${prevSlug}.html`;
  const nextHref = `${nextSlug}.html`;

  // Fill nav links if present
  const prevLink = document.querySelector('[data-role="prev"]');
  const nextLink = document.querySelector('[data-role="next"]');
  if (prevLink) prevLink.setAttribute("href", prevHref);
  if (nextLink) nextLink.setAttribute("href", nextHref);

  // Add <link rel="prev/next"> for SEO
  const head = document.querySelector("head");
  if (head) {
    const linkPrev = document.createElement("link");
    linkPrev.rel = "prev"; linkPrev.href = prevHref; head.appendChild(linkPrev);
    const linkNext = document.createElement("link");
    linkNext.rel = "next"; linkNext.href = nextHref; head.appendChild(linkNext);
  }

  // Keyboard arrows
  window.addEventListener("keydown", (e) => {
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    if (e.key === "ArrowLeft") location.href = prevHref;
    if (e.key === "ArrowRight") location.href = nextHref;
  });


  surface.addEventListener("touchend", (e) => {
    const t = e.changedTouches[0];
    const dx = t.pageX - startX;
    const dy = t.pageY - startY;
    const dt = Date.now() - startTime;

    const horizontal = Math.abs(dx) >= SWIPE_THRESHOLD;
    const verticalOK = Math.abs(dy) <= RESTRAINT;
    const timeOK = dt <= ALLOWED_TIME;

    if (horizontal && verticalOK && timeOK) {
      if (dx < 0) location.href = nextHref; // swipe left → next
      else location.href = prevHref;        // swipe right → prev
    }
  }, {passive:true});
})();
</script>
