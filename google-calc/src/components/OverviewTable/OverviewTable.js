import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import DetailedBreakdown from '../DetailedBreakdown/DetailedBreakdown'
import { Trash } from 'react-bootstrap-icons'


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
      <Table responsive bordered hover striped className='text-center'>
        <thead>
          <tr>
            {columns.map((col, idx) => <th key={idx}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {props.campaigns.map((campaign, idx) => {
            return <tr key={idx}>
              <td className='align-middle'>{campaign.campaignName}</td>
              <td className='align-middle'>{campaign.additionalClicks.toFixed()}</td>
              <td className='align-middle'>{campaign.additionalConversions.toFixed()}</td>
              <td className='align-middle'>${campaign.additionalCost.toFixed(2)}</td>
              <td className='align-middle' onClick={showDetailedMetrics} id={campaign.id}><button id={campaign.id} className='btn btn-primary text-center'>View More</button></td>
              <td className='align-middle' id={campaign.id} onClick={props.removeCampaign}><h2 id={campaign.id} style={{ cursor: 'pointer', color: 'red' }} color='red'>X</h2></td>
            </tr>
          })}
        </tbody>
      </Table>
      {modalShow && <DetailedBreakdown display={modalShow} currCampaign={detailedCampaign} hide={hideDetailedMetrics} />}
    </div>



  );
}

export default OverviewTable;