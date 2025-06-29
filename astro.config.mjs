// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightFullViewMode from 'starlight-fullview-mode'
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// https://astro.build/config
export default defineConfig({
	site: 'https://edur.isli.me',
	integrations: [
		starlight({
			title: 'eduroam 台灣第三方資料庫',
			logo: {
				light: './src/assets/light-logo.png',
				dark: './src/assets/dark-logo.png',
				replacesTitle: true,
		},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/eduroamtw' }],
			sidebar: [
				{
					label: "leadingNavLinks",
					items: [
						{ label: "支援文件", link: "starts/gettingstart" },
						{ label: "關於我們", link: "about" }
					]
				},
				{ slug: 'starts/gettingstart' },
				{ slug: 'about' },
				{
					label: '服務一覽',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'geteduroam IdP 設定檔資料庫', slug: 'services/idp_profile_db' },
						{ label: 'iDP Realm & 憑證資料庫', slug: 'services/idp_realm_cert_db' },
						{ label: 'TANetRoaming 向上相容設定檔', slug: 'services/offload' },
						{ label: '各校 RADIUS 服務監測', slug: 'services/status' },
						],
				},
				{
					label: '手冊',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '帳號：申請教學', slug: 'guides/idplist' },
						{ label: '連線：跨平台自動設定', slug: 'guides/geteduroam' },
						{ label: '連線：Windows 手動設定 (TTLS)', slug: 'guides/winttls' },
						{ label: '連線：Windows 手動設定 (GTC)', slug: 'guides/wingtc' },
						{ label: '設定檔生成：自動生成教學', slug: 'guides/autogen' },
						{ label: '設定檔生成：手動生成教學', slug: 'guides/selfgen' },
						],
				},
				{
					label: '文件',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '外部連結', slug: 'documents/links' },
					],
				},
			],
			plugins: [
				starlightFullViewMode({
					leftSidebarEnabled: true,  rightSidebarEnabled: false
				}),
				starlightUtils({
					navLinks: {
						leading: { useSidebarLabelled: "leadingNavLinks" }
					}
				}),
			],
		}),
	],
});