import { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import Link from 'next/link';

import { get } from 'lodash'

import PostItem, { DataProps } from '../src/components/PostItem'
// import * as PostAction from '../src/action/post'
import { getList } from '../src/action/post'

interface Props {
  data: Array<DataProps>
  getlistData: Function
}

class HomePage extends Component<Props> {
  public componentDidMount() {
    this.props.getlistData()
  }

  render() {
    const { data } = this.props
    return (
      <div>
        <Head>
          <title>Home </title>
        </Head>
        <h1>this is home HomePage</h1>
        <Link href={'/demo'} >
          link demo
        </Link>
        {
          data.map(item => {
            const key = item.id
            return <PostItem key={key} data={item} />
          })
        }
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