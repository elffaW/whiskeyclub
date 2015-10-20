var UserSection = React.createClass({

    render() {
        var usernames = this.props.users.map(function(user) {
            return (
                <option value={user.username} key={user.userId}>{user.username}</option>
            );
        });
        return (
            <ReactBootstrap.Panel collapsible defaultExpanded header={<strong>Who am I?</strong>}>

                <ReactBootstrap.Grid fluid>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} >
                            <ReactBootstrap.Input type="select" label="Name" labelClassName="col-xs-2"
                                                  placeholder="Name" wrapperClassName="col-xs-10">
                                {usernames}
                            </ReactBootstrap.Input>
                        </ReactBootstrap.Col>

                    </ReactBootstrap.Row>
                </ReactBootstrap.Grid>

            </ReactBootstrap.Panel>
        );
    }
});

window.UserSection = UserSection;