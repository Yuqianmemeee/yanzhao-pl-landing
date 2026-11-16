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
  countEl.textContent = String(views);

  function bump() {
    views += 1;
    writeCount(views);
    countEl.textContent = String(views);
    btn.classList.remove("is-bump");
    void btn.offsetWidth;
    btn.classList.add("is-bump");
  }

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    bump();
  });

  // 点数字本身也能加
  countEl.addEventListener("click", function (e) {
    e.stopPropagation();
    bump();
  });
})();
