/* =========================================================
   Birth with Milliya — 互動腳本（純原生，無函式庫）
   ========================================================= */

// 1) 導覽列：捲動時加底色（首頁才有 #nav，子頁面沒有就跳過）
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 2) 手機選單開合（同樣只在有漢堡選單的頁面執行）
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // 點選單項後自動收合
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// 3) 捲動淡入（IntersectionObserver）
//
// threshold 必須是 0：用比例當門檻時，只要元素比視窗高很多就永遠觸發不了。
// （例：文章內文約 8000px 高、手機視窗約 700px，最大交集比例僅約 9%，
//   舊的 0.14 門檻永遠達不到，整篇內文會一直停在 opacity:0 = 全白。）
// 改用 threshold 0 + rootMargin 下緣負值：任何高度的元素，只要進入畫面
// 下緣一段距離就顯示，效果一樣但不會因為元素太高而失效。
const reveals = document.querySelectorAll('.reveal');
const showAll = () => reveals.forEach((el) => el.classList.add('visible'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
  reveals.forEach((el) => io.observe(el));

  // 保險：無論發生什麼事，內容都不該永久隱形。
  // 3 秒後把還沒顯示的一律打開——動畫是加分項，內容看得見才是底線。
  setTimeout(showAll, 3000);
} else {
  showAll();
}
