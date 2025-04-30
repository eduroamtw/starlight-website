// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://edur.isli.me',
	integrations: [
		starlight({
			title: 'eduroamTW 第三方資料庫',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/eduroamtw' }],
			sidebar: [
				{
					label: '開始',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '開始', slug: 'starts/gettingstart' },
					],
				},
				{
					label: '文件',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '外部連結', slug: 'documents/start' },
					],
				},
				{
					label: '手冊',
					autogenerate: { directory: 'guides' },
				},
				{
					label: '服務一覽',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'iDP 設定檔資料庫', slug: 'idp_profile_db' },
						{ label: 'iDP Realm & 憑證資料庫', slug: 'idp_realm_cert_db' },
						{ label: '設定檔線上 / 單機生成器', slug: 'profile_gen' },
						{ label: 'TANetRoaming 向上相容設定檔', slug: 'offload' },
						],
				},
				{
					label: '團隊',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '關於我們', slug: 'teams/about' },
						{ label: '貢獻者', slug: 'teams/reference' },
					],

				},
			],
		}),
	],
});