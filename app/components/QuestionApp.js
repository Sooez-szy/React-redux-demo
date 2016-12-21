import React,{Component} from 'react';
import ShowAddButton from './ShowAddButton';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';
import _ from 'lodash';

export default class QuestionApp extends Component{
	constructor(props){
		super(props)
	}
	onNewQuestion( newQuestion ){
		newQuestion.key = this.props.questionapp.questions.length + 1;

		var newQuestions = this.props.questionapp.questions.concat( newQuestion );

		newQuestions = this.sortQuestion( newQuestions );
		this.props.newQuestion(newQuestions)
	}
	sortQuestion(questions){
		questions.sort(function(a,b){
			return b.voteCount - a.voteCount;
		});

		return questions;

	}
	onVote(key,newCount){
		var questions = _.uniq( this.props.questionapp.questions );
		var index = _.findIndex( questions, function(qst){
			return qst.key == key;
		} )

		questions[index].voteCount = newCount;

		questions = this.sortQuestion(questions);
		this.props.onvotequestion(questions);
	}
	render(){
		const {dispatch,toggleQuestionBox,questionapp} = this.props;
		console.log(this.props)
		return (
		<div>
			<div className="jumbotron text-center">
			    <div className="container">
			      <h1>React 问答</h1>
			      <ShowAddButton onToggleForm={toggleQuestionBox} />
			    </div>
			</div>
			<div className="main container">
			  <QuestionForm  
			  	onNewQuestion={this.onNewQuestion.bind(this) }
			  	onToggleForm={toggleQuestionBox}
			  	formDisplayed={questionapp.formDisplayed } />
			  
			  <QuestionList onVote={this.onVote.bind(this)} questions={questionapp.questions} />

			</div>
		</div>
		)
	}
}