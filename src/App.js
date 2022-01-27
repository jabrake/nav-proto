import React from 'react';
import LeftNavContainer from './components/LeftNavContainer.jsx';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      favorites: [],
      coreTools: ['Reports', 'Directory', 'Tasks', 'Admin'],
      projectManagementTools: ['Emails', 'RFIs', 'Submittals', 'Instructions', 'Transmittals', 'Inspections', 'Incidents', 'Observations', 'Punch List', 'Meetings', 'Schedule', 'Daily Logs', 'Photos', 'Forms'],
      financialManagementTools: ['Prime Contracts', 'Budget', 'Commitments', 'Change Orders', 'Change Events', 'Direct Costs'],
      resourceManagementTools: ['Timesheets', 'Crews', 'Equipment', 'T&M Tickets']
    };
  }

  componentDidMount() {
    console.log('App mounted!');
  }

  render() {
    return (
      <div>
        <LeftNavContainer
          coreTools={this.state.coreTools}
          projectManagementTools={this.state.projectManagementTools}
          financialManagementTools={this.state.financialManagementTools}
          resourceManagementTools={this.state.resourceManagementTools} />
      </div>
    )
  }
}

export default App;