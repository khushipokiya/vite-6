// App.js
import React from 'react';
import MyForm from './components/Myform';
import { FormProvider } from './FormContext';

const App = () => (
  <FormProvider>
    <MyForm />
  </FormProvider>
);

export default App;
