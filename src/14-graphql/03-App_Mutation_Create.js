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
        <GraphqlCreate></GraphqlCreate>
      </ApolloProvider>
    );
  }
}


class GraphqlCreate extends Component {
  create = gql`
    mutation createFilm($input: FilmInput){
      createFilm(input: $input){
        id,
        filmName,
        price
      }
    }
  `;

  render () {
    return <Mutation
      mutation={this.create}
    >
      {(create, { data }) => {
        console.log(data);
        return (
          <div>
            <button onClick={() => {
              create({
                variables: {
                  input: {
                    filmName: "1111",
                    price: 1000
                  }
                }
              });
            }}>add</button>
            <div>
              <p>电影名称：{data?.createFilm?.filmName}</p>
              <p>电影价格：{data?.createFilm?.price}</p>
            </div>
          </div>
        );
      }}
    </Mutation>;
  }
}

export default App;
