import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'
import sidebar from "./sidebar"; // 侧边栏

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: ['/', '/get-started'], // 顶部导航
    sidebar: sidebar, // 侧边栏
  }),

  bundler: webpackBundler(),
})
