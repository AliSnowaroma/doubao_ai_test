/**
 * 通用“待开发”占位页
 * 所有空页面组件复用此组件，标题从路由配置传入。
 */
function PlaceholderPage({ title }) {
  return (
    <div className="placeholder-page">
      <h1>{title}</h1>
      <p>该功能开发中，敬请期待。</p>
      <div className="placeholder-badge">待开发</div>
    </div>
  );
}

export default PlaceholderPage;
