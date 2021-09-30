module.exports = {
  sidebar: {
    '/algorithm/': [
      {
        title: '算法与数据结构',
        collapsable: false,
        sidebarDepth: 5,
        children: [
          '/algorithm/',
          {
            title: '数据结构',
            collaspable: false,
            children: addPathPrefix('/algorithm/data-structure/', [
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
              'segment-tree'
            ])
          },
          {
            title: '算法',
            collapsable: false,
            children: addPathPrefix('/algorithm/algorithms/', ['', 'array-sorting-algorithms'])
          }
        ]
      }
    ],
    '/frontend/': [
      {
        title: '前端',
        collapsable: false,
        sidebarDepth: 5,
        children: [
          '/frontend/',
          {
            title: 'Browser',
            collaspable: true,
            children: addPathPrefix('/frontend/browser/', [
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
              'web-performance'
            ])
          },
          {
            title: 'JavaScript',
            collaspable: true,
            children: addPathPrefix('/frontend/js/', [
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
              'js-meta-programming',
              'js-modules',
              'js-strict-mode',
              'js-es2020',
              'js-es2021'
            ])
          },
          {
            title: 'CSS',
            collaspable: true,
            children: addPathPrefix('/frontend/css/', [
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
              'css-filters-blending-clipping-masking'
            ])
          }
        ]
      }
    ],
    '/backend': [
      {
        title: '后端',
        collapsable: false,
        sidebarDepth: 5,
        children: [
          {
            title: 'Nodejs',
            collapsable: true,
            children: addPathPrefix('/backend/nodejs/', ['', 'events'])
          }
        ]
      }
    ]
  }
}

function addPathPrefix(prefix, list) {
  return list.map(filename => `${prefix}${filename}`)
}
