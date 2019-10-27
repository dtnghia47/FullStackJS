import App, { Container } from 'next/app';
import { Provider } from 'react-redux';

import { getStore } from '../src/store';

import '../src/style/main.scss';

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        const server = !!ctx.req
        const store = getStore(undefined, server)
        const state = store.getState()
        const result = { state, server } as any

        if (Component.getInitialProps) {
            return {
                ...result,
                pageProps: {
                    ...await Component.getInitialProps(ctx)
                }
            }
        }

        return result
    }
    render() {
        const { props } = this as any
        const { Component, pageProps = {} } = props;
        return (
            <Container>
                <Provider store={getStore(undefined, props.server)} >
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default MyApp