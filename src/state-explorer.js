import mori from 'mori'
import MoriComponent from './mori-component'
import './index.css'

class StateExplorer extends MoriComponent {
  render () {
    const jsData = mori.toJs(this.props.imdata)
    const jsonString = JSON.stringify(jsData, null, 2)

    return (
      <section id='explorerContainer'>
        <h1>State Explorer</h1>
        <textarea value={jsonString} />
      </section>
    )
  }
}

export default StateExplorer
