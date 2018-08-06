
module.exports = {
    base: '/The-Teochew-Romanization-System/',
    dest: 'dist',
    title: '潮州話羅馬字注音方案',
    keywords: '潮州話羅馬字注音方案,潮正會,潮州话,潮语,潮州,注音,潮羅,潮州方言',
    description: '第二版·丙申孟冬',
    author: '潮州話正音正字促進會',
    head: [
        ['meta', { 'http-equiv': 'Cache-Control', 'content': 'no-transform' }],
        ['meta', { 'http-equiv': 'Cache-Control', 'content': 'no-siteapp' }],
        ['link', { rel: 'apple-touch-icon', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', sizes: '48x48', type: 'image/png', href: '/favicon-48x48.png' }],
        ['link', { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' }],
        ['link', { 'rel': 'shortcut icon', href: 'favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json?v=47r9B6WNWa' }],
        ['meta', { 'name': 'apple-mobile-web-app-title', content: '潮州話羅馬字注音方案' }],
        ['meta', { 'name': 'application-name', content: '潮州話羅馬字注音方案' }],
        ['meta', { 'name': 'theme-color', content: '#ffffff' }]
    ],
    markdown: {
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#'
        },
        toc: { includeLevel: [1, 2, 3] },
        config: md => {
            md.set({ breaks: true })
            // 使用更多的 markdown-it 插件!
            //md.use(require('markdown-it-xxx'))
        }
    },
    locales: {
        '/': {
            lang: 'zh-HK'
        },
        '/en-US/': {
            lang: 'en-US',
            title: 'the Teochew Romanization System',
            description: 'Second-Edition · Lunar October'
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: '選擇語言',
                label: '繁體中文',
                repoLabel: '查看源碼',
                sidebar: {
                    '/': [/* ... */],
                    '/nested/': [/* ... */]
                }
            },
            '/en-US/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Help us improve this page!',
                repoLabel: 'View source',
                nav: [
                    { text: 'Home', link: '/en-US/' },
                    {
                        text: 'A. Initials',
                        link: 'initials'
                    },
                    {
                        text: 'B. Rhymes',
                        items: [
                            { text: 'Main rhymes', link: 'finals#Main-rhymes' },
                            { text: 'Secondary rhymes', link: 'finals#Secondary-rhymes' },
                            { text: "Editor's note", link: "finals#Editor's-note" }
                        ]
                    },
                    {
                        text: 'C. Tone',
                        items: [
                            { text: 'Teochew eight octave tune', link: 'tone#Teochew-eight-octave-tune' },
                            { text: 'Phonetic writing', link: 'tone#phonetic-writing' },
                            { text: 'Distinguish pronunciation', link: 'tone#distinguish-pronunciation' },
                        ]
                    },
                    { text: 'Website', link: 'https://hiteo.pw' }
                ]
            }
        },
        nav: [
            { text: '封面', link: '/' },
            {
                text: 'A.聲母表',
                link: '/initials'
            },
            {
                text: 'B.韻母表', link: 'finals',
                items: [
                    { text: '主韻表', link: 'finals#主韻表' },
                    { text: '分韻表', link: 'finals#分韻表' },
                    { text: "編者按", link: "finals#編者按" }
                ]
            },
            {
                text: 'C.聲調表',
                items: [
                    { text: '潮州話八音八調', link: 'tone#潮州話八音八調' },
                    { text: '辨別讀音', link: 'tone#辨別讀音' },
                    { text: '注音書寫', link: 'tone#注音書寫' }
                ]
            },
            { text: '主站', link: 'https://hiteo.pw' },
        ],
        sidebar: [
            '/'
        ],
        displayAllHeaders: true,
        sidebar: 'auto',
        lastUpdated: '上次更新:',

        //repo: 'hiteochew/The-Teochew-Romanization-System',
        docsRepo: 'hiteochew/The-Teochew-Romanization-System',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '幫助我們改善此頁面！'
    }
}
