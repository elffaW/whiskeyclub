import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Grid, Well, Row, Input, FormControls, ButtonInput } from 'react-bootstrap';

import $ from 'jquery';

let SurveySection = React.createClass({
    getInitialState() {
        return {
            appearance: '',
            appearanceRanking: 0,
            aroma: '',
            aromaRanking: 0,
            taste: '',
            mouthfeel: '',
            tasteRanking: 0,
            totalScore: 0,
            recommended: false,
            recommendedSetting: '',
            bottleDesign: '',
            bottleRanking: 0
        };
    },

    //handlers for making all the inputs controlled components
    handleAppearanceChange(e) {
        this.setState({ appearance: e.target.value });
    },

    handleAppearRankChange(e) {
        let curTotal = parseInt(this.state.aromaRanking) + parseInt(e.target.value) + parseInt(this.state.tasteRanking);
        this.setState({ appearanceRanking: parseInt(e.target.value),
                        totalScore: curTotal });
    },

    handleAromaChange(e) {
        this.setState({ aroma: e.target.value });
    },

    handleAromaRankChange(e) {
        let curTotal = parseInt(e.target.value) + parseInt(this.state.appearanceRanking) + parseInt(this.state.tasteRanking);
        this.setState({ aromaRanking: e.target.value,
                        totalScore: curTotal });
    },

    handleTasteChange(e) {
        this.setState({ taste: e.target.value });
    },

    handleMouthfeelChange(e) {
        this.setState({ mouthfeel: e.target.value });
    },

    handleTasteRankChange(e) {
        let curTotal = parseInt(this.state.aromaRanking) + parseInt(this.state.appearanceRanking) + parseInt(e.target.value);
        this.setState({ tasteRanking: e.target.value,
                        totalScore: curTotal });
    },

    handleRecCheckChange() {
        this.setState({ recommended: !this.state.recommended });
    },

    handleRecSettingChange(e) {
        this.setState({ recommendedSetting: e.target.value });
    },

    handleBottleDesignChange(e) {
        this.setState({ bottleDesign: e.target.value });
    },

    handleBottleRankChange(e) {
        this.setState({ bottleRanking: e.target.value });
    },

    //handle the form submission
    handleSubmit(e) {
        e.preventDefault();
        console.log('submit stuff now');
        console.log(this.props.curUser);
        console.log(this.props.curWhiskey);

/*survey database columns
    id          
    appearance          
    appearance_rating           
    aroma           
    aroma_rating            
    taste           
    taste_rating            
    recommend           
    rec_taste           
    bottle_design           
    design_rating           
    tasting_date            
    user_id         
    whiskey_id          
    inserted_at         
    updated_at
*/


        let survey = {};

        survey.appearance           = this.state.appearance;
        survey.appearance_rating    = this.state.appearanceRanking;
        survey.aroma                = this.state.aroma;
        survey.aroma_rating         = this.state.aromaRanking;
        survey.taste                = this.state.taste + '\n' + this.state.mouthfeel;
        survey.taste_rating         = this.state.tasteRanking;
        survey.recommend            = this.state.recommended;
        survey.rec_taste            = this.state.recommendedSetting;
        survey.bottle_design        = this.state.bottleDesign;
        survey.design_rating        = this.state.bottleRanking;
        survey.tasting_date         = new Date().toISOString();
        survey.user_id              = this.props.curUser;
        survey.whiskey_id           = this.props.curWhiskey;

        let data = { survey };

        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: data,
            success: function(data) {
                alert(data);
                //this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    render() {
        let recCheckbox = <input type="checkbox"
                                 value={this.state.recommended}
                                 onChange={this.handleRecCheckChange} />;
        return (
            <Panel collapsible 
                   bsStyle="primary" 
                   defaultExpanded 
                   header={<strong>Whiskey Ratings</strong>} >
                <form className="form-horizontal"
                      onSubmit={this.handleSubmit} >
                    <Grid fluid>
                        <Well className="borderWell">
                            <Row>
                                <Input type="textarea"
                                       label="Appearance"
                                       help="Color? Cloudy/Hazy? Sediment?"
                                       value={this.state.appearance}
                                       onChange={this.handleAppearanceChange}
                                       labelClassName="col-xs-2"
                                       wrapperClassName="col-xs-10" />
                            </Row>
                            <Row>
                                <Input type="number"
                                       label="Ranking"
                                       min="1"
                                       max="10"
                                       placeholder="1-10"
                                       value={this.state.appearanceRanking}
                                       onChange={this.handleAppearRankChange}
                                       labelClassName="col-xs-2"
                                       wrapperClassName="col-xs-10" />
                            </Row>
                        </Well>

                        <Well className="borderWell">
                            <Row>
                                <Input type="textarea"
                                       label="Aroma"
                                       help="Examples: Boozy Sweet Caramel Chocolate Tobacco Musty Phenolic Maple Syrup"
                                       value={this.state.aroma}
                                       onChange={this.handleAromaChange}
                                       labelClassName="col-xs-2"
                                       wrapperClassName="col-xs-10" />
                            </Row>
                            <Row>
                                <Input type="number"
                                       label="Ranking"
                                       min="1"
                                       max="10"
                                       placeholder="1-10"
                                       value={this.state.aromaRanking}
                                       onChange={this.handleAromaRankChange}
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
                                       value={this.state.taste}
                                       onChange={this.handleTasteChange}
                                       labelClassName="col-xs-2"
                                       wrapperClassName="col-xs-10" />
                            </Row>
                            <Row>
                                <Input type="textarea"
                                       label="Mouthfeel"
                                       help="Examples: Smooth Harsh Oily Gritty Thick/Thin"
                                       value={this.state.mouthfeel}
                                       onChange={this.handleMouthfeelChange}
                                       labelClassName="col-xs-2"
                                       wrapperClassName="col-xs-10" />
                            </Row>
                            <Row>
                                <Input type="number"
                                       label="Ranking"
                                       min="1"
                                       max="10"
                                       placeholder="1-10"
                                       value={this.state.tasteRanking}
                                       onChange={this.handleTasteRankChange}
                                       labelClassName="col-xs-2"
                                       wrapperClassName="col-xs-10" />
                            </Row>
                        </Well>

                        <Row>
                            <FormControls.Static label="Total Score" value={this.state.totalScore} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        </Row>

                        <Well className="borderWell">
                            <Row>
                                <Input type="textarea"
                                       label="Recommended?"
                                       addonBefore={recCheckbox}
                                       placeholder="What setting?"
                                       value={this.state.recommendedSetting}
                                       onChange={this.handleRecSettingChange}
                                       labelClassName="col-xs-2"
                                       wrapperClassName="col-xs-10" />
                            </Row>

                            <Row>
                                <Input type="textarea"
                                       label="Bottle Design"
                                       help="Label? Bottle? Cap? Colors? Name?"
                                       value={this.state.bottleDesign}
                                       onChange={this.handleBottleDesignChange}
                                       labelClassName="col-xs-2"
                                       wrapperClassName="col-xs-10" />
                            </Row>
                            <Row>
                                <Input type="number"
                                       label="Ranking"
                                       min="1"
                                       max="10"
                                       placeholder="1-10"
                                       value={this.state.bottleRanking}
                                       onChange={this.handleBottleRankChange}
                                       labelClassName="col-xs-2"
                                       wrapperClassName="col-xs-10" />
                            </Row>
                        </Well>
                        <Row>
                            <ButtonInput type="submit" value="Submit" style={{display:'block',marginLeft:'auto',marginRight:'auto'}} />
                        </Row>
                    </Grid>
                </form>
            </Panel>
        );
    }
});

export { SurveySection };