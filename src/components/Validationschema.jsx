// src/components/validationSchema.js
import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  age: Yup.number().min(18, 'You must be at least 18 years old').required('Age is required'),
  contactNumber: Yup.string().matches(/^\d{10}$/, 'Contact Number must be exactly 10 digits').required('Contact Number is required'),
  description: Yup.string().max(500, 'Description cannot be longer than 500 characters'),
});
