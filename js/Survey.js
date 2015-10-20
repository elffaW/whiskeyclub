const innerCheckbox = <input type="checkbox" />;

var SurveySection = React.createClass({

    render() {
        return (
            <ReactBootstrap.Panel collapsible defaultExpanded header={<strong>Whiskey Ratings</strong>} >

                <ReactBootstrap.Grid fluid>
                    <ReactBootstrap.Well className="borderWell">
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Input type="textarea"
                                                  label="Appearance"
                                                  help="Color? Cloudy/Hazy? Sediment?"
                                                  labelClassName="col-xs-2"
                                                  wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Input type="number"
                                                  label="Ranking"
                                                  min="1"
                                                  max="10"
                                                  placeholder="1-10"
                                                  labelClassName="col-xs-2"
                                                  wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Well>

                    <ReactBootstrap.Well className="borderWell">
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Input type="textarea"
                                                  label="Aroma"
                                                  help="Examples: Boozy Sweet Caramel Chocolate Tobacco Musty Phenolic Maple Syrup"
                                                  labelClassName="col-xs-2"
                                                  wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Input type="number"
                                                  label="Ranking"
                                                  min="1"
                                                  max="10"
                                                  placeholder="1-10"
                                                  labelClassName="col-xs-2"
                                                  wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Well>

                    <ReactBootstrap.Well className="borderWell">
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Input type="textarea"
                                                  label="Taste"
                                                  placeholder="Try adding ice if it tastes too boozy!"
                                                  help="Examples: Boozy Woody Chocolate Tobacco Green/Phenolic Sweet Maple-Syrup Smoky Musty Caramel Honey/Molasses/Brown-Sugar Toasted Dirty Salty"
                                                  labelClassName="col-xs-2"
                                                  wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Input type="textarea"
                                                  label="Mouthfeel"
                                                  help="Examples: Smooth Harsh Oily Gritty Thick/Thin"
                                                  labelClassName="col-xs-2"
                                                  wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Input type="number"
                                                  label="Ranking"
                                                  min="1"
                                                  max="10"
                                                  placeholder="1-10"
                                                  labelClassName="col-xs-2"
                                                  wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Well>

                    <ReactBootstrap.Row>
                        <ReactBootstrap.FormControls.Static label="Total Score" value='0-30' labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                    </ReactBootstrap.Row>

                    <ReactBootstrap.Well className="borderWell">
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Input type="textarea"
                                                  label="Recommended?"
                                                  addonBefore={innerCheckbox}
                                                  placeholder="What setting?"
                                                  labelClassName="col-xs-2"
                                                  wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Row>

                        <ReactBootstrap.Row>
                            <ReactBootstrap.Input type="textarea"
                                                  label="Bottle Design"
                                                  help="Label? Bottle? Cap? Colors? Name?"
                                                  labelClassName="col-xs-2"
                                                  wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Input type="number"
                                                  label="Ranking"
                                                  min="1"
                                                  max="10"
                                                  placeholder="1-10"
                                                  labelClassName="col-xs-2"
                                                  wrapperClassName="col-xs-10" />
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Well>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.ButtonInput type="submit" value="Submit" style={{display:'block',marginLeft:'auto',marginRight:'auto'}} />
                    </ReactBootstrap.Row>
                </ReactBootstrap.Grid>

            </ReactBootstrap.Panel>
        );
    }
});

window.SurveySection = SurveySection;