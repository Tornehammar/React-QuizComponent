import React, { Component } from 'react'

class QuizQuestion extends Component{
render(){
  return (
    <main>
       <section>
         <p> { instruction_text from this.props} </p>
       </section>
       <section className="buttons">
         <ul>
           <li value={this.props.quiz_question.answer_options[0]} /li>
         </ul>
       </section>
     </main>
  )
}
}
export default QuizQuestion
