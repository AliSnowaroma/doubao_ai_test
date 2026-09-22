import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import NewTask from '../pages/NewTask/NewTask';
import NewChat from '../pages/NewChat/NewChat';
import TimerTask from '../pages/TimerTask/TimerTask';
import Plugins from '../pages/Plugins/Plugins';
import Cloud from '../pages/Cloud/Cloud';
import ApiService from '../pages/ApiService/ApiService';
import More from '../pages/More/More';
import MainChat from '../pages/MainChat/MainChat';
import CreateProject from '../pages/CreateProject/CreateProject';
import ChatDetail from '../pages/ChatDetail/ChatDetail';

/**
 * 路由表：/ 由 Layout 包一层，内部再根据路径渲染对应页面
 */
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* 默认落地到“能否写代码”对话，模拟设计稿高亮项 */}
        <Route index element={<Navigate to="/chat/can-write-code" replace />} />
        <Route path="new-task" element={<NewTask />} />
        <Route path="new-chat" element={<NewChat />} />
        <Route path="timer-task" element={<TimerTask />} />
        <Route path="plugins" element={<Plugins />} />
        <Route path="cloud" element={<Cloud />} />
        <Route path="api" element={<ApiService />} />
        <Route path="more" element={<More />} />
        <Route path="chat/main" element={<MainChat />} />
        <Route path="project/create" element={<CreateProject />} />
        <Route path="chat/:id" element={<ChatDetail />} />
      </Route>
    </Routes>
  );
}
