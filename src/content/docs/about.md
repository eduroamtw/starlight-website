---
title: 關於我們
description: 關於 eduroam 台灣第三方資料庫
---
<a data-flickr-embed="true" href="https://www.flickr.com/photos/sitcon/54480177114/in/album-72177720325586725/" title="月太-1750"><img src="https://live.staticflickr.com/65535/54480177114_4fc4619beb_k.jpg" width="2048" height="1365" alt="月太-1750"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script><br>
大家好，這裡是 eduroam 台灣第三方資料庫，目前主要由 `chilin.h` 和 `e0pwr` 共同維護。<br>
這個計畫最初的動機，只是為了解決連不上學校網路的問題。<br>
當時照著教學設定完成後，發現同樣的設定，在 A 點可以正常連線，但在 B 點就會連線失敗，而這件事理論上不應該發生。<br>
而我們在研讀各種標準、文檔、並且實際交叉測試、做黑箱分析後，發現臺灣的 eduroam 存在架構性問題，例如：<br>
- 身分提供者 (IdP) 提供的設定教學不認證伺服器憑證，會導致受到 Evil twin 攻擊，導致使用者帳號洩漏。
- IdP 伺服器僅支援 PAP (TANetRoaming) 認證，無法使用 eduroam。
- 服務提供者 (SP) 接入點啟用 EAP Termination，導致伺服器憑證認證失敗。
- SP 針對特定 IdP Relam 屏蔽認證、惡意中斷認證等措施。
<br>
上述這些導致無法順利連線的問題，難以在公開文件中找到，只能透過實地黑箱測試的方式得出。在這過程雖然遇到很多困難，但最後還是有研究出成果。<br>
我們將這些資料整理起來，並首次公開在 SITCON 2025 Lightning Talk 上，希望可以讓後來的研究人員可以不用重頭開始黑箱分析整個架構。<br>
而最終目標是讓臺灣的 eduroam 認證服務更透明。且讓臺灣的學術使用者，能夠藉由我們提供的資訊更輕易、安全的連上 eduroam。<br>

目前正在開發、維護的服務有以下幾個：<br>
- 臺灣各 IdP 之 geteduroam 設定檔
    - 進度：穩定度測試中，目前僅公開發布少數單位的設定檔。
- TANetRoaming 向上相容 eduroam 認證服務 (EAP Termination / Offload 集中化)
    - 進度：與漫遊中心內部測試中。
- 跨國認證服務狀態偵測
    - 進度：開發中，目前預計會有中國、巴西、黎巴嫩的反向測試點。
- 線上認證測試 (國內 / 跨國)
    - 進度：開發中。

而未來預計會開發的服務有以下幾個：<br>
- 身分識別提供者 (IdP) 服務狀態偵測
- 服務提供者 (SP) 接入點服務狀態偵測 (少許站點)

## 作者
#### chilin.h
<img src="https://avatars.githubusercontent.com/u/107759974" style="float:right; margin: 5px;" width=128 />

- CyberSecurity / CTF Player / Rhythm Game
- 負責內容：底層技術研究、網頁架設、說明撰寫、主機維運
- Website: https://neko70.net/
- Mail: chilin@neko70.net
<br>

#### e0pwr
<img src="https://avatars.githubusercontent.com/u/53612151" style="float:right; margin: 5px;" width=128 />

- homelab / network / dev / vn / osu!
- 負責內容：程式設計、主機維運、狀態監測
- Website: https://blog.ichika.tw/
- Linktree: https://linktr.ee/e0pwr/
<br>

## 合作單位
#### TANet 無線網路漫遊交換中心 (TANRC)
<img src="https://roamingcenter.ndhu.edu.tw/themes/TANetRoaming_logo.png" style="float:right; margin: 5px;" width=128 />

- eduroam TW NRO
- Website: https://roamingcenter.ndhu.edu.tw/
<br><br><br>

## 測試者
[eartzh](https://github.com/eartzh)<br>
[kohiro](https://www.facebook.com/profile.php?id=61558253318353)<br>
[iceice666](https://github.com/iceice666)<br>
[Sora Otaku](https://soradayo.net/)<br>
[p23](https://p23.tw/)