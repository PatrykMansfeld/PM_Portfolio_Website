// import React from 'react'
import PropTypes from 'prop-types'

SidePanelComponent.propTypes = {
  VarLeft: PropTypes.string,
  VarRight: PropTypes.string
}

function SidePanelComponent({VarLeft, VarRight}) {
  return (
    <div>
      <div className='left-side-panel'><h1 className='left-panel-text'>{VarLeft}</h1></div>
      <div className='right-side-panel'><h1 className='right-panel-text'>{VarRight}</h1></div>
    </div>
  )
}

export default SidePanelComponent