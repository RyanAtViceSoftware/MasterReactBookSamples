var Button = React.createClass({
    render() {
        return <button onClick={this.props.onClick}>{this.props.children}</button>
    }
});

var GlyphIcon = React.createClass({
    render() {
        return <span className={'glyphicon glyphicon-' + this.props.icon}></span>
    }
});


var HelloReact = React.createClass({
    getDefaultProps() {
        return {likes: 0};
    },
    getInitialState() {
        return {isIncreasing: false};
    },
    componentWillReceiveProps(nextProps) {
        this._logPropsAndState('componentWillReceiveProps()');
        this.setState({isIncreasing: nextProps.likes > this.props.likes});
    },
    shouldComponentUpdate(nextProps, nextState) {
        this._logPropsAndState('shouldComponentUpdate()');
        return nextProps.likes >= 3;
    },
    componentDidUpdate(prevProps, prevState) {
        console.log('=> componentDidUpdate() give an opportunity to execute code after react is finished updating the DOM.');
    },
    _logPropsAndState(callingFunction) {
        console.log('=> ' + callingFunction);
        console.log('this.props.likes: ' + this.props.likes);
        console.log('this.state.isIncreasing: ' + this.state.isIncreasing);
    },
    like() {
        this.setProps({likes: this.props.likes+1});
    },
    unlike() {
        this.setProps({likes: this.props.likes-1});
    },
    render() {
        return (
            <div>
                <Button onClick={this.like}><GlyphIcon icon='thumbs-up'/> Like</Button>
                <Button onClick={this.unlike}><GlyphIcon icon='thumbs-down'/> Unlike</Button>
                <br/>
                Likes {this.props.likes}
                <GlyphIcon
                    icon={(this.state.isIncreasing)
                            ? 'circle-arrow-up' : 'circle-arrow-down'}/>
            </div>
        );
    }
});

React.render(
    <HelloReact/>,
    document.getElementById('view'));