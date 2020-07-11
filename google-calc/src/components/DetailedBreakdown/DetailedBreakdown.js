import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap'

function DetailedBreakdown(props) {

  const currCampaign = props.currCampaign ? props.currCampaign : {}

  const headings = {
    basic: ['Clicks', 'Impr.', 'CTR', 'Cost', 'Avg. CPC', 'Conv.', 'Cost/conv', 'Conv. Rate', 'IS Lost (Rank)', 'IS Lost (Budget)', 'Impr. Share'],
    projections: ['Total Impr. Eligible', 'Potential Impr. 0% Budget', 'Potential Impr. 0% Rank', 'Projected Impr.', 'Projected Clicks', 'Projected Cost', 'Projected Conv.'],
    additional: ['Additional Impr.', 'Additional Clicks', 'Additional Cost', 'Additional Conv.']
  }

  return (

    <Modal
      show={props.display}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='text-center'
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {currCampaign.campaignName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table responsive bordered hover>
          <thead
            className='text-white'
            style={{ background: '#061058' }}
          >
            <tr>
              {headings.basic.map((heading, idx) => <td key={idx}>{heading}</td>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currCampaign.clicks.toFixed()}</td>
              <td>{currCampaign.impressions.toFixed()}</td>
              <td>{currCampaign.ctr.toFixed(2) * 100}%</td>
              <td>${currCampaign.cost.toFixed(2)}</td>
              <td>${currCampaign.avgCpc.toFixed(2)}</td>
              <td>{currCampaign.conversions.toFixed()}</td>
              <td>${currCampaign.costConversion.toFixed(2)}</td>
              <td>{(currCampaign.conversionRate * 100).toFixed(2)}%</td>
              <td>{(currCampaign.isLostRank * 100).toFixed(2)}%</td>
              <td>{(currCampaign.isLostBudget * 100).toFixed(2)}%</td>
              <td>{(currCampaign.impressionShare * 100).toFixed(2)}%</td>
            </tr>
          </tbody>
        </Table>
        <Table responsive bordered hover>
          <thead
            className='text-white'
            style={{ background: '#061058' }}
          >
            <tr>
              {headings.projections.map((heading, idx) => <td key={idx}>{heading}</td>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currCampaign.eligibleImpressions.toFixed()}</td>
              <td>{currCampaign.budgetPotentialImpressions.toFixed()}</td>
              <td>{currCampaign.rankPotentialImpressions.toFixed()}</td>
              <td>{currCampaign.projectedImpressions.toFixed()}</td>
              <td>{currCampaign.projectedClicks.toFixed()}</td>
              <td>${currCampaign.projectedCost.toFixed(2)}</td>
              <td>{currCampaign.projectedConversions.toFixed()}</td>
            </tr>
          </tbody>
        </Table>

        <Table responsive bordered hover>
          <thead
            className='text-white'
            style={{ background: '#061058' }}
          >
            <tr>
              {headings.additional.map((heading, idx) => <td key={idx}>{heading}</td>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currCampaign.additionalImpressions.toFixed()}</td>
              <td>{currCampaign.additionalClicks.toFixed()}</td>
              <td>${currCampaign.additionalCost.toFixed(2)}</td>
              <td>{currCampaign.additionalConversions.toFixed()}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.hide}>Close</Button>
      </Modal.Footer>
    </Modal>

  );
}

export default DetailedBreakdown;