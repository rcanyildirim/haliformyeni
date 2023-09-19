import React from 'react';
import {Form,TextArea } from 'semantic-ui-react';

const TextAreaExampleTextArea = () => (
    <Form>
      <TextArea id="ihtiyacne" placeholder='Aklına gelen hangi detaylar var?' />
    </Form>
  
  )

export default function Tab4() {
  return (
    <div>
      <label id='radioQuestion2'>İhtiyacın detayları neler ?</label>
        <TextAreaExampleTextArea/><br/>
    </div>
  );
}