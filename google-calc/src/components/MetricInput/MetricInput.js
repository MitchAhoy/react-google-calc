import React from 'react';
import { Button, Form } from 'react-bootstrap'
import MetricInputCard from '../MetricInputCard/MetricInputCard'

function MetricInput(props) {

  const inputFields = ['Campaign Name', 'Clicks', 'Impressions', 'Cost', 'Conversions', 'IS Lost (Rank)', 'IS Lost (Budget)']

  const formFields = inputFields.map((field, idx) => <MetricInputCard key={idx} metricLabel={field} />
  )

  return (

    <div className='MetricInput text-center'>
      <Form>
        <div className='d-flex flex-wrap justify-content-center m-3'>
          {formFields}
        </div>
        <Button>
          Calculate!
      </Button>
      </Form>

    </div>

  );
}

export default MetricInput;