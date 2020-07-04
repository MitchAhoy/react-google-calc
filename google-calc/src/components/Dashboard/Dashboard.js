import React, { useState, useEffect } from 'react';
import MetricInput from '../MetricInput/MetricInput'
import OverviewTable from '../OverviewTable/OverviewTable'
import CalculateMetrics from '../../helpers/calculate'
import saveCampaigns from '../../helpers/saveLocalStorage'


function Dashboard() {

  const initState = () => {
    let campaignsJSON = localStorage.getItem('campaigns')
    return campaignsJSON !== null ? JSON.parse(campaignsJSON) : [] 
  }

  const [campaigns, setCampaigns] = useState([])
  const [calculatedCampaigns, setCalculatedCampaigns] = useState(initState())

  console.log(campaigns, calculatedCampaigns)
  const submitCampaign = formData => {
    setCampaigns([...campaigns, formData])
  }


  useEffect(() => {
    if (campaigns.length !== 0) {
      let tempCampaigns = {}
      campaigns.forEach((campaign, idx) => {
        tempCampaigns[idx] = new CalculateMetrics(campaign['Campaign Name'], campaign['Clicks'], campaign['Impressions'], campaign['Cost'], campaign['Conversions'], campaign['IS Lost (Rank)'], campaign['IS Lost (Budget)'])
      })
      setCalculatedCampaigns([...calculatedCampaigns, {...tempCampaigns}])
    }
  }, [campaigns])

  return (

    <div className='Dashboard'>
      <MetricInput submitCampaign={submitCampaign} />
      <OverviewTable campaigns={calculatedCampaigns} />

    </div>

  );
}

export default Dashboard;