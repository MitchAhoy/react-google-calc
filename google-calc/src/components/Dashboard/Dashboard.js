import React, { useState, useEffect } from 'react';
import MetricInput from '../MetricInput/MetricInput'
import OverviewTable from '../OverviewTable/OverviewTable'
import CalculateMetrics from '../../helpers/calculate'
import saveCampaigns from '../../helpers/saveLocalStorage'
import unqiqueObjects from '../../helpers/uniqueObjects'


function Dashboard() {

  useEffect(() => {
    if (localStorage.getItem('campaigns') === null) localStorage.setItem('campaigns', '[]')
  })

  const initState = () => {
    let campaignsJSON = localStorage.getItem('campaigns')
    return campaignsJSON !== null ? JSON.parse(campaignsJSON) : []
  }

  const [calculatedCampaigns, setCalculatedCampaigns] = useState(initState())

  const submitCampaign = formData => {
    const newCampaign = new CalculateMetrics(formData['Campaign Name'], formData['Clicks'], formData['Impressions'], formData['Cost'], formData['Conversions'], formData['IS Lost (Rank)'], formData['IS Lost (Budget)'])

    setCalculatedCampaigns([...calculatedCampaigns, newCampaign])

    localStorage.setItem('campaigns', JSON.stringify(newCampaign))
  }




  return (

    <div className='Dashboard'>
      <MetricInput submitCampaign={submitCampaign} />
      {calculatedCampaigns.length > 0 && <OverviewTable campaigns={calculatedCampaigns} />}

    </div>

  );
}

export default Dashboard;