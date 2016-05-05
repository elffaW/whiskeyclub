import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Grid, Row, Col, Input } from 'react-bootstrap';

import $ from 'jquery';

let UserSection = React.createClass({
    getInitialState() {
        return { users: [] };
    },

    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({ users:data.data });
                this.props.handleUserChange( data.data[0].id );
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleUserChange() {
        this.props.handleUserChange( this.refs.userSelector.getInputDOMNode().value );
    },

    render() {
        let usernames = this.state.users.map(function(user) {
            return (
                <option value={user.id} key={user.id}>{user.name}</option>
            );
        });
        return (
            <Panel collapsible 
                   defaultExpanded 
                   bsStyle="primary"
                   header={<strong>Who am I?</strong>}>

                <Grid fluid>
                    <Row>
                        <Col xs={12} >
                            <Input type="select" 
                                   label="Name" 
                                   labelClassName="col-xs-2"
                                   ref="userSelector"
                                   onChange={this.handleUserChange}
                                   placeholder="Name" 
                                   wrapperClassName="col-xs-10">
                                {usernames}
                            </Input>
                        </Col>

                    </Row>
                </Grid>

            </Panel>
        );
    }
});

export { UserSection };