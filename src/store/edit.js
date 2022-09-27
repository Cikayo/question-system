import { makeAutoObservable } from "mobx";

class Edit {
  constructor() {
    makeAutoObservable(this);
  }

  questionList = []

  setQuestionList(val) {
    this.questionList = val;
  }

  addDifferentQuestion({ type, name }) {
    let question = {
      type: type,
      label: name
    };
    switch (type) {
      case 'select':
        break;
      case 'input':
        break;
      default:
    }
    this.setQuestionList([
      ...this.questionList,
      question
    ])
  }
}


export default new Edit();