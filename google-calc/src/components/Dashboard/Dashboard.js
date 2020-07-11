import React, { useState, useEffect } from 'react';
import MetricInput from '../MetricInput/MetricInput'
import OverviewTable from '../OverviewTable/OverviewTable'
import CalculateMetrics from '../../helpers/calculate'


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

    localStorage.setItem('campaigns', JSON.stringify([...calculatedCampaigns, newCampaign]))
  }

  const removeCampaign = evt => {
    const editCampaigns = [...calculatedCampaigns]
    const campaignToRemove = editCampaigns.findIndex(campaign => campaign.id === evt.target.id)
    console.log(campaignToRemove)

    if (campaignToRemove >= 0) {
      editCampaigns.splice(campaignToRemove, 1)
      setCalculatedCampaigns(editCampaigns)
      localStorage.setItem('campaigns', JSON.stringify(editCampaigns))
    }

  }




  return (

    <div className='Dashboard'>
      <h1 className='text-center m-3'>Google Ads Forecast Calculator</h1>
      <MetricInput submitCampaign={submitCampaign} />
      {calculatedCampaigns.length > 0 && <OverviewTable campaigns={calculatedCampaigns} removeCampaign={removeCampaign} />}

    </div>

  );
}

export default Dashboard;