import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import DataContent from './content/DataContent';
import ChaincodeInvokeContent from './content/ChaincodeInvokeContent';
import ChaincodeInstallContent from './content/ChaincodeInstallContent';

const { Sider, Content } = Layout;

// 内容路由：在此配置内容key对应的内容类，切换主页面内容
function ContentRoute(props) {
  if (props.contentKey === 1) {
    return <DataContent />;
  } else if (props.contentKey === 2) {
    return <ChaincodeInvokeContent />;
  } else if (props.contentKey === 3) {
    return <ChaincodeInstallContent />;
  }
  return <h1>侧边栏按钮未绑定对应内容</h1>;
}

export default class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      contentKey: 1,
    };
    this.onCollapse = this.onCollapse.bind(this);
    this.switchContent = this.switchContent.bind(this);
  }

  onCollapse(collapsed) {
    this.setState({ collapsed });
  }

  switchContent(contentKey) {
    this.setState({ contentKey });
  }

  render() {
    return (
      <Layout >
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ minHeight: 1920 }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={() => this.switchContent(1)}>
              <Icon type="user" />
              <span>区块链数据看板</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => this.switchContent(2)}>
              <Icon type="video-camera" />
              <span>智能合约调用</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => this.switchContent(3)}>
              <Icon type="upload" />
              <span>智能合约安装</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
            <ContentRoute contentKey={this.state.contentKey} />
          </Content>
        </Layout>

      </Layout>
    );
  }
}