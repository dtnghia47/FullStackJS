import React, { Component } from 'react';

export interface DataProps {
  id?: number,
  title?: string,
  description?: string
}

export interface PropsType {
  data: DataProps
}

class PostItem extends Component<PropsType> {
  render() {
    const { data } = this.props
    return (
      <div className="demo">
        {data.title}
      </div>
    )
  }
}

export default PostItem