/* ============================================================
   Birth with Milliya — 網站數據追蹤
   ------------------------------------------------------------
   目前狀態：已啟用（GA4 評估 ID：G-G9S3J48Y9B）
   資料從 2026-09-10 開始累積，Google Analytics 不回填先前的流量。

   要換成別的資源：改下面 MEASUREMENT_ID 的值即可，全站生效。
   要暫時停止追蹤：把它改成空字串 ''，這個檔案就什麼都不做——
   不載入任何外部程式、不放 cookie、不送出任何資料。
   ============================================================ */
(function () {
  var MEASUREMENT_ID = 'G-G9S3J48Y9B';

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
