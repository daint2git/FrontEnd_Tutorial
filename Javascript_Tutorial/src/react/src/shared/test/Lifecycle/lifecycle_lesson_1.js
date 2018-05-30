import React from 'react'

class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  componentWillMount() {
    alert('componentWillMount')
  }

  componentDidMount() {
    alert('componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    alert('componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState) {
    alert('shouldComponentUpdate')
    const { countClick } = this.props
    const { count } = this.state
    if (countClick === nextProps.countClick && count === nextState.count)
      console.log('end shouldComponentUpdate')
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    alert('componentWillUpdate')
  }

  componentDidUpdate(prevProps, prevState) {
    alert('componentDidUpdate')
  }

  componentWillUnmount() {
    alert('componentWillUnmount')
  }

  onCountClick = () =>
    this.setState(
      prevState => ({ count: prevState.count }),
      () => alert('callback'),
    )

  render() {
    alert('render Lifecycle Component')

    return (
      <div
        style={{
          marginTop: 50,
          width: 200,
          height: 100,
          backgroundColor: 'red'
        }}
      >
        <h3>LifecycleComponent</h3>
        <br />
        <input
          type="button"
          value="Lifecycle Click"
          onClick={this.onCountClick}
        />
      </div>
    )
  }
}

class TestLifecycleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onCountClick = () =>
    this.setState({ count: this.state.count + 1 })

  render() {
    const { count } = this.state
    alert('render Test Lifecycle Component')
    console.log(`Test Lifecycle Click ${count} % 2: ${count % 2}`)

    return (
      <div
        style={{
          marginTop: 50,
          width: 500,
          height: 250,
          backgroundColor: 'aqua',
        }}
      >
        <h3>TestLifecycleComponent</h3>
        <br />
        <input
          type="button"
          value="Test Lifecycle Click"
          onClick={this.onCountClick}
        />
        {!count % 2 ? null : <LifecycleComponent countClick={count} />}
      </div>
    )
  }
}

export default function render(props) {
  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <h2>lifecycle_lesson_1</h2>
      <TestLifecycleComponent />
    </div>
  )
}
