import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import MetricInputCard from '../MetricInputCard/MetricInputCard'

function MetricInput(props) {

  const inputFields = ['Campaign Name', 'Clicks', 'Impressions', 'Cost', 'Conversions', 'IS Lost (Rank)', 'IS Lost (Budget)']

  const [formData, setFormData] = useState({})

  const handleChange = evt => {

    console.log(formData)

    if (evt.target.name !== 'Campaign Name') {
      setFormData({ ...formData, [evt.target.name]: parseInt(evt.target.value) })
    } else {
      setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }
  }



  const handleSubmit = evt => {
    evt.preventDefault()
    props.submitCampaign(formData)
    setFormData({})
    evt.target.reset()
  }

  const formFields = inputFields.map((field, idx) => <MetricInputCard key={idx} metricLabel={field} inputChange={handleChange} value={formData[field]} />
  )

  return (

    <div className='MetricInput text-center'>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <div className='d-flex flex-wrap justify-content-center m-3'>
          {formFields}
        </div>
        <Button type='submit' className='mb-3'>Calculate!</Button>
      </Form>

    </div>

  );
}

export default MetricInput