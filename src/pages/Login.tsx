import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { z } from "zod"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
 
const loginFormShema = z.object({
  username: z.string(),
  password: z.string()
})





export default function Login() {


    const form = useForm<z.infer<typeof loginFormShema>>({
        resolver: zodResolver(loginFormShema),
        defaultValues: {
            username: '',
        }
    })


    function onSubmit(values: z.infer<typeof loginFormShema>) {
        console.log(values)
    }

  return (
    <div className='flex min-h-dvh'>
      
      {/* img */}
      <div className='bg-slate-600 flex-1'></div>

      <Form  {...form}>
        <form className='flex-1  flex flex-col items-center justify-center gap-2' onSubmit={form.handleSubmit(onSubmit)}>
          <h1 className='text-3xl font-medium'>Login to your account</h1>
          <h5 className='text-gray-600 font-medium mb-3'>Enter your account's information to login</h5>
          <FormField 

            control={form.control}
            name='username'
            render={({field}) => (
              <FormItem className='min-w-[25vw]'>
                <FormControl>
                  <Input placeholder='Username' {...field} />
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
            <FormItem className='min-w-[25vw]'>
              <FormControl>
                <Input  type='password' placeholder='Password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

          />


          <Button type='submit' className='shadow min-w-[25vw]'>Login</Button>
        </form>
      </Form>

    </div>
  )
}
