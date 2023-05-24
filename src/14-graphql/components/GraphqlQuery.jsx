import { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import GraphqlDel from './GraphqlDel';

export default class GraphqlQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  query = gql`
    query getFilmList($id: String!) {
      getFilmList(id: $id) {
        id
        filmName
        price
      }
    }
  `;

  renderList(data, refetch) {
    return data?.getFilmList.length ? (
      data?.getFilmList?.map((item) => {
        return (
          <div key={item.id} style={{ display: 'flex' }}>
            <div>id：{item.id}</div>
            <div style={{ margin: '4px' }}></div>
            <div>电影名：{item.filmName}</div>
            <div style={{ margin: '4px' }}></div>
            <div>价格：{item.price}</div>
            <div style={{ margin: '4px' }}></div>
            <div>
              <GraphqlDel
                id={item.id}
                cb={() => {
                  // 父传子
                  refetch();
                }}
              />
            </div>
          </div>
        );
      })
    ) : (
      <div>空空如也</div>
    );
  }

  render() {
    return (
      // Query只有在variables修改的时候才会重新render
      <Query
        query={this.query}
        variables={{
          id: this.state.value,
        }}
      >
        {/* refetch让Query组件强制render */}
        {({ loading, data, refetch }) => {
          // 必须让GraphqlAdd组件调用到refetch，才会强制render，所以把refetch回传给父组件
          this.props.cb(refetch);
          return !loading ? (
            this.renderList(data, refetch)
          ) : (
            <div>Loading中</div>
          );
        }}
      </Query>
    );
  }
}
