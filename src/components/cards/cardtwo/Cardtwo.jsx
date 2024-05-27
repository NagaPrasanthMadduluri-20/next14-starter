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

const Cardtwo = () => {
  return (
   <div className='border-2 border-slate-100 shadow-lg rounded-[20px] p-4 space-y-20'>
       <Card className="rounded">
      <CardHeader>
        {/* <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid items-center gap-2 ">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="short answer" className="border-none bg-slate-800 rounded-2xl"/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Value</Label>
              <Input id="name" placeholder="short answer" className="border-none bg-gray-800 rounded-2xl" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
      <Badge variant="outline">Text</Badge>
      <Badge variant="outline">LLM</Badge>
      <Badge variant="outline">web</Badge>
      <Badge variant="outline">https</Badge>
      <Badge variant="outline">save</Badge>
      </CardFooter>

      <div className="mt-20 pb-16 pl-2">
      <p className='text-xl'>Customize your AI</p>
      <p  className='text-xs'>Build custom workflows and apps in minutes</p>
      </div>
    </Card>
      
    </div>
  )
}

export default Cardtwo
