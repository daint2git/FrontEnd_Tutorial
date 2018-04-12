import React from 'react'
import { withProps, compose } from 'recompose'

const ComponentTest = props => {
  console.log('props', props)
  return (
    <div>recompose_lesson_1</div>
  )
}

const ComponentTestEnhancer = compose(
  withProps(({ x = 1 }) => {
    console.log('withProps 1')
    return { x: x + 2 }
  }),
  withProps(({ x }) => {
    console.log('withProps 2')
    return { x: x * 2 }
  })
)(ComponentTest)

export default ComponentTestEnhancer