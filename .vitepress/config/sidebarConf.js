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
            {
              text: '说明',
              link: '',
            },
            {
              text: 'DOM',
              link: 'dom',
            },
            {
              text: '事件',
              link: 'events',
            },
            {
              text: 'BOM',
              link: 'bom',
            },
            {
              text: '跨域',
              link: 'cross-domain',
            },
            {
              text: '存储',
              link: 'storage',
            },
            {
              text: '渲染机制',
              link: 'render',
            },
            {
              text: 'PWA',
              link: 'pwa',
            },
            {
              text: '内存管理',
              link: 'memory-management',
            },
            {
              text: 'Web安全',
              link: 'web-security',
            },
            {
              text: 'Web性能',
              link: 'web-performance',
            },
          ]),
        },
        {
          text: 'JavaScript',
          collapsed: true,
          items: addPathPrefix('/frontend/js/', [
            {
              text: '说明',
              link: '',
            },
            {
              text: '在HTML中使用JS',
              link: 'js-in-html',
            },
            {
              text: '语法与数据结构',
              link: 'js-grammar-and-types',
            },
            {
              text: '流程控制与异常处理',
              link: 'js-control-flow-and-error-handling',
            },
            {
              text: '函数',
              link: 'js-functions',
            },
            {
              text: '表达式与运算符',
              link: 'js-expressions-and-operators',
            },
            {
              text: '数字和日期',
              link: 'js-numbers-and-dates',
            },
            {
              text: '字符串与文本',
              link: 'js-text-formatting',
            },
            {
              text: '正则表达式',
              link: 'js-regular-expressions',
            },
            {
              text: '索引集合类',
              link: 'js-indexed-collections',
            },
            {
              text: '带键的集合',
              link: 'js-keyed-collections',
            },
            {
              text: '对象',
              link: 'js-working-with-objects',
            },
            {
              text: 'Promise',
              link: 'js-promises',
            },
            {
              text: 'Iterators and generators',
              link: 'js-iterators-and-generators',
            },
            {
              text: '元编程',
              link: 'js-meta-programming',
            },
            {
              text: 'JS modules 模块',
              link: 'js-modules',
            },
            {
              text: 'JS 严格模式',
              link: 'js-strict-mode',
            },
            {
              text: 'ES2020',
              link: 'js-es2020',
            },
            {
              text: 'ES2021',
              link: 'js-es2021',
            },
            {
              text: 'ES2022',
              link: 'js-es2022',
            },
            {
              text: 'ES2023',
              link: 'js-es2023',
            },
            {
              text: 'ES2024',
              link: 'js-es2024',
            },
          ]),
        },
        {
          text: 'CSS',
          collapsed: true,
          items: addPathPrefix('/frontend/css/', [
            {
              text: '说明',
              link: '',
            },
            {
              text: 'CSS和文档',
              link: 'css-css-and-documents',
            },
            {
              text: '选择器',
              link: 'css-selectors',
            },
            {
              text: '特殊性和层叠',
              link: 'css-specificity-and-cascade',
            },
            {
              text: '值和单位',
              link: 'css-values-and-units',
            },
            {
              text: '字体',
              link: 'css-fonts',
            },
            {
              text: '文本属性',
              link: 'css-text-properties',
            },
            {
              text: '盒子模型',
              link: 'css-box-model',
            },
            {
              text: '边框',
              link: 'css-border',
            },
            {
              text: '颜色/背景/渐变',
              link: 'css-color-and-background-and-gradients',
            },
            {
              text: '浮动',
              link: 'css-floating',
            },
            {
              text: '形状',
              link: 'css-shapes',
            },
            {
              text: '定位',
              link: 'css-positioning',
            },
            {
              text: 'Flex布局',
              link: 'css-flexbox-layout',
            },
            {
              text: 'Grid布局',
              link: 'css-grid-layout',
            },
            {
              text: 'Table布局',
              link: 'css-table-layout',
            },
            {
              text: '变换 transforms',
              link: 'css-transforms',
            },
            {
              text: '过渡 transition',
              link: 'css-transitions',
            },
            {
              text: '动画 animation',
              link: 'css-animations',
            },
            {
              text: '滤镜/混合/裁剪和遮罩',
              link: 'css-filters-blending-clipping-masking',
            },
          ]),
        },
        {
          text: 'Vue',
          collapsed: true,
          items: addPathPrefix('/frontend/vue/', [
            {
              text: '说明',
              link: '',
            },
            {
              text: 'Vue基础知识',
              link: 'basic',
            },
            {
              text: '数据驱动',
              link: 'data-driven',
            },
            {
              text: '响应式原理',
              link: 'reactivity',
            },
            {
              text: 'Vue.nextTick',
              link: 'next-tick',
            },
            {
              text: 'Vue Router',
              link: 'vue-router',
            },
            {
              text: 'Vuex',
              link: 'vuex',
            },
          ]),
        },
        {
          text: 'Webpack',
          collapsed: true,
          items: addPathPrefix('/frontend/webpack/', [
            {
              text: '说明',
              link: '',
            },
            {
              text: 'webpack基础',
              link: 'basic',
            },
            {
              text: 'webpack原理',
              link: 'principle',
            },
          ]),
        },
        {
          text: 'Typescript',
          collapsed: true,
          items: addPathPrefix('/frontend/typescript/', [
            {
              text: '说明',
              link: '',
            },
            {
              text: '小记',
              link: 'note',
            },
          ]),
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
  return list.map((config) => {
    if (typeof config === 'object') {
      return {
        ...config,
        link: `${prefix}${config.link}`,
      }
    }
    return { text: config || 'index', link: `${prefix}${config}` }
  })
}
