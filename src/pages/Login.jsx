import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { instance } from '../api';
import { Button } from '../components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { loginSchema } from '@/lib/formschema';

function Login() {
  const form = useForm({
    defaultValues: {
      ad_email: '',
      ad_password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    const response = await instance.post('/auth/login', data);
    console.log('Data=', response);
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg'>
        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800'>
          Chef Login
        </h2>
        <Form {...form}>
          <form className='space-y-6'>
            <FormField
              control={form.control}
              name='ad_email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='ad_password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Enter your password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type='button'
              className='w-full'
              onClick={form.handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Login;
