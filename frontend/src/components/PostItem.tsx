import { Component } from 'react';

export interface DataProps {
  id?: number,
  title?: string,
  description?: string
}

export interface Demo {
  data: DataProps
}

class PostItem extends Component<Demo> {
  render() {
    const { data } = this.props
    return (
      <div>
        {data.title}
      </div>
    )
  }
}

export default PostItem