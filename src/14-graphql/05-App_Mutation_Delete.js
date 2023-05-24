// 后端代码写在nodejs学习笔记中
// 后端代码写在nodejs学习笔记中

import React, { Component } from 'react';
import { ApolloProvider, Mutation, } from "react-apollo";
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
          <GraphqlDelete></GraphqlDelete>
        </div>
      </ApolloProvider>
    );
  }
}


class GraphqlDelete extends Component {
  dels = gql`
    mutation deleteFilm($id: String!){
      deleteFilm(id:$id)
    }
  `;

  render () {
    return <Mutation
      mutation={this.dels}
    >
      {(dels, { data }) => {
        console.log(data);
        return (
          <div>
            <button onClick={() => {
              dels({
                variables: {
                  id: "646c74f18552cc4278f6cfc5",
                }
              });
            }}>del</button>
          </div>
        );
      }}
    </Mutation>;
  }
}

export default App;







