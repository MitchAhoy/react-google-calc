import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import MetricInputCard from '../MetricInputCard/MetricInputCard'

function MetricInput(props) {

  const inputFields = ['Campaign Name', 'Clicks', 'Impressions', 'Cost', 'Conversions', 'IS Lost (Rank)', 'IS Lost (Budget)']

  const [formData, setFormData] = useState({})

  const handleChange = evt => {

    if (evt.target.name !== 'Campaign Name') {
      setFormData({ ...formData, [evt.target.name]: parseInt(evt.target.value) })
      console.log(typeof parseInt(evt.target.value))
    } else {
      setFormData({ ...formData, [evt.target.name]: evt.target.value })
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
        <Button type='submit' className='mb-3'>Calculate!</Button>
      </Form>

    </div>

  );
}

export default MetricInput