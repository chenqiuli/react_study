import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import GraphqlAdd from './components/GraphqlAdd';
import GraphqlQuery from './components/GraphqlQuery';

const client = new ApolloClient({
  // 配置反向代理解决跨域
  uri: '/graphqldb',
});

class MyApp extends React.Component {
  refetch = null;

  render() {
    return (
      // 生产者-消费者模式传递client
      <ApolloProvider client={client}>
        <GraphqlAdd
          refetch={() => {
            // 传给子组件调用，query就会重新render
            this.refetch();
          }}
        />
        <GraphqlQuery
          cb={(refetch) => {
            // 把refetch存在父组件全局变量中
            this.refetch = refetch;
            // console.log(this.refetch);
          }}
        />
      </ApolloProvider>
    );
  }
}

export default MyApp;
