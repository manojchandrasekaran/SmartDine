import { useForm } from 'react-hook-form';
import { instance } from '../../api';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '@/lib/formschema';

function Signup() {
  const form = useForm({
    defaultValues: {
      ad_city: '',
      ad_email: '',
      ad_name: '',
      ad_password: '',
      ad_phone_num: '',
      ho_address: '',
      ho_name: '',
    },
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    const response = await instance.post('/auth/signup', data);
    console.log('Data=', response);
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg'>
        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800'>
          Sign Up
        </h2>
        <Form {...form}>
          <form className='space-y-4'>
            <FormField
              control={form.control}
              name='ho_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hotel Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your Hotel Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='ho_address'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hotel Address</FormLabel>
                  <FormControl>
                    <Textarea
                      rows='3'
                      placeholder='Enter your Hotel Address'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='ad_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='ad_email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email ID</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Enter your Email ID'
                      {...field}
                    />
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
                      placeholder='Enter your Password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='ad_city'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your city' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='ad_phone_num'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type='tel'
                      placeholder='eg: 9XXXXX XXXXX'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type='submit'
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

export default Signup;
