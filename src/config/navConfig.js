/**
 * 导航配置 - 单一数据源
 * 侧边栏菜单、路由、页面组件都由这份配置驱动。
 * 新增/修改导航只需改这里，无需改动 Sidebar 和路由代码。
 */
export const topMenuList = [
  { key: 'new-task', label: '新工作任务', icon: '🖊️', path: '/new-task' },
  { key: 'new-chat', label: '新对话', icon: '💬', path: '/new-chat' },
  { key: 'timer-task', label: '定时任务', icon: '🕒', path: '/timer-task' },
  { key: 'plugins', label: '插件·技能·伙伴', icon: '🔗', path: '/plugins' },
  { key: 'cloud', label: '云盘', icon: '☁️', path: '/cloud' },
  { key: 'api', label: 'API 服务', icon: '🔌', path: '/api' },
  { key: 'more', label: '更多', icon: '▸', path: '/more' },
];

/**
 * 分组导航：置顶 / 项目 / 最近
 */
export const groupMenus = [
  {
    groupTitle: '置顶',
    items: [
      { key: 'main-chat', label: '主对话', icon: '📱', path: '/chat/main' },
    ],
  },
  {
    groupTitle: '项目',
    items: [
      { key: 'create-project', label: '创建新项目', icon: '➕', path: '/project/create' },
    ],
  },
  {
    groupTitle: '最近',
    items: [
      { key: 'can-write-code', label: '能否写代码', icon: '💬', path: '/chat/can-write-code' },
      { key: 'cat-rain', label: '小猫乡间遇雨', icon: '💬', path: '/chat/cat-rain' },
      { key: 'login-issue', label: '登录后无法选择对话模式的原因', icon: '💬', path: '/chat/login-issue' },
      { key: 'intro', label: '自我介绍', icon: '💬', path: '/chat/intro' },
    ],
  },
];

/** 展开全部扁平化菜单项，便于路由/高亮匹配 */
export const flattenMenus = [...topMenuList, ...groupMenus.flatMap((g) => g.items)];
