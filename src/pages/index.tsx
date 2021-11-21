import { Menu, Layout, Table, Space, Tag } from 'antd';

const Sider = Layout.Sider;
const Content = Layout.Content;
const Footer = Layout.Footer;
const Header = Layout.Header;

const BOOLEAN_TAG_TYPE = {
  0: <Tag color='green'>GET</Tag>,
  1: <Tag color='red'>LOSS</Tag>,
};
const list = [
  '比赛',
  '队伍',
  '选方',
  '河道蟹',
  '峡谷先锋',
  '小龙',
  '大龙',
  '5杀时间',
  '10杀时间',
  '比赛时间',
  '总人头',
];
const columns = [
  {
    title: '比赛',
    dataIndex: 'match',
    key: 'match',
    render: () => 'IG vs RNG'
  },
  {
    title: '队伍',
    dataIndex: 'teamName',
    key: 'teamName',
  },
  {
    title: '选方',
    dataIndex: 'choose',
    key: 'choose',
  },
  {
    title: '河道蟹',
    dataIndex: 'date1',
    key: 'date1',
  },
  {
    title: '峡谷先锋',
    dataIndex: 'date2',
    key: 'date2',
  },
  {
    title: '小龙',
    dataIndex: 'date3',
    key: 'date3',
  },
  {
    title: '大龙',
    dataIndex: 'date4',
    key: 'date4',
  },
  {
    title: '5杀时间',
    dataIndex: 'date5',
    key: 'date5',
  },
  {
    title: '10杀时间',
    dataIndex: 'date6',
    key: 'date6',
  },
  {
    title: '比赛时间',
    dataIndex: 'date7',
    key: 'date7',
  },
  {
    title: '总人头',
    dataIndex: 'totalKill',
    key: 'totalKill',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, record) => (
      <Space size='middle'>
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default function App() {
  return (
    <Layout>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: '100vh',
        }}
      >
        <Table columns={columns} dataSource={data} />
      </Content>
    </Layout>
  );
}
