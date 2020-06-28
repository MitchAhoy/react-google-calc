import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import CalculateMetrics from '../../helpers/calculate'

function OverviewTable(props) {



  const columns = ['Campaign Name', 'Additional Clicks', 'Additional Conversions', 'Additional Cost', 'Detailed Breakdown', 'Remove']

  const [projectionMetrics, setProjectionMetrics] = useState({})

  const campaignMetrics = new CalculateMetrics('Brand', 100, 1000, 500, 20, 15, 30)

  console.log(campaignMetrics)

  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          {columns.map((col, idx) => <th key={idx}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.campaigns.map(campaign => {
          return <tr>
            <td>{campaign['Campaign Name']}</td>
          </tr>
        })}
      </tbody>
    </Table>




  );
}

export default OverviewTable;