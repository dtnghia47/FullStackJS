import { Component } from 'react';
import Head from 'next/head';

class DemoPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Demo Page</title>
        </Head>
        <h1>this is home Demo Page</h1>
        <p>show example page, if we want add new page or test code splitting or something</p>
      </div>
    )
  }
}

export default DemoPage