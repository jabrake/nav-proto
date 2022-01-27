import React from 'react';
import NavLink from './NavLink.jsx';

class LeftNavContainer extends React.Component {
  constructor (props) {
    super (props);
  }

  componentDidMount() {
    console.log('NavContainer mounted!');
  }

  render() {
    return (
      <div id="left-nav">
        <p>LOGO</p>

        <p>CORE TOOLS</p>
        {this.props.coreTools.map(tool =>
          <NavLink tool={tool}/>
          )}

        <p>PROJECT MANAGEMENT</p>
        {this.props.projectManagementTools.map(tool =>
          <NavLink tool={tool}/>
          )}

        <p>FINANCIAL MANAGEMENT</p>
        {this.props.financialManagementTools.map(tool =>
          <NavLink tool={tool}/>
          )}

        <p>RESOURCE MANAGEMENT</p>
        {this.props.resourceManagementTools.map(tool =>
          <NavLink tool={tool}/>
          )}
      </div>
    )
  }
}

export default LeftNavContainer;