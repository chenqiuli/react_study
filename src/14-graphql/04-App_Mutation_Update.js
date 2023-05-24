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
          <GraphqlUpdate></GraphqlUpdate>
        </div>
      </ApolloProvider>
    );
  }
}


class GraphqlUpdate extends Component {
  update = gql`
    mutation updateFilm($id: String!, $input: FilmInput){
      updateFilm(id: $id, input: $input){
        id,
        filmName,
        price
      },
    }
  `;

  render () {
    return <Mutation
      mutation={this.update}
    >
      {(update, { data }) => {
        console.log(data);
        return (
          <div>
            <button onClick={() => {
              update({
                variables: {
                  id: "646c74f18552cc4278f6cfc5",
                  input: {
                    filmName: "1111-修改",
                    price: 200
                  }
                }
              });
            }}>update</button>
            <div>
              <p>电影名称：{data?.updateFilm?.filmName}</p>
              <p>电影价格：{data?.updateFilm?.price}</p>
            </div>
          </div>
        );
      }}
    </Mutation>;
  }
}

export default App;







