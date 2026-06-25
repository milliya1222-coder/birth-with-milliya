# Birth with Milliya 網站第一版 — 替換清單

這是用「範本 B」生出來的第一版靜態網站，純 HTML/CSS/JS，可直接上 GitHub Pages。
**現在打開 `index.html` 就能看，所有文字與佈局都在了，只差換上你自己的照片與微調文案。**

---

## 一、要換的圖片（放進 `images/` 資料夾，檔名對好即可）

| 檔名 | 用在哪 | 建議規格 |
|---|---|---|
| `images/milliya.jpg` | 「關於我」你的照片 | 直式 4:5、自然光、溫暖；寬 800px+ |
| Hero 首屏背景 | 在 `styles.css` 找 `.hero{ }`，把 `background:` 換成你的柔光自然照（母親/雙手/植物意象） | 橫式、寬 2000px+ |
| `images/og-cover.jpg` | 分享到 LINE/FB 時的縮圖 | 1200×630 |

> ⚠️ 隱私提醒：放真人照片前，若照片裡有未同意入鏡的人（例如客戶、寶寶），記得先做臉部柔焦處理。

---

## 二、要改的文字（都在 `index.html`，搜尋 `TODO` 就能找到）

1. **關於我** — 我先用你的故事（留學／兩胎溫柔生產／共親職／台日兩地）寫了初稿，請改成你真正想說的話。
2. **見證** — 目前是示意文字，請換成**已徵得同意**的真實學員回饋。
3. **聯絡方式** — LINE 連結目前是空的（`href="#"`），請換成你的 LINE 加好友連結；Email 已填 milliya1222@gmail.com，確認要不要公開。
4. **標語／服務說明** — 都可依你的語氣微調。

---

## 三、怎麼預覽

直接用瀏覽器打開 `index.html` 就好（不需要任何安裝）。

---

## 四、怎麼上線到 GitHub Pages（帳號 milliya1222-coder）

做好後跟我說「幫我把網站推上 GitHub Pages」，我會用你已裝好的 git/gh 幫你：
1. 建一個新 repo（例如 `birth-with-milliya`）
2. 把 `網站第一版/` 裡的檔案 push 上去
3. 開啟 Pages，給你一個 `https://milliya1222-coder.github.io/birth-with-milliya/` 網址
4. （之後可再接你自己的網域）

---

## 設計規格備忘（這版用的）

- 主色玫瑰陶土粉 `#E29B86`、背景米杏 `#F4EBE3`／象牙白 `#FBF7F2`、點綴鼠尾草綠 `#A8B5A2`、內文深可可棕 `#5A4A42`
- 標題襯線 Noto Serif TC + Cormorant Garamond；內文 Noto Sans TC
- 響應式（375 / 768 / 1280 都測過佈局）、捲動淡入動畫、吸頂導覽、手機漢堡選單
- 極淡紙質顆粒背景（2026 grainy texture 趨勢）
