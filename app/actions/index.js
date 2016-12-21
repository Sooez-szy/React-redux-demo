import * as types from '../constants/ActionTypes';
/**
 * 定义actions
 * @returns {{type: string}}
 */
export function toggleQuestionBox(){
    return{
        type:types.TOGGLE_QUESTION_BOX,
        text:'切换问题表单显示'
    }
}
//传递参数questions
export function newQuestion(questions){
    return {
        type:types.NEW_QUESTION,
        text:'新建问题',
        questions
    }
}

export function onvotequestion(questions){
    return {
        type:types.ONVOTE_QUESTION,
        text:'问题投票',
        questions
    }
}
