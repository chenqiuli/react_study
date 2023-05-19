// 后端代码写在nodejs学习笔记中

import React, { Component } from 'react';
import { ApolloProvider, Query, } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  // 配置反向代理解决跨域
  uri: "/graphqldb"
});


class App extends Component {
  render () {
    return (
      // 生产者-消费者模式传递client
      <ApolloProvider client={client}>
        <div>
          <GraphqlQuery></GraphqlQuery>
        </div>
      </ApolloProvider>
    );
  }
}


class GraphqlQuery extends Component {
  query = gql`
    query {
      getFilmList {
        id,
        filmName,
        price
      },
    }
  `;

  render () {
    return <Query query={this.query} >
      {({ loading, data }) => {
        console.log(data);
        return loading ? <div>正在loading中</div> : data.getFilmList.map(item => {
          return (
            <div key={item.id} style={{ display: 'flex' }}>
              <div>电影名：{item.filmName}</div>
              <div style={{ margin: '4px' }}></div>
              <div>价格：{item.price}</div>
            </div>
          );
        });
      }}
    </Query>;
  }
}

export default App;