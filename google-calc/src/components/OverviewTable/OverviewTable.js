import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import removeBtn from './close.png'
import DetailedBreakdown from '../DetailedBreakdown/DetailedBreakdown'


function OverviewTable(props) {

  const [modalShow, setModalShow] = useState(false)
  const [detailedCampaign, setDetailedCampaign] = useState()

  const columns = ['Campaign Name', 'Additional Clicks', 'Additional Conversions', 'Additional Cost', 'Detailed Breakdown', 'Remove']

  const showDetailedMetrics = evt => {
    setModalShow(!modalShow)
    const currCampaign = props.campaigns.find(campaign => campaign.id === evt.target.id)
    setDetailedCampaign(currCampaign)
  }

  const hideDetailedMetrics = evt => {
    setModalShow(!modalShow)
    setDetailedCampaign()
  }

  return (
    <div>
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
              <td><img src={removeBtn} /></td>
            </tr>
          })}
        </tbody>
      </Table>
      {modalShow && <DetailedBreakdown display={modalShow} currCampaign={detailedCampaign} hide={hideDetailedMetrics} />}
    </div>



  );
}

export default OverviewTable;