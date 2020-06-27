import React, { useState } from 'react';
import MetricInput from '../MetricInput/MetricInput'

function Dashboard(props) {

  const [campaigns, setCampaigns] = useState([])

  const submitCampaign = formData => {
    setCampaigns([...campaigns, formData])
    // console.log(form)
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