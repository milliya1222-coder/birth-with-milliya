/* ============================================================
   Birth with Milliya — 網站數據追蹤
   ------------------------------------------------------------
   要啟用：把下面 MEASUREMENT_ID 的引號中間，換成 GA4 的
   「評估 ID」（長得像 G-XXXXXXXXXX）。改這一行就會全站生效。

   維持空白時：這個檔案什麼都不做 —— 不載入任何外部程式、
   不放 cookie、不送出任何資料。
   ============================================================ */
(function () {
  var MEASUREMENT_ID = '';

  if (!/^G-[A-Z0-9]{6,}$/i.test(MEASUREMENT_ID)) return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, {
    anonymize_ip: true   // 不記錄完整 IP
  });
})();
