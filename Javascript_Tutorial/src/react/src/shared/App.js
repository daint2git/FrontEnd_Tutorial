import React from 'react'
// import TestEnhancer from './test/Recompose/recompose_lesson_1'
import TestLifecycle from './test/Lifecycle/lifecycle_lesson_1'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>All Tutorial about Reactjs</h1>
        {/* <TestEnhancer /> */}
        <TestLifecycle />
      </div>
    )
  }
}
