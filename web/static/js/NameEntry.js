import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Grid, Row, Col, Input } from 'react-bootstrap';

var UserSection = React.createClass({

    render() {
        var usernames = this.props.users.map(function(user) {
            return (
                <option value={user.username} key={user.userId}>{user.username}</option>
            );
        });
        return (
            <Panel collapsible defaultExpanded header={<strong>Who am I?</strong>}>

                <Grid fluid>
                    <Row>
                        <Col xs={12} >
                            <Input type="select" 
                                   label="Name" 
                                   labelClassName="col-xs-2"
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