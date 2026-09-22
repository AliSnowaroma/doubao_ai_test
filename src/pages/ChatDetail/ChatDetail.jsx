import { useParams } from 'react-router-dom';
import PlaceholderPage from '../../components/PlaceholderPage';

/**
 * 对话详情页（“最近”分组共用）
 * 根据 URL 参数 :id 显示对应对话标题。
 */
function ChatDetail() {
  const { id } = useParams();
  const titleMap = {
    'can-write-code': '能否写代码',
    'cat-rain': '小猫乡间遇雨',
    'login-issue': '登录后无法选择对话模式的原因',
    intro: '自我介绍',
  };
  const title = titleMap[id] || '对话';

  return <PlaceholderPage title={title} />;
}

export default ChatDetail;
