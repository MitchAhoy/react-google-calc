import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap'

function DetailedBreakdown(props) {

  const currCampaign = props.currCampaign ? props.currCampaign : {}

  const headings = {
    basic: ['Clicks', 'Impr.', 'CTR', 'Cost', 'Avg. CPC', 'Conv.', 'Cost/conv', 'Conv. Rate', 'IS Lost (Rank)', 'IS Lost (Budget)', 'Impr. Share'],
    projections: ['Total Impr. Eligible', 'Potential Impr. 0% Budget', 'Potential Impr. 0% Rank', 'Projected Impr.', 'Projected Clicks', 'Projected Cost', 'Projected Conv.'],
    additional: ['Additional Impr.', 'Additional Clicks', 'Additional Cost', 'Additional Conv.', 'Additional CPA']
  }

  return (

    <Modal
      show={props.display}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {currCampaign.campaignName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table responsive bordered>
          <thead>
            <tr>
              {headings.basic.map((heading, idx) => <td key={idx}>{heading}</td>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currCampaign.clicks}</td>
              <td>{currCampaign.impressions}</td>
              <td>{currCampaign.ctr}</td>
              <td>{currCampaign.cost}</td>
              <td>{currCampaign.avgCpc}</td>
              <td>{currCampaign.conversions}</td>
              <td>{currCampaign.costConversion}</td>
              <td>{currCampaign.conversionRate}</td>
              <td>{currCampaign.isLostRank}</td>
              <td>{currCampaign.isLostBudget}</td>
              <td>{currCampaign.impressionShare}</td>
            </tr>
          </tbody>
        </Table>
        <Table responsive bordered>
          <thead>
            <tr>
              {headings.projections.map((heading, idx) => <td key={idx}>{heading}</td>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currCampaign.eligibleImpressions}</td>
              <td>{currCampaign.budgetPotentialImpressions}</td>
              <td>{currCampaign.rankPotentialImpressions}</td>
              <td>{currCampaign.projectedImpressions}</td>
              <td>{currCampaign.projectedClicks}</td>
              <td>{currCampaign.projectedCost}</td>
              <td>{currCampaign.ProjectedConversions}</td>
            </tr>
          </tbody>
        </Table>

        <Table responsive bordered>
          <thead>
            <tr>
              {headings.additional.map((heading, idx) => <td key={idx}>{heading}</td>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currCampaign.additionalImpressions}</td>
              <td>{currCampaign.additionalClicks}</td>
              <td>{currCampaign.additionalCost}</td>
              <td>{currCampaign.additionalConversions}</td>
              {/* <td>{currCampaign.additionalConversions}</td> */}
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