import React,{Component}from 'react';
import QuestionItem from './QuestionItem';

export default class QuestionList extends Component{
	render(){
		var questions = this.props.questions;
		if( !Array.isArray(questions) ) throw new Error('this.props.questions问题必须是数组');
		var questionComps = questions.map(function(qst){
			return <QuestionItem key={qst.key} 
				questionKey={qst.key}
				title={qst.title}
				description={qst.description}
				voteCount={qst.voteCount}
				onVote={ this.props.onVote }  />
		}.bind(this) );

		return (
			<div id="questions" className="">
			 {questionComps}
			</div>
		)
	}
}