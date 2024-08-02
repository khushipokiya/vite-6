// MyForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from './Validationschema';
import { useFormContext } from '../FormContext';

const MyForm = () => {
  const { formData, setFormData } = useFormContext();

  return (
    <Formik
      initialValues={{
        name: formData.name || '',
        email: formData.email || '',
        age: formData.age || '',
        contactNumber: formData.contactNumber || '',
        description: formData.description || '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setFormData(values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-3xl mx-auto p-8 bg-gray-50 border border-gray-300 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">User Information Form</h1>

          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-800">Name</label>
            <Field
              type="text"
              name="name"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
            <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-800">Email</label>
            <Field
              type="email"
              name="email"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
            <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-6">
            <label htmlFor="age" className="block text-lg font-semibold text-gray-800">Age</label>
            <Field
              type="number"
              name="age"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
            <ErrorMessage name="age" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-6">
            <label htmlFor="contactNumber" className="block text-lg font-semibold text-gray-800">Contact Number</label>
            <Field
              type="text"
              name="contactNumber"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
            <ErrorMessage name="contactNumber" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-lg font-semibold text-gray-800">Description</label>
            <Field
              as="textarea"
              name="description"
              rows="4"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
            <ErrorMessage name="description" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
