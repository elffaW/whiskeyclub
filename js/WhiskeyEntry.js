
/* Sample whiskey JSON
 "whiskeyId":1,
 "name":"Buffalo Trace",
 "whiskeyType":"Kentucky Straight Bourbon",
 "proof":90,
 "wood":"Charred white oak",
 "age":2
 */
var WhiskeySection = React.createClass({
    handleChange() {
        this.props.onWhiskeySelect(
            this.refs.whiskeySelector.getInputDOMNode().value
        );
    },

    render() {
        var whiskeynames = this.props.whiskeys.map(function(whiskey) {
            return (
                <option value={whiskey.whiskeyId} key={whiskey.whiskeyId}>{whiskey.name}</option>
            );
        });

        var whiskeyType = '',
            whiskeyWood = '',
            whiskeyABV = '',
            whiskeyAge = '',
            whiskeyProof = '';

        this.props.whiskeys.map(function(whiskey) {
            if(whiskey.whiskeyId == this.props.whiskeyId) {
                whiskeyType = whiskey.whiskeyType;
                whiskeyWood = whiskey.wood;
                whiskeyABV = whiskey.proof/2;
                whiskeyAge = whiskey.age + " years";
                whiskeyProof = whiskey.proof;

            }
        }.bind(this));

        return (
            <ReactBootstrap.Panel collapsible defaultExpanded header={<strong>Whiskey Details</strong>} >

                <ReactBootstrap.Grid fluid>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} sm={6} >
                            <ReactBootstrap.Input type="select" label="Name" ref="whiskeySelector" onChange={this.handleChange} labelClassName="col-xs-2" wrapperClassName="col-xs-10" >
                                {whiskeynames}
                            </ReactBootstrap.Input>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12} sm={6} >
                            <ReactBootstrap.FormControls.Static label="Type" value={whiskeyType} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} sm={6} >
                            <ReactBootstrap.FormControls.Static label="Wood" value={whiskeyWood} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12} sm={6} >
                            <ReactBootstrap.FormControls.Static label="ABV" value={whiskeyABV} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} sm={6} >
                            <ReactBootstrap.FormControls.Static label="Age" value={whiskeyAge} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12} sm={6} >
                            <ReactBootstrap.FormControls.Static label="Proof" value={whiskeyProof} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>

                </ReactBootstrap.Grid>

            </ReactBootstrap.Panel>

        );
    }
});

window.WhiskeySection = WhiskeySection;