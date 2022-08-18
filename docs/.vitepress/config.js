/*
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-18 13:35:54
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-18 17:08:58
 * @Description: 
 */

function getEffecientToolsSidebar() {
  return {
    text: 'Introduction',
    collapsible: true,
    items: [
      { text: 'Getting started', link: '/guide/efficient-tools/getting-started' },
      { text: 'Configuration', link: '/guide/efficient-tools/configuration' }
    ]
  }
}

function getObsidianPluginsSidebar() {
  return {
    text: 'Obsidian Plugins',
    collapsible: true,
    items: [
      { text: 'obsidian-links-keeper', link: '/guide/obsidian-plugins/obsidian-links-keeper' },
      { text: 'obsidian-translator', link: '/guide/obsidian-plugins/obsidian-translator' }
    ]
  }
}

function getOtherDocsSidebar() {
  return {
    text: 'Reference',
    collapsible: true,
    items: [
      { text: 'Register youdao account', link: '/guide/reference-documentations/register-youdao-account' },
      { text: 'Register Microsoft account', link: '/guide/reference-documentations/register-microsoft-account' }
    ]
  }
}

export default {
  title: 'ET',
  description: 'A toolset for you to improve efficiency.',
  base: '/efficient-tools-doc/',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Efficient Tools',
    logo: '/images/scratch.svg',
    nav: [
      { text: 'Guides', link: '/guide/efficient-tools/getting-started' }
    ],
    editLink: {
      pattern: 'https://github.com/luhaifeng666/efficient-tools-doc/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/luhaifeng666/efficient-tools' }
    ],
    sidebar: [
      getEffecientToolsSidebar(),
      getObsidianPluginsSidebar(),
      getOtherDocsSidebar()
    ]
  }
}
