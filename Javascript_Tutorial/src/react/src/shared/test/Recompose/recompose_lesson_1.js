import React from 'react'
import { withState, withProps, compose } from 'recompose'

const ComponentTest = props => {
  console.log('props', props)
  return (
    <div>recompose_lesson_1</div>
  )
}

const enhancer = compose(
  withState('value1', 'changeValue1', props => {
    console.log('withState1')
    console.log('withState1 props', props)
    return { a: 'string', b: true, c: 99 }
  }),
  withState('value2', 'changeValue2', props => {
    console.log('withState2')
    console.log('withState2 props', props)
    return { array: [1, 2, 3] }
  }),
  withProps(({ x = 1 }) => {
    console.log('withProps 1')
    return { x: x + 2 }
  }),
  withProps(({ x }) => {
    console.log('withProps 2')
    return { x: x * 2 }
  }),
  withProps(({ x }) => {
    console.log('withProps 3')
    return {
      total: x + 10
    }
  })
)(ComponentTest)

export default enhancer