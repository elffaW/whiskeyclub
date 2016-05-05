import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Grid, Row, Col, Input, FormControls } from 'react-bootstrap';

import $ from 'jquery';

/* Sample whiskey JSON
 "id":1,
 "name":"Buffalo Trace",
 "type":"Kentucky Straight Bourbon",
 "proof":90,
 "wood":"Charred white oak",
 "age":2
 */
let WhiskeySection = React.createClass({
    getInitialState() {
        return { whiskeys: [] };
    },

    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({ whiskeys:data.data });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleChange() {
        this.props.onWhiskeySelect(
            this.refs.whiskeySelector.getInputDOMNode().value
        );
    },

    render() {
        let whiskeynames = this.state.whiskeys.map(function(whiskey) {
            return (
                <option value={whiskey.id} key={whiskey.id}>{whiskey.name}</option>
            );
        });

        let type = '',
            wood = '',
            abv = '',
            age = '',
            proof = '';

        this.state.whiskeys.map(function(whiskey) {
            if(whiskey.id == this.props.whiskeyId) {
                type = whiskey.type;
                wood = whiskey.wood;
                abv = whiskey.proof/2;
                age = whiskey.age + ' years';
                proof = whiskey.proof;

            }
        }.bind(this));

        return (
            <Panel collapsible 
                   defaultExpanded 
                   bsStyle="primary"
                   header={<strong>Whiskey Details</strong>} >

                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={6} >
                            <Input type="select" label="Name" ref="whiskeySelector" onChange={this.handleChange} labelClassName="col-xs-2" wrapperClassName="col-xs-10" >
                                {whiskeynames}
                            </Input>
                        </Col>
                        <Col xs={12} sm={6} >
                            <FormControls.Static label="Type" value={type} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} >
                            <FormControls.Static label="Wood" value={wood} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </Col>
                        <Col xs={12} sm={6} >
                            <FormControls.Static label="ABV" value={abv} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} >
                            <FormControls.Static label="Age" value={age} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </Col>
                        <Col xs={12} sm={6} >
                            <FormControls.Static label="Proof" value={proof} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </Col>
                    </Row>

                </Grid>

            </Panel>

        );
    }
});

export { WhiskeySection };