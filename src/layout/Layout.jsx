import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './Layout.scss';

/**
 * 整体布局：左侧导航 + 右侧内容区（路由出口）
 */
function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
