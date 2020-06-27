import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap'
import MetricInputCard from '../MetricInputCard/MetricInputCard'

function MetricInput(props) {

  const inputFields = ['Campaign Name', 'Clicks', 'Impressions', 'Cost', 'Conversions', 'IS Lost (Rank)', 'IS Lost (Budget)']

  const [formData, setFormData] = useState({})

  const handleChange = evt => {

    if (typeof parseInt(evt.target.value) === 'number') {
      setFormData({ ...formData, [evt.target.name]: parseInt(evt.target.value) })
    } else if (typeof parseInt(evt.target.value) !== 'number') {
      setFormData({ ...formData, [evt.target.name]: evt.target.value.toString() })
    }
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.submitCampaign(formData)
    setFormData({})
  }

  const formFields = inputFields.map((field, idx) => <MetricInputCard key={idx} metricLabel={field} inputChange={handleChange} />
  )

  return (

    <div className='MetricInput text-center'>
      <Form onSubmit={handleSubmit}>
        <div className='d-flex flex-wrap justify-content-center m-3'>
          {formFields}
        </div>
        <Button type='submit'>Calculate!</Button>
      </Form>

    </div>

  );
}

export default MetricInput;