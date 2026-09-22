/**
 * 左侧导航组件
 * - 通过 NavLink 实现高亮（active 状态自动匹配当前路由）
 * - 顶部搜索图标点击后展开搜索框，可实时搜索并跳转导航
 */
import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { topMenuList, groupMenus, flattenMenus } from '../config/navConfig';
import './Sidebar.scss';

/** 高亮文本中命中的关键词 */
function Highlight({ text, keyword }) {
  if (!keyword) return text;
  const idx = text.toLowerCase().indexOf(keyword.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="hit">{text.slice(idx, idx + keyword.length)}</mark>
      {text.slice(idx + keyword.length)}
    </>
  );
}

function Sidebar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const inputRef = useRef(null);

  const kw = keyword.trim().toLowerCase();
  const results = kw ? flattenMenus.filter((m) => m.label.toLowerCase().includes(kw)) : [];

  const toggleSearch = () => {
    const next = !searchOpen;
    setSearchOpen(next);
    if (next) {
      setKeyword('');
      // 展开后聚焦输入框
      setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
    }
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setKeyword('');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">豆包</h2>
        <span className="search-icon" title="搜索" onClick={toggleSearch}>
          🔍
        </span>
      </div>

      {/* 搜索面板：点击图标后展开 */}
      {searchOpen && (
        <div className="search-panel">
          <div className="search-input-wrap">
            <input
              ref={inputRef}
              className="search-input"
              type="text"
              placeholder="搜索导航…"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') closeSearch();
              }}
            />
            {keyword && (
              <span className="search-clear" onClick={() => setKeyword('')}>
                ✕
              </span>
            )}
          </div>

          {kw ? (
            <div className="search-results">
              {results.length > 0 ? (
                results.map((item) => (
                  <NavLink
                    key={item.key}
                    to={item.path}
                    className="search-result-item"
                    onClick={closeSearch}
                  >
                    <span className="icon">{item.icon}</span>
                    <span className="label">
                      <Highlight text={item.label} keyword={kw} />
                    </span>
                  </NavLink>
                ))
              ) : (
                <div className="search-empty">未找到相关导航</div>
              )}
            </div>
          ) : null}
        </div>
      )}

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
