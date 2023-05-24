import { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { message } from 'antd';

export default class GraphqlAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmName: '',
      price: '',
    };
  }

  create = gql`
    mutation createFilm($input: FilmInput) {
      createFilm(input: $input) {
        id
        filmName
        price
      }
    }
  `;

  render() {
    return (
      <Mutation mutation={this.create}>
        {(create, { data }) => {
          console.log(data);
          return (
            <div>
              <p>
                filmName:
                <input
                  value={this.state.filmName}
                  onChange={(evt) => {
                    this.setState({ filmName: evt.target.value });
                  }}
                />
              </p>
              <p>
                price:
                <input
                  value={this.state.price}
                  onChange={(evt) => {
                    this.setState({ price: evt.target.value });
                  }}
                />
              </p>
              <p>
                <button
                  onClick={() => {
                    create({
                      variables: {
                        input: {
                          filmName: this.state.filmName,
                          price: Number(this.state.price),
                        },
                      },
                    }).then((res) => {
                      if (res?.data?.createFilm) {
                        this.props.refetch();
                        message.success('添加成功');
                      }
                    });
                  }}
                >
                  add
                </button>
              </p>
            </div>
          );
        }}
      </Mutation>
    );
  }
}
