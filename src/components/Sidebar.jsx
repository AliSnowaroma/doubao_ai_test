/**
 * 左侧导航组件
 * 通过 NavLink 实现高亮（active 状态自动匹配当前路由）。
 */
import { NavLink } from 'react-router-dom';
import { topMenuList, groupMenus } from '../config/navConfig';
import './Sidebar.scss';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">豆包</h2>
        <span className="search-icon" title="搜索">🔍</span>
      </div>

      {/* 顶部功能菜单 */}
      <div className="sidebar-menu">
        {topMenuList.map((item) => (
          <NavLink
            key={item.key}
            to={item.path}
            className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </NavLink>
        ))}
      </div>

      {/* 分组导航 */}
      <div className="sidebar-groups">
        {groupMenus.map((group) => (
          <div className="group-block" key={group.groupTitle}>
            <div className="group-title">{group.groupTitle}</div>
            {group.items.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`}
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
