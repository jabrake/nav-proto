import React from 'react';

class NavLink extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Nav Link mounted!');
  }

  render() {
    return (
      <div>
        <a>{this.props.tool}</a>
      </div>
    )
  }
}

export default NavLink;