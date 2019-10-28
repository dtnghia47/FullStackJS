import * as React from 'react';

export interface PropsType {
    loading?: boolean,
    onLoad: Function,
    children?: JSX.Element
}

export default class LazyLoadData extends React.Component<PropsType> {
    constructor(props: any) {
        super(props);
        this.state = {};
        this.blockLazyLoad = React.createRef<HTMLDivElement>();
    }

    // HTMLDivElement
    private blockLazyLoad = React.createRef<HTMLDivElement>()

    componentDidMount() {
        window.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const { loading } = this.props;
        let { timer } = this as any
        timer && clearTimeout(timer);
        const el: any = this.blockLazyLoad.current;
        timer = setTimeout(() => {
            if (window.innerHeight + window.scrollY > el.offsetTop + el.clientHeight) {
                !loading && this.handleLoadMore();
            }
            clearTimeout(timer);
        }, 100);
    };

    handleLoadMore() {
        const { onLoad } = this.props;
        onLoad && onLoad();
    }

    render() {
        const { children, loading } = this.props;
        return (
            <div
                className="lazy-list-component"
                ref={this.blockLazyLoad}
                onScroll={this.trackScrolling.bind(this)}>
                {children}
                {loading && (
                    <div>loading....</div>
                )}
            </div>
        );
    }
}
