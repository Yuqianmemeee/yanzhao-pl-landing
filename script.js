(function () {
  const STORAGE_KEY = "yz_pl_views";
  const DEFAULT_VIEWS = 48000;

  const btn = document.getElementById("viewBtn");
  const countEl = document.getElementById("viewCount");
  if (!btn || !countEl) return;

  function readCount() {
    const raw = localStorage.getItem(STORAGE_KEY);
    const n = Number(raw);
    return Number.isFinite(n) && n >= DEFAULT_VIEWS ? Math.floor(n) : DEFAULT_VIEWS;
  }

  function writeCount(n) {
    localStorage.setItem(STORAGE_KEY, String(n));
  }

  function format(n) {
    return String(n);
  }

  let views = readCount();
  countEl.textContent = format(views);

  btn.addEventListener("click", function () {
    views += 1;
    writeCount(views);
    countEl.textContent = format(views);
    btn.classList.remove("is-bump");
    // restart animation
    void btn.offsetWidth;
    btn.classList.add("is-bump");
  });
})();
