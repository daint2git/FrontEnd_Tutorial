import React, { Component } from 'react'
import ComponentTestEnhancer from './test/Recompose/recompose_lesson_1'

class App extends Component {
  render() {
    return (
      <div>
        All Tutorial about React
        <ComponentTestEnhancer />
      </div>
    );
  }
}

export default App