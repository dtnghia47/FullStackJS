import { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import Link from 'next/link';

import { get } from 'lodash'

import PostItem, { DataProps } from '../src/components/PostItem'
import LazyLoadData from '../src/components/LazyLoad'
import { getList } from '../src/action/post'

interface MyProps {
  data: Array<DataProps>
  getlistData: Function,
}

interface MyState {
  // use loading if we need in future when wait api response
  loading?: boolean,
  page: number,
}

const PER_PAGE = 2

class HomePage extends Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      page: 1
    };
  }

  public componentDidMount() {
    this.props.getlistData()
  }

  public renderList = (data = []): JSX.Element => {
    const { page } = this.state
    let result: any = data.slice(0, page * PER_PAGE).map((item, index) => <PostItem key={index} data={item} />)
    return result
  }

  onLoadMore() {
    const { data } = this.props
    let { page } = this.state
    if (page <= Math.ceil(data.length / PER_PAGE)) {
      page += 1
      this.setState({ page })
    }
  }

  render() {
    const { data } = this.props
    const { loading } = this.state
    return (
      <div>
        <Head>
          <title>Home </title>
        </Head>
        <h1>this is home HomePage</h1>
        <Link href={'/demo'} >
          link demo
        </Link>
        <LazyLoadData
          loading={loading}
          onLoad={() => this.onLoadMore()}>
          {this.renderList(data)}
        </LazyLoadData>
        <p>A simple example repo</p>
      </div>
    )
  }
}

export default connect(state => {
  const post = get(state, 'post', {});
  return { ...post };
}, (dispatch: Dispatch) => {
  return {
    getlistData: (params) => dispatch(getList(params))
  }
}

)(HomePage)