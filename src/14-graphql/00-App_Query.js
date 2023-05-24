// 后端代码写在nodejs/32-GraphQL

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
        <GraphqlQuery></GraphqlQuery>
      </ApolloProvider>
    );
  }
}


class GraphqlQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }


  query = gql`
    query getFilmList($id: String!) {
      getFilmList(id: $id) {
        id,
        filmName,
        price
      },
    }
  `;

  render () {
    return <Query query={this.query} variables={{
      id: this.state.value,
    }}>
      {({ loading, data }) => {
        return (
          <div>
            <input value={this.state.value} onChange={(evt) => {
              this.setState({
                value: evt.target.value
              });
            }} />
            {loading ? <div>正在loading中</div> : data.getFilmList.map(item => {
              return (
                <div key={item.id} style={{ display: 'flex' }}>
                  <div>id：{item.id}</div>
                  <div style={{ margin: '4px' }}></div>
                  <div>电影名：{item.filmName}</div>
                  <div style={{ margin: '4px' }}></div>
                  <div>价格：{item.price}</div>
                </div>
              );
            })}
          </div>
        );
      }}
    </Query>;
  }
}

export default App;