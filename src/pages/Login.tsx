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
 
const loginFormShema = z.object({
  username: z.string(),
  password: z.string()
})





export default function Login() {


    const form = useForm<z.infer<typeof loginFormShema>>({
        resolver: zodResolver(loginFormShema),
        defaultValues: {
            username: '',
            password: '',
        }
    })


    function onSubmit(values: z.infer<typeof loginFormShema>) {
        console.log(values)
    }

  return (
    <div className='flex min-h-dvh'>
      
      {/* img */}
      <div className='bg-slate-600 flex-1 hidden md:flex bg-[url(images/1.jpeg)] bg-cover shadow-lg backdrop-blur  flex-col p-5'>
      
      <h1 className='text-2xl text-slate-50'>Logo</h1>
      <Separator className='flex-1' />
      <p className='text-slate-50  bg-black bg-opacity-30 rounded-sm p-2 backdrop-blur-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima laboriosam neque autem, commodi totam exercitationem.</p>

      </div>

      <div className='flex-1 flex flex-col items-center justify-center '>
        <Form   {...form}>
          <form className='  flex flex-col items-center justify-center gap-2  md:min-w-[30vw]' onSubmit={form.handleSubmit(onSubmit)}>
            <h1 className='text-3xl font-medium'>Login to your account</h1>
            <h5 className='text-gray-600 font-medium mb-3'>Enter your account's information to login</h5>
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

            <Button type='submit' className='shadow w-full'>Login</Button>
            <div>I Dont have an account! <Link to={"/signup"} className='text-emerald-600 underline' >Sign Up</Link> </div>
            <Hr className='w-full'>or continue with</Hr>
            <Button type='button'  className='text-white shadow w-full bg-blue-600 hover:bg-blue-700 '> <FacebookIcon /> Sign in with Facebook</Button>
          </form>
        </Form>


      </div>

        {/* rights */}
        <span className='absolute bottom-0 right-0 m-5 opacity-70'>By ALi-<b className="font-bold text-blue-500">404</b> </span>
    </div>
  )
}
