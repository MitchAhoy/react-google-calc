import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import removeBtn from './close.png'


function OverviewTable(props) {

  const [modalShow, setModalShow] = useState(false)

  const columns = ['Campaign Name', 'Additional Clicks', 'Additional Conversions', 'Additional Cost', 'Detailed Breakdown', 'Remove']

  const showDetailedMetrics = evt => {
    const CampaignId = evt.target.id
  }

  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          {columns.map((col, idx) => <th key={idx}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.campaigns.map((campaign, idx) => {
          return <tr key={idx}>
            <td>{campaign.campaignName}</td>
            <td>{campaign.additionalClicks}</td>
            <td>{campaign.additionalConversions}</td>
            <td>{campaign.additionalCost}</td>
            <td onClick={showDetailedMetrics} id={campaign.id}>View More</td>
            <td><img src={removeBtn}/></td>
          </tr>
        })}
      </tbody>
    </Table>




  );
}

export default OverviewTable;