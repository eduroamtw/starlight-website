---
title: geteduroam 設定檔生成：自動生成教學
description: 即時生成任意單位的設定檔，使用中國科大與西安科大的測試伺服器。
---

## 注意事項

1. 此程式並未執行帳號有效性測試，僅根據憑證回傳有無判斷 RADIUS 是否接受認證。
在公開散布設定檔前，請進行人工測試複驗，確認是否能正常使用。
2. 本程式主要為分析 log 檔案，並提取所需資訊，製成設定檔。
我們不對帳號測試網站回傳的資料做任何擔保，如果你是 eduroam SP 或 iDP，建議優先使用貴單位的 RADIUS Server。
3. 如貴單位已經支援官方 eduroam CAT 服務，則建議使用官方服務 [Link](https://cat.eduroam.org/)。

## 系統需求

- Google 帳號 (Google Workspace 需管理員有啟用 Google Colab 服務，建議使用個人帳號，免費。)
- 網路

## 使用方法
  
<a href="https://colab.research.google.com/github/eduroamtw/eduroam_profile_generater_colab/blob/main/eduroam_profile_generater_colab.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>  

0. 點選上方的 `Open in Colab`。
1. 在 Google Colab 中，點選右方的 `Connect`，如果沒有登入 Google 帳號，請先登入。
2. 之後依序點選左上方的 `Runtime` -> `Run all`，或者同時按下鍵盤上的 `Ctrl` + `F9` 按鍵，程式將會自動安裝所需環境以及釋放依賴檔案。
3. 請依據提示，輸入您單位 eduroam 帳號 @ 後的內容 (不含 @)。
4. 請選擇資訊來源伺服器，可直接按 `Enter` 下一步。
5. 約 30 至 60 秒後，您單位的設定檔將自動生成並下載。
6. 請到 [eduroam.app](https://www.eduroam.app/) 下載設定程式，並將剛才生成的設定檔匯入。  
詳細教學請參見 [geteduroam 使用教學](/guides/geteduroam/)。
7. 連線 eduroam。