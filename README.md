# VIRTUALMODEL｜使用 vite + tailwind & google 串接第三方登入

[VIRTUALMODEL](https://tangtang1b1b.github.io/vite-tailwind/)

## 開發紀錄
1. 為了 tailwind css 的練習使用到的技術 :
    * vite + vue3
    * tailwind css
    * google oAuth
    * swiper
2. 第三方登入透過 firebase 的驗證功能去避開跨域問題來完成 :
    * 需要使用自己的金鑰才能使用 (以下)
      * 新增一個.env
      * 在裡面依照firebase.js的變數放入自己的金鑰
