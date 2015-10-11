

var TextField = React.createClass({
    getInitialState() {
        return {
            value: ''
        };
    },

    validationState() {
        let length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    },

    handleChange() {
        // This could also be done using ReactLink:
        // http://facebook.github.io/react/docs/two-way-binding-helpers.html
        this.setState({
            value: this.refs.input.getValue()
        });
    },

    render() {
        return (
            <ReactBootstrap.Input
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                label="Working example with validation"
                help="Validation is based on string length."
                bsStyle={this.validationState()}
                hasFeedback
                ref="input"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.handleChange} />
        );
    }
});
/*
class Example extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open: true
        };
    }

    render() {
        return (
            <div>
                <ReactBootstrap.Button onClick={ ()=> this.setState({ open: !this.state.open })}>
                    click
                </ReactBootstrap.Button>
                <ReactBootstrap.Panel collapsible expanded={this.state.open}>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </ReactBootstrap.Panel>
            </div>
        );
    }
}
*/
var WhiskeyForm = React.createClass({


    render() {
        return (
            <ReactBootstrap.Well>
                <ReactBootstrap.Panel collapsible defaultExpanded header={<strong>test panel</strong>} >
                <form>
                    <TextField />


                    <ReactBootstrap.Input type="text" label="Text" placeholder="Enter text" />

                    <ReactBootstrap.Input type="file" label="File" help="[Optional] Block level help text" />
                    <ReactBootstrap.Input type="checkbox" label="Checkbox" checked readOnly />
                    <ReactBootstrap.Input type="radio" label="Radio" checked readOnly />
                    <ReactBootstrap.Input type="select" label="Select" placeholder="select">
                        <option value="select">select</option>
                        <option value="other">...</option>
                    </ReactBootstrap.Input>
                    <ReactBootstrap.Input type="select" label="Multiple Select" multiple>
                        <option value="select">select (multiple)</option>
                        <option value="other">...</option>
                    </ReactBootstrap.Input>
                    <ReactBootstrap.Input type="textarea" label="Text Area" placeholder="textarea" />
                    <ReactBootstrap.ButtonInput value="Button Input" />
                    <ReactBootstrap.ButtonInput type="reset" value="Reset Button" />
                    <ReactBootstrap.ButtonInput type="submit" value="Submit Button" />
                </form>
                    </ReactBootstrap.Panel>
            </ReactBootstrap.Well>
        );
    }
});


ReactDOM.render(<WhiskeyForm />, document.getElementById('whiskeyform'));