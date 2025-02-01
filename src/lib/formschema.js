import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  ad_email: yup
    .string()
    .required('Field is required')
    .email('Not a valid email address.'),
  ad_password: yup
    .string()
    .required('Field is required')
    .min(6, 'Minimum 6 characters required'),
});

export const signupSchema = yup.object().shape({
  ho_name: yup.string().required('Hotel name is required'),
  ho_address: yup.string().required('Hotel address is required'),
  ad_name: yup.string().required('User name is required'),
  ad_email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  ad_password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  ad_city: yup.string().required('City is required'),
  ad_phone_num: yup
    .string()
    .matches(/^[6-9][0-9]{9}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});
