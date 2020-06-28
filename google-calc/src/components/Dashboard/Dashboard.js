import React, { useState } from 'react';
import MetricInput from '../MetricInput/MetricInput'
import OverviewTable from '../OverviewTable/OverviewTable'

function Dashboard(props) {

  const [campaigns, setCampaigns] = useState([])

  const submitCampaign = formData => {
    setCampaigns([...campaigns, formData])
  }

  return (

    <div className='Dashboard'>
      <MetricInput submitCampaign={submitCampaign} />
      <OverviewTable campaigns={campaigns} />
    </div>

  );
}

export default Dashboard;