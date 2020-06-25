import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap'
import MetricInputCard from '../MetricInputCard/MetricInputCard'

function MetricInput(props) {

  const inputFields = ['Campaign Name', 'Clicks', 'Impressions', 'Cost', 'Conversions', 'IS Lost (Rank)', 'IS Lost (Budget)']

  const [formData, setFormData] = useState({})

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const formFields = inputFields.map((field, idx) => <MetricInputCard key={idx} metricLabel={field} inputChange={handleChange} />
  )

  return (

    <div className='MetricInput text-center'>
      <Form onSubmit={props.submitCampaign}>
        <div className='d-flex flex-wrap justify-content-center m-3'>
          {formFields}
        </div>
        <Button type='submit'>Calculate!</Button>
      </Form>

    </div>

  );
}

export default MetricInput;