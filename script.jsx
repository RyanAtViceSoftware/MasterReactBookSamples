var HelloMessage = React.createClass({
    render: function() {
        return <h2>{this.props.message}</h2>;
    }
});

var Button = React.createClass({
   render: function() {
       return <button class="btn btn-default" onClick={this.props.onClick}>{this.props.children}</button>
   }
});

var TextBox = React.createClass({
    getInitialState: function() {
        return { isEditing: false, text: this.props.label }
    },
    update: function() {
        this.setState(
            {
                text: this.refs.messageTextBox.getDOMNode().value,
                isEditing: false
            });
        this.props.update();
    },
    edit: function() {
        this.setState({ isEditing: true});
    },
    render: function() {
        return (
            <div>
              {this.props.label}<br/>
                <input type='text' ref='messageTextBox' disabled={!this.state.isEditing}/>
                {
                    this.state.isEditing ?
                        <Button onClick={this.update}>Update</Button>
                        :
                        <Button onClick={this.edit}>Edit</Button>
                    }
            </div>
        );
    }
});

var HelloReact = React.createClass({
    getInitialState: function () {
        return { firstName: '', lastName: ''}
    },
    update: function () {
        this.setState({
            firstName:
                this.refs.firstName.refs.messageTextBox.getDOMNode().value,
            lastName:
                this.refs.lastName.refs.messageTextBox.getDOMNode().value});
    },
    render: function() {
        return (
            <div>
                <HelloMessage
                    message={'Hello ' + this.state.firstName + ' ' + this.state.lastName}>
                </HelloMessage>
                <TextBox label='First Name' ref='firstName'
                    update={this.update}>
                </TextBox>
                <TextBox label='Last Name'  ref='lastName'
                    update={this.update}>
                </TextBox>
            </div>
        );
    }
});

React.render(
    <HelloReact/>,
    document.getElementById('view'));