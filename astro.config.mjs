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
					label: '文件',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '開始', slug: 'documents/start' },
					],
				},
				{
					label: '資訊',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '關於我們', slug: 'teams/about' },
						{ label: '服務列表', slug: 'teams/services' },
						{ label: '貢獻者', slug: 'teams/reference' },
					],
				},
				{
					label: '手冊',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});