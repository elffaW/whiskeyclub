

const TextField = React.createClass({
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

var WhiskeyForm = React.createClass({


    render() {
        return (
            <div>
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
            </div>
        )
    }
});


React.render(<WhiskeyForm />, document.getElementById('whiskeyform'));