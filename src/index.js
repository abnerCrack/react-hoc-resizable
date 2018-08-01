import React, { PureComponent, Fragment } from 'react';

const resizable = (RealComponent) => {
    return class extends PureComponent {
        render() {
            return <SpaceRect render={rect => (
                <RealComponent {...this.props} rect={rect} />
            )}/>
        }
    }
}

// todo
// requestAF throttle优化

class SpaceRect extends PureComponent {
    state = { width: 0, height: 0 }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize()
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = (event) => {
        const node = ReactDOM.findDOMNode(this)
        const viewPortHeight = window.innerHeight;
        const { y } = node.getBoundingClientRect();
        const height = viewPortHeight - y;
        this.setState({ height });
    }
    render() {
        return (
            <Fragment>
                { this.props.render(this.state) }
            </Fragment>
        )
    }
}

export default resizable;

