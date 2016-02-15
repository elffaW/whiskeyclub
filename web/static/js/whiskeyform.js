import React from 'react';
import ReactDOM from 'react-dom';
import { Well } from 'react-bootstrap';

import { UserSection } from './NameEntry';
import { WhiskeySection } from './WhiskeyEntry';
import { SurveySection } from './Survey';

import * as stylesheet from 'css/style.css';
import * as bootstrapstyle from 'css/bootstrap.min.css';

var WhiskeyForm = React.createClass({
    getInitialState() {
        return {
            whiskeyId:1
        };
    },

    handleWhiskeySelect(whiskeyId) {
        this.setState({
            whiskeyId: whiskeyId
        });
    },

    render() {
        return (
            <Well >
                <form className="form-horizontal">
                    <UserSection users={this.props.users} />

                    <WhiskeySection whiskeys={this.props.whiskeys}
                                    whiskeyId={this.state.whiskeyId}
                                    onWhiskeySelect={this.handleWhiskeySelect} />

                    <SurveySection />

                </form>
            </Well>
        );
    }
});

var USERS=[
    {'userId':1,'username':'Mike','email':''},
    {'userId':2,'username':'Billy','email':''},
    {'userId':3,'username':'Matt K','email':''},
    {'userId':4,'username':'Kevin Sanchez','email':''},
    {'userId':5,'username':'JR','email':''},
    {'userId':6,'username':'Will','email':''},
    {'userId':7,'username':'Andy','email':''},
    {'userId':8,'username':'Matt A','email':''},
    {'userId':9,'username':'Jackie','email':''},
    {'userId':10,'username':'Nora','email':''},
    {'userId':11,'username':'Carolyn Hrabe','email':''},
    {'userId':12,'username':'Chris Savino','email':''},
    {'userId':13,'username':'Breanne','email':''},
    {'userId':14,'username':'Peter','email':''},
    {'userId':15,'username':'Ted','email':''},
    {'userId':16,'username':'Kim','email':''},
    {'userId':17,'username':'Katie','email':''},
    {'userId':18,'username':'Casey','email':''},
    {'userId':19,'username':'Steph','email':''}
];

var WHISKEYS=[
    {
        'whiskeyId':1,
        'name':'Buffalo Trace',
        'whiskeyType':'Kentucky Straight Bourbon',
        'proof':90,
        'wood':'Charred white oak',
        'age':2
    },
    {
        'whiskeyId':2,
        'name':'Old Grand Dad',
        'whiskeyType':'Kentucky Straight Bourbon',
        'proof':80,
        'wood':'Charred white oak',
        'age':2
    },
    {
        'whiskeyId':3,
        'name':'Chicago Distilling Co. Dunkelweiss Whiskey',
        'whiskeyType':'Malt Whiskey',
        'proof':90,
        'wood':'Oak-charred new 5 gallon barrel',
        'age':0.25
    },
    {
        'whiskeyId':4,
        'name':'Chicago Distilling Co. Stout Whiskey',
        'whiskeyType':'Craft Whiskey',
        'proof':90,
        'wood':'Oak-charred new 5 gallon barrel',
        'age':0.25
    }
];

var SURVEYS=[
    {   'surveyId':1,
        'appearance':'light, looks like apple cider, clear, no sediment',
        'appearanceRating':7,
        'aroma':'alcohol-y, strong?, a little sweet',
        'aromaRating':3,
        'taste':'tingly, sort of burn?, harsh, lingers in throat, nothing special about it, adding ice just makes it taste less',
        'tasteRating':3,
        'recommend':false,
        'recSetting':'maybe with coke',
        'bottle':'nice-looking bottle, nothing special, comes with little booklet, pull-out cork/plastic top, fun green foil on top',
        'bottleRating':5,
        'tastingDate':'2015-08-18T11:30:43.511Z',
        'userFK':1,
        'whiskeyFK':1
    },
    {   'surveyId':2,
        'appearance':'light, looks like apple cider, clear, no sediment',
        'appearanceRating':7,
        'aroma':'alcohol-y, strong?, a little sweet',
        'aromaRating':3,
        'taste':'tingly, sort of burn?, harsh, lingers in throat, nothing special about it, adding ice just makes it taste less',
        'tasteRating':3,
        'recommend':false,
        'recSetting':'maybe with coke',
        'bottle':'nice-looking bottle, nothing special, comes with little booklet, pull-out cork/plastic top, fun green foil on top',
        'bottleRating':5,
        'tastingDate':'2015-08-18T11:30:43.511Z',
        'userFK':1,
        'whiskeyFK':1
    }
];



ReactDOM.render(<WhiskeyForm users={USERS} whiskeys={WHISKEYS} surveys={SURVEYS} />, document.getElementById('whiskeyform'));