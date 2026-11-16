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

  let views = readCount();

  function bump(animate) {
    views += 1;
    writeCount(views);
    countEl.textContent = String(views);
    if (!animate) return;
    btn.classList.remove("is-bump");
    void btn.offsetWidth;
    btn.classList.add("is-bump");
  }

  // 每次打开 / 刷新页面：浏览量 +1
  bump(false);

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    bump(true);
  });
})();
