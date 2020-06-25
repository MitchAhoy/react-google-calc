import React, { useState } from 'react';
import MetricInput from '../MetricInput/MetricInput'

function Dashboard() {

  const [campaigns, setCampaigns] = useState({})

  const submitCampaign = evt => {
    evt.preventDefault()
    console.log('submit from dashboard')
  }


  return (

    <div className='Dashboard'>
      <MetricInput
        submitCampaign={submitCampaign}
      />
    </div>

  );
}

export default Dashboard;