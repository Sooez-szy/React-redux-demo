import React ,{Component}from 'react';

export default class QuestionForm extends Component{
	handleForm(e){
		e.preventDefault();
		if(!this.refs.title.value) return;

		var newQuestion = {
			title: this.refs.title.value,
			description: this.refs.description.value,
			voteCount: 0,
		}

		this.refs.addQuestionForm.reset();

		this.props.onNewQuestion( newQuestion );
	}
	render(){
		const styleObj={
			display: this.props.formDisplayed ? 'block': 'none',
		}

		return (
			<form ref="addQuestionForm" style={ styleObj } name="addQuestion" className="clearfix" onSubmit={this.handleForm.bind(this)}>
			  <div className="form-group">
			    <label htmlFor="qtitle">问题</label>
			    <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
			  </div>
			  <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
			  <button className="btn btn-success pull-right">确认</button>
			  <a className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</a>
			</form>
		)
	}
}