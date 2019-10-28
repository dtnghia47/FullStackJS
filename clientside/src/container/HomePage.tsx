import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'

import { get } from 'lodash'

import PostItem, { DataProps } from '../components/PostItem'
import LazyLoadData from '../components/LazyLoad'

import * as PostAction from '../action/post'

interface MyProps {
  data?: Array<DataProps>
  getlistData?: Function,
  dispatch?: Dispatch
}

interface MyState {
  // use loading if we need in future when wait api response
  loading?: boolean,
  page: number,
}

const PER_PAGE = 2

class HomePage extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      page: 1
    };
  }

  componentDidMount() {
    // this.props.getlistData()
    const { dispatch } = this.props
    dispatch && dispatch(PostAction.getList())
  }

  renderList = (): JSX.Element => {
    const { data = [] } = this.props
    const { page } = this.state
    let result: any = data.slice(0, page * PER_PAGE).map((item, index) => <PostItem key={index} data={item} />)
    return result
  }

  onLoadMore() {
    const { data = [] } = this.props
    let { page } = this.state
    if (page <= Math.ceil(data.length / PER_PAGE)) {
      page += 1
      this.setState({ page })
    }
  }

  render() {
    const { loading } = this.state
    return (
      <div>
        <h1>this is home HomePage</h1>
        <LazyLoadData
          loading={loading}
          onLoad={() => this.onLoadMore()}>
          {this.renderList()}
        </LazyLoadData>
        <p>A simple example repo</p>
      </div>
    )
  }
}

export default connect(state => {
  const post = get(state, 'post', {});
  return { ...post };
}

)(HomePage)