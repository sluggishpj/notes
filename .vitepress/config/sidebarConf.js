export default {
  sidebar: {
    '/frontend/': {
      text: '前端',
      collapsed: false,
      sidebarDepth: 5,
      items: [
        {
          text: 'Browser',
          collapsed: true,
          items: addPathPrefix('/frontend/browser/', [
            '',
            'dom',
            'events',
            'bom',
            'cross-domain',
            'storage',
            'render',
            'pwa',
            'memory-management',
            'web-security',
            'web-performance',
          ]),
        },
        {
          text: 'JavaScript',
          collapsed: true,
          items: addPathPrefix('/frontend/js/', [
            '',
            'js-in-html',
            'js-grammar-and-types',
            'js-control-flow-and-error-handling',
            'js-functions',
            'js-expressions-and-operators',
            'js-numbers-and-dates',
            'js-text-formatting',
            'js-regular-expressions',
            'js-indexed-collections',
            'js-keyed-collections',
            'js-working-with-objects',
            'js-promises',
            'js-iterators-and-generators',
            'js-meta-programming',
            'js-modules',
            'js-strict-mode',
            'js-es2020',
            'js-es2021',
            'js-es2022',
          ]),
        },
        {
          text: 'CSS',
          collapsed: true,
          items: addPathPrefix('/frontend/css/', [
            '',
            'css-css-and-documents',
            'css-selectors',
            'css-specificity-and-cascade',
            'css-values-and-units',
            'css-fonts',
            'css-text-properties',
            'css-box-model',
            'css-border',
            'css-color-and-background-and-gradients',
            'css-floating',
            'css-shapes',
            'css-positioning',
            'css-flexbox-layout',
            'css-grid-layout',
            'css-table-layout',
            'css-transforms',
            'css-transitions',
            'css-animations',
            'css-filters-blending-clipping-masking',
          ]),
        },
        {
          text: 'Vue',
          collapsed: true,
          items: addPathPrefix('/frontend/vue/', [
            '',
            'basic',
            'data-driven',
            'reactivity',
            'next-tick',
            'vue-router',
            'vuex',
          ]),
        },
        {
          text: 'Webpack',
          collapsed: true,
          items: addPathPrefix('/frontend/webpack/', ['', 'basic', 'principle']),
        },
        {
          text: 'Typescript',
          collapsed: true,
          items: addPathPrefix('/frontend/typescript/', ['', 'note']),
        },
      ],
    },

    '/backend': {
      text: '后端',
      collapsed: false,
      sidebarDepth: 5,
      items: [
        {
          text: 'Nodejs',
          collapsed: true,
          items: addPathPrefix('/backend/nodejs/', ['', 'events']),
        },
      ],
    },

    '/algorithm/': {
      text: '算法与数据结构',
      collapsed: false,
      sidebarDepth: 5,
      items: [
        {
          text: '数据结构',
          collapsed: false,
          items: addPathPrefix('/algorithm/data-structure/', [
            '',
            'linked-list',
            'doubly-linked-list',
            'queue',
            'stack',
            'hash-table',
            'heap',
            'priority-queue',
            'trie',
            'binary-tree',
            'binary-search-tree',
            'avl-tree',
            'red-black-tree',
            'segment-tree',
          ]),
        },
        {
          text: '算法',
          collapsed: false,
          items: addPathPrefix('/algorithm/algorithms/', ['', 'array-sorting-algorithms']),
        },
      ],
    },

    '/interview': {
      text: 'Interview',
      collapsed: true,
      items: addPathPrefix('/interview/', ['', 'html', 'css', 'javascript', 'mobile-web', 'integrate']),
    },
    '/cs': {
      text: '计算机基础',
      collapsed: false,
      sidebarDepth: 5,
      items: [
        {
          text: '计算机网络',
          collapsed: true,
          items: addPathPrefix('/cs/network/', ['', 'http']),
        },
        {
          text: '操作系统',
          collapsed: true,
          items: addPathPrefix('/cs/os/', ['']),
        },
      ],
    },
    '/tools': {
      text: '工具',
      collapsed: true,
      items: addPathPrefix('/tools/', ['', 'git', 'nginx', 'linux']),
    },
    '/thinking': {
      text: '编程思想',
      collapsed: false,
      sidebarDepth: 5,
      items: [
        {
          text: '设计模式',
          collapsed: true,
          items: addPathPrefix('/thinking/design-patterns/', ['']),
        },
      ],
    },
  },
}

function addPathPrefix(prefix, list) {
  // return list.map((filename) => `${prefix}${filename}`)
  return list.map((filename) => ({ text: filename || 'index', link: `${prefix}${filename}` }))
}
