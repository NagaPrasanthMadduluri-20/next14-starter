import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Label } from "@/components/ui/label"
  import { Input } from "@/components/ui/input"
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"

const DownCard2 = () => {
  return (
   <div className='border-2 border-slate-100 shadow-lg rounded-[20px] p-4 space-y-20'>
       <Card className="rounded">
      <CardHeader>
        {/* <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent className="">
      <p className='p-2 bg-slate-900 rounded-full mx-auto text-center max-w-[300px] my-6'>*Scout is currently in beta</p>
      <p className='p-2 bg-slate-900 rounded-full mx-auto text-center max-w-[100px] my-6'>*Scout </p>
      <p className='p-2 bg-slate-900 rounded-full mx-auto text-center max-w-[300px] my-6'>*Scout is currently in beta</p>
      </CardContent>
      <CardFooter className="mt-10 pb-6 pl-2">
      <p className='text-xl'>Customize your AI</p>
      <p  className='text-xs'>Build custom workflows and apps in minutes</p>
      </CardFooter>

     
    </Card>
      
    </div>
  )
}

export default DownCard2
