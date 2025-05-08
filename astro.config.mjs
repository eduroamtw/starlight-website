// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightFullViewMode from 'starlight-fullview-mode'

// https://astro.build/config
export default defineConfig({
	site: 'https://edur.isli.me',
	integrations: [
		starlight({
			title: 'eduroamTW 臺灣第三方資料庫',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/eduroamtw' }],
			sidebar: [
				{ slug: 'starts/gettingstart' },
				{ slug: 'about' },
				{
					label: '服務一覽',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'iDP 設定檔資料庫', slug: 'services/idp_profile_db' },
						{ label: 'iDP Realm & 憑證資料庫', slug: 'services/idp_realm_cert_db' },
						{ label: '設定檔線上 / 單機生成器', slug: 'services/profile_gen' },
						{ label: 'TANetRoaming 向上相容設定檔', slug: 'services/offload' },
						],
				},
				{
					label: '手冊',
					autogenerate: { directory: 'guides' },
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
				})
			],
		}),
	],
});