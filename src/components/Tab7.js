import React from 'react';
import {Form,TextArea } from 'semantic-ui-react';

const TextAreaExampleTextArea = () => (
    <Form>
      <TextArea id="email" placeholder='Lütfen email adresinizi giriniz...' />
    </Form>
  
  )

export default function Tab7() {
  return (
    <div>
      <label id='radioQuestion2'>Email adresini gir</label>
        <TextAreaExampleTextArea/><br/>
    </div>
  );
}