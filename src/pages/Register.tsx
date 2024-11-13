import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

import { z } from "zod"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Hr from '@/components/ui/hr'
import { FacebookIcon } from 'lucide-react'
import { Separator } from '@radix-ui/react-separator'
import { Link } from 'react-router-dom'
 
const RegisterFormShema = z.object({
  email: z.string().email(),
  username: z.string().min(4),
  password: z.string().min(6),
  confirm_password: z.string().min(6)
}).superRefine(({ confirm_password, password }, ctx) => {
  if (confirm_password !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: ['confirm_password']
    });
  }
});





export default function Register() {


    const form = useForm<z.infer<typeof RegisterFormShema>>({
        resolver: zodResolver(RegisterFormShema),
        defaultValues: {
            email: '',
            username: '',
            password: '',
            confirm_password: '',
        }
    })


    function onSubmit(values: z.infer<typeof RegisterFormShema>) {
        console.log(values)
    }

  return (
    <div className='flex min-h-dvh flex-row-reverse '>
      
      {/* img */}
      <div className='bg-slate-600 flex-1 hidden md:flex bg-[url(images/3.jpeg)] bg-cover shadow-lg backdrop-blur  flex-col p-5 '>
      
      <h1 className='text-2xl text-right'>Logo</h1>
      <Separator className='flex-1' />
      <p className='text-slate-50  bg-black bg-opacity-30 rounded-sm p-2 backdrop-blur-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima laboriosam neque autem, commodi totam exercitationem.</p>

      </div>

      <div className='flex-1 flex flex-col items-center justify-center '>
        <Form   {...form}>
          <form className='  flex flex-col items-center justify-center gap-2  md:min-w-[30vw]' onSubmit={form.handleSubmit(onSubmit)}>
            <h1 className='text-3xl font-medium'>Create your account</h1>
            <h5 className='text-gray-600 font-medium mb-3'>Enter your account's information to Register</h5>
        

        {/* password */}
        
        <FormField 

              control={form.control}
              name='email'
              render={({field}) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input autoComplete='email' type='email' placeholder='Email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}

            />
        
          {/* username */}
            <FormField 

              control={form.control}
              name='username'
              render={({field}) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input autoComplete='username' placeholder='Username' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}

            />

            {/* password */}
            <FormField 

            control={form.control}
            name='password'
            render={({field}) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input autoComplete='current-password'  type='password' placeholder='Password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

            />
          {/* confirm password */}
          <FormField 

          control={form.control}
          name='confirm_password'
          render={({field}) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input autoComplete='current-password'  type='password' placeholder='Confirm Password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

          />

            <Button type='submit' className='shadow w-full'>Create Account</Button>
            <div>I Already have an account! <Link to={"/signin"} className='text-emerald-600 underline' >Sign In</Link> </div>
            <Hr className='w-full'>or continue with</Hr>
            <Button type='button'  className='text-white shadow w-full bg-blue-600 hover:bg-blue-700 '> <FacebookIcon /> Sign up with Facebook</Button>
          </form>
        </Form>


      </div>

        {/* rights */}
        <span className='absolute bottom-0 left-0 m-5 opacity-70 '>By ALi-<b className="font-bold text-blue-500">404</b> </span>
    </div>
  )
}
