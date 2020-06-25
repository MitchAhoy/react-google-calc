import React from 'react';

import { Card, Form } from 'react-bootstrap'


function MetricInputCard(props) {


  return (


    <Card
      bg='light'
      text='dark'
      style={{ width: '18rem' }}
      className='MetricInputCard border-0 m-3 shadow'
    >
      <Card.Header
        className='bg-dark text-white'
      >
        {props.metricLabel}
      </Card.Header>
      <Card.Body>
        <Form.Control
          onChange={props.inputChange}
          name={props.metricLabel}
        />
      </Card.Body>
    </Card>



  );
}

export default MetricInputCard;