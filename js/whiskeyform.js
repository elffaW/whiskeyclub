const innerCheckbox = <input type="checkbox" />;

var UserSection = React.createClass({

    render() {
        var usernames = this.props.users.map(function(user) {
            return (
                <option value={user.username}>{user.username}</option>
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

var WhiskeySection = React.createClass({

    render() {
        var whiskeynames = this.props.whiskeys.map(function(whiskey) {
            return (
                <option value={whiskey.name}>{whiskey.name}</option>
            );
        });
        return (
            <ReactBootstrap.Panel collapsible defaultExpanded header={<strong>Whiskey Details</strong>} >

                <ReactBootstrap.Grid fluid>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} sm={6} >
                            <ReactBootstrap.Input type="select" label="Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10" >
                                {whiskeynames}
                            </ReactBootstrap.Input>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12} sm={6} >
                            <ReactBootstrap.Input type="text" label="Type" readOnly labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} sm={6} >
                            <ReactBootstrap.Input type="text" label="Wood" readOnly labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12} sm={6} >
                            <ReactBootstrap.Input type="number" label="ABV" max="100" min="0" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} sm={6} >
                            <ReactBootstrap.Input type="text" label="Age" readOnly labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12} sm={6} >
                            <ReactBootstrap.FormControls.Static label="Proof" value="90#" readOnly labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>

                </ReactBootstrap.Grid>

            </ReactBootstrap.Panel>

        );
    }
});

var SurveySection = React.createClass({

    render() {
        return (
            <ReactBootstrap.Panel collapsible defaultExpanded header={<strong>Whiskey Ratings</strong>} >

                <ReactBootstrap.Grid fluid>

                    <ReactBootstrap.Row>
                        <ReactBootstrap.Input type="textarea" label="Appearance" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} xsOffset={2} >
                            <ReactBootstrap.ButtonGroup>
                                <ReactBootstrap.Button>1</ReactBootstrap.Button>
                                <ReactBootstrap.Button>2</ReactBootstrap.Button>
                                <ReactBootstrap.Button>3</ReactBootstrap.Button>
                                <ReactBootstrap.Button>4</ReactBootstrap.Button>
                                <ReactBootstrap.Button>5</ReactBootstrap.Button>
                                <ReactBootstrap.Button>6</ReactBootstrap.Button>
                                <ReactBootstrap.Button>7</ReactBootstrap.Button>
                                <ReactBootstrap.Button>8</ReactBootstrap.Button>
                                <ReactBootstrap.Button>9</ReactBootstrap.Button>
                                <ReactBootstrap.Button>10</ReactBootstrap.Button>
                            </ReactBootstrap.ButtonGroup><br/><br/>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>

                    <ReactBootstrap.Row>
                        <ReactBootstrap.Input type="textarea" label="Aroma" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} xsOffset={2} >
                            <ReactBootstrap.ButtonGroup>
                                <ReactBootstrap.Button>1</ReactBootstrap.Button>
                                <ReactBootstrap.Button>2</ReactBootstrap.Button>
                                <ReactBootstrap.Button>3</ReactBootstrap.Button>
                                <ReactBootstrap.Button>4</ReactBootstrap.Button>
                                <ReactBootstrap.Button>5</ReactBootstrap.Button>
                                <ReactBootstrap.Button>6</ReactBootstrap.Button>
                                <ReactBootstrap.Button>7</ReactBootstrap.Button>
                                <ReactBootstrap.Button>8</ReactBootstrap.Button>
                                <ReactBootstrap.Button>9</ReactBootstrap.Button>
                                <ReactBootstrap.Button>10</ReactBootstrap.Button>
                            </ReactBootstrap.ButtonGroup> <br/><br/>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>

                    <ReactBootstrap.Row>
                        <ReactBootstrap.Input type="textarea" label="Taste" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Input type="textarea" label="Mouthfeel" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} xsOffset={2} >
                            <ReactBootstrap.ButtonGroup>
                                <ReactBootstrap.Button>1</ReactBootstrap.Button>
                                <ReactBootstrap.Button>2</ReactBootstrap.Button>
                                <ReactBootstrap.Button>3</ReactBootstrap.Button>
                                <ReactBootstrap.Button>4</ReactBootstrap.Button>
                                <ReactBootstrap.Button>5</ReactBootstrap.Button>
                                <ReactBootstrap.Button>6</ReactBootstrap.Button>
                                <ReactBootstrap.Button>7</ReactBootstrap.Button>
                                <ReactBootstrap.Button>8</ReactBootstrap.Button>
                                <ReactBootstrap.Button>9</ReactBootstrap.Button>
                                <ReactBootstrap.Button>10</ReactBootstrap.Button>
                            </ReactBootstrap.ButtonGroup><br/><br/>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>

                    <ReactBootstrap.Row>
                        <ReactBootstrap.Input type="textarea" label="Recommended?" addonBefore={innerCheckbox} placeholder="What setting?" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                    </ReactBootstrap.Row>

                    <ReactBootstrap.Row>
                        <ReactBootstrap.Input type="textarea" label="Bottle Design" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} xsOffset={2} >
                            <ReactBootstrap.ButtonGroup>
                                <ReactBootstrap.Button>1</ReactBootstrap.Button>
                                <ReactBootstrap.Button>2</ReactBootstrap.Button>
                                <ReactBootstrap.Button>3</ReactBootstrap.Button>
                                <ReactBootstrap.Button>4</ReactBootstrap.Button>
                                <ReactBootstrap.Button>5</ReactBootstrap.Button>
                                <ReactBootstrap.Button>6</ReactBootstrap.Button>
                                <ReactBootstrap.Button>7</ReactBootstrap.Button>
                                <ReactBootstrap.Button>8</ReactBootstrap.Button>
                                <ReactBootstrap.Button>9</ReactBootstrap.Button>
                                <ReactBootstrap.Button>10</ReactBootstrap.Button>
                            </ReactBootstrap.ButtonGroup><br/><br/>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </ReactBootstrap.Grid>

            </ReactBootstrap.Panel>
        );
    }
});

var WhiskeyForm = React.createClass({

    render() {
        return (
            <ReactBootstrap.Well >
                <form className="form-horizontal">
                    <UserSection users={this.props.users} />

                    <WhiskeySection whiskeys={this.props.whiskeys} />

                    <SurveySection />

                </form>
            </ReactBootstrap.Well>
        );
    }
});

var USERS=[
    {"userId":1,"username":"Mike","email":""},
    {"userId":2,"username":"Billy","email":""},
    {"userId":3,"username":"Matt K","email":""},
    {"userId":4,"username":"Kevin Sanchez","email":""},
    {"userId":5,"username":"JR","email":""},
    {"userId":6,"username":"Will","email":""},
    {"userId":7,"username":"Andy","email":""},
    {"userId":8,"username":"Matt A","email":""},
    {"userId":9,"username":"Jackie","email":""},
    {"userId":10,"username":"Nora","email":""},
    {"userId":11,"username":"Carolyn Hrabe","email":""},
    {"userId":12,"username":"Chris Savino","email":""},
    {"userId":13,"username":"Breanne","email":""},
    {"userId":14,"username":"Peter","email":""},
    {"userId":15,"username":"Ted","email":""},
    {"userId":16,"username":"Kim","email":""},
    {"userId":17,"username":"Katie","email":""},
    {"userId":18,"username":"Casey","email":""},
    {"userId":19,"username":"Steph","email":""}
];

var WHISKEYS=[
    {
        "whiskeyId":1,
        "name":"Buffalo Trace",
        "type":"Kentucky Straight Bourbon",
        "proof":90,
        "wood":"Charred white oak",
        "age":2
    },
    {
        "whiskeyId":2,
        "name":"Old Grand Dad",
        "type":"Kentucky Straight Bourbon",
        "proof":80,
        "wood":"Charred white oak",
        "age":2
    }
];

var SURVEYS=[
    {   "surveyId":1,
        "appearance":"light, looks like apple cider, clear, no sediment",
        "appearanceRating":7,
        "aroma":"alcohol-y, strong?, a little sweet",
        "aromaRating":3,
        "taste":"tingly, sort of burn?, harsh, lingers in throat, nothing special about it, adding ice just makes it taste less",
        "tasteRating":3,
        "recommend":false,
        "recSetting":"maybe with coke",
        "bottle":"nice-looking bottle, nothing special, comes with little booklet, pull-out cork/plastic top, fun green foil on top",
        "bottleRating":5,
        "tastingDate":"2015-08-18T11:30:43.511Z",
        "userFK":1,
        "whiskeyFK":1
    },
    {   "surveyId":2,
        "appearance":"light, looks like apple cider, clear, no sediment",
        "appearanceRating":7,
        "aroma":"alcohol-y, strong?, a little sweet",
        "aromaRating":3,
        "taste":"tingly, sort of burn?, harsh, lingers in throat, nothing special about it, adding ice just makes it taste less",
        "tasteRating":3,
        "recommend":false,
        "recSetting":"maybe with coke",
        "bottle":"nice-looking bottle, nothing special, comes with little booklet, pull-out cork/plastic top, fun green foil on top",
        "bottleRating":5,
        "tastingDate":"2015-08-18T11:30:43.511Z",
        "userFK":1,
        "whiskeyFK":1
    }
];



ReactDOM.render(<WhiskeyForm users={USERS} whiskeys={WHISKEYS} surveys={SURVEYS} />, document.getElementById('whiskeyform'));