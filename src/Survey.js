import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Grid, Well, Row, Input, FormControls, ButtonInput } from 'react-bootstrap';

const innerCheckbox = <input type="checkbox" />;

var SurveySection = React.createClass({

    render() {
        return (
            <Panel collapsible defaultExpanded header={<strong>Whiskey Ratings</strong>} >

                <Grid fluid>
                    <Well className="borderWell">
                        <Row>
                            <Input type="textarea"
                                   label="Appearance"
                                   help="Color? Cloudy/Hazy? Sediment?"
                                   labelClassName="col-xs-2"
                                   wrapperClassName="col-xs-10" />
                        </Row>
                        <Row>
                            <Input type="number"
                                  label="Ranking"
                                  min="1"
                                  max="10"
                                  placeholder="1-10"
                                  labelClassName="col-xs-2"
                                  wrapperClassName="col-xs-10" />
                        </Row>
                    </Well>

                    <Well className="borderWell">
                        <Row>
                            <Input type="textarea"
                                  label="Aroma"
                                  help="Examples: Boozy Sweet Caramel Chocolate Tobacco Musty Phenolic Maple Syrup"
                                  labelClassName="col-xs-2"
                                  wrapperClassName="col-xs-10" />
                        </Row>
                        <Row>
                            <Input type="number"
                                  label="Ranking"
                                  min="1"
                                  max="10"
                                  placeholder="1-10"
                                  labelClassName="col-xs-2"
                                  wrapperClassName="col-xs-10" />
                        </Row>
                    </Well>

                    <Well className="borderWell">
                        <Row>
                            <Input type="textarea"
                                  label="Taste"
                                  placeholder="Try adding ice if it tastes too boozy!"
                                  help="Examples: Boozy Woody Chocolate Tobacco Green/Phenolic Sweet Maple-Syrup Smoky Musty Caramel Honey/Molasses/Brown-Sugar Toasted Dirty Salty"
                                  labelClassName="col-xs-2"
                                  wrapperClassName="col-xs-10" />
                        </Row>
                        <Row>
                            <Input type="textarea"
                                  label="Mouthfeel"
                                  help="Examples: Smooth Harsh Oily Gritty Thick/Thin"
                                  labelClassName="col-xs-2"
                                  wrapperClassName="col-xs-10" />
                        </Row>
                        <Row>
                            <Input type="number"
                                  label="Ranking"
                                  min="1"
                                  max="10"
                                  placeholder="1-10"
                                  labelClassName="col-xs-2"
                                  wrapperClassName="col-xs-10" />
                        </Row>
                    </Well>

                    <Row>
                        <FormControls.Static label="Total Score" value="0-30" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                    </Row>

                    <Well className="borderWell">
                        <Row>
                            <Input type="textarea"
                                  label="Recommended?"
                                  addonBefore={innerCheckbox}
                                  placeholder="What setting?"
                                  labelClassName="col-xs-2"
                                  wrapperClassName="col-xs-10" />
                        </Row>

                        <Row>
                            <Input type="textarea"
                                  label="Bottle Design"
                                  help="Label? Bottle? Cap? Colors? Name?"
                                  labelClassName="col-xs-2"
                                  wrapperClassName="col-xs-10" />
                        </Row>
                        <Row>
                            <Input type="number"
                                  label="Ranking"
                                  min="1"
                                  max="10"
                                  placeholder="1-10"
                                  labelClassName="col-xs-2"
                                  wrapperClassName="col-xs-10" />
                        </Row>
                    </Well>
                    <Row>
                        <ButtonInput type="submit" value="Submit" style={{display:'block',marginLeft:'auto',marginRight:'auto'}} />
                    </Row>
                </Grid>

            </Panel>
        );
    }
});

export { SurveySection };