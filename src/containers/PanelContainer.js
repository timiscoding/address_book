import React, { PropTypes } from 'react'

class PanelContainer extends React.Component {
  render () {
    let panelProps = this.props.colSize + " panel panel-default";
    return (
      <div className={panelProps}>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default PanelContainer;
