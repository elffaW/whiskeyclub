const innerCheckbox = <input type="checkbox" />;

var WhiskeyForm = React.createClass({

    render() {
        return (
            <ReactBootstrap.Well >
                <form className="form-horizontal">
                    <ReactBootstrap.Panel collapsible defaultExpanded header={<strong>Who am I?</strong>} >

                        <ReactBootstrap.Grid fluid>
                            <ReactBootstrap.Row>
                                <ReactBootstrap.Col xs={12} sm={6} >
                                    <ReactBootstrap.Input type="text" label="Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                                </ReactBootstrap.Col>
                                <ReactBootstrap.Col xs={12} sm={6} >
                                    <ReactBootstrap.Input disabled type="email" label="Email" labelClassName="col-xs-2" wrapperClassName="col-xs-10" addonBefore="@" />
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                        </ReactBootstrap.Grid>

                    </ReactBootstrap.Panel>

                    <ReactBootstrap.Panel collapsible defaultExpanded header={<strong>Whiskey Details</strong>} >

                        <ReactBootstrap.Grid fluid>
                            <ReactBootstrap.Row>
                                <ReactBootstrap.Col xs={12} sm={6} >
                                    <ReactBootstrap.Input type="text" label="Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                                </ReactBootstrap.Col>
                                <ReactBootstrap.Col xs={12} sm={6} >
                                    <ReactBootstrap.Input type="text" label="Type" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                            <ReactBootstrap.Row>
                                <ReactBootstrap.Col xs={12} sm={6} >
                                    <ReactBootstrap.Input type="text" label="Wood" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                                </ReactBootstrap.Col>
                                <ReactBootstrap.Col xs={12} sm={6} >
                                    <ReactBootstrap.Input type="number" label="ABV" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                            <ReactBootstrap.Row>
                                <ReactBootstrap.Col xs={12} sm={6} >
                                    <ReactBootstrap.Input type="text" label="Age" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                                </ReactBootstrap.Col>
                                <ReactBootstrap.Col xs={12} sm={6} >
                                    <ReactBootstrap.FormControls.Static label="Proof" value="90#" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>

                        </ReactBootstrap.Grid>

                    </ReactBootstrap.Panel>

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
                </form>
            </ReactBootstrap.Well>
        );
    }
});

var testData={
    "user": {
        "username":"mike",
        "email":""
    },
    "whiskey": {
        "name":"Buffalo Trace",
        "type":"Kentucky Straight Bourbon",
        "proof":90,
        "wood":"Charred white oak",
        "age":2
    },
    "survey": {
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
        "tastingDate":"2015-08-18T11:30:43.511Z"
    }
};


ReactDOM.render(<WhiskeyForm />, document.getElementById('whiskeyform'));