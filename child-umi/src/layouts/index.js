import { Layout } from 'antd';
import { Outlet } from 'umi';

const { Content } = Layout;

const BasicLayout = (props) => {
  console.log('<-layout->');
  // const { children = <></>, ...rest } = props;
  return (
    <>
      <Layout>
        <Content>
          <Outlet />
          {/* {React.cloneElement(children, rest)} */}
        </Content>
      </Layout>
    </>
  );
};

export default BasicLayout;
