import React, { useState, useEffect } from 'react';
import MetricInput from '../MetricInput/MetricInput'
import OverviewTable from '../OverviewTable/OverviewTable'
import CalculateMetrics from '../../helpers/calculate'
import DetailedBreakdown from '../DetailedBreakdown/DetailedBreakdown'

function Dashboard() {

  const [campaigns, setCampaigns] = useState([])
  const [calculatedCampaigns, setCalculatedCampaigns] = useState([])

  const submitCampaign = formData => {
    setCampaigns([...campaigns, formData])
  }

  console.log(campaigns)

  useEffect(() => {
    let tempCampaigns = []
    campaigns.forEach(campaign => {
      tempCampaigns.push(new CalculateMetrics(campaign['Campaign Name'], campaign['Clicks'], campaign['Impressions'], campaign['Cost'], campaign['Conversions'], campaign['IS Lost (Rank)'], campaign['IS Lost (Budget)'])) 
    })
    setCalculatedCampaigns(tempCampaigns)
  }, [campaigns])

  return (

    <div className='Dashboard'>
      <MetricInput submitCampaign={submitCampaign} />
      <OverviewTable campaigns={calculatedCampaigns} />
      <DetailedBreakdown />
    </div>

  );
}

export default Dashboard;