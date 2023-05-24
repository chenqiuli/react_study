import { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { message } from 'antd';

export default class GraphqlDel extends Component {
  dels = gql`
    mutation deleteFilm($id: String!) {
      deleteFilm(id: $id)
    }
  `;

  render() {
    return (
      <Mutation mutation={this.dels}>
        {(dels, { data }) => {
          console.log(data);
          return (
            <div>
              <button
                onClick={() => {
                  dels({
                    variables: {
                      id: this.props.id,
                    },
                  }).then((res) => {
                    console.log(res);
                    if (res?.data?.deleteFilm === 1) {
                      message.success('删除成功');
                      this.props.cb();
                    }
                  });
                }}
              >
                del
              </button>
            </div>
          );
        }}
      </Mutation>
    );
  }
}
