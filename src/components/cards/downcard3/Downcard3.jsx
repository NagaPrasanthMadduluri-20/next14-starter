import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PlainCards from "../plaincards";

const DownCard3 = () => {
  return (
    <div className="border-2 border-slate-100 shadow-lg rounded-[20px] p-4 space-y-20">
   
      <Card>
        
        <CardContent>
        <p className='p-2 bg-slate-700 rounded mx-auto text-center max-w-[270px] my-6 rotate-6'>*Scout is currently in beta</p>
        <p className='p-2 bg-slate-800 rounded mx-auto text-center max-w-[250px] my-6 rotate-(-6)'>*Scout is currently in beta</p>
        <p className='p-2 bg-slate-600 rounded mx-auto text-center max-w-[260px] my-6 rotate-6'>*Scout is currently in beta</p>
        </CardContent>
        <CardFooter>
        <p className='text-xl'>Customize your AI</p>
      <p  className='text-xs'>Build custom workflows and apps in minutes</p>   
        </CardFooter>
      </Card>
    </div>
  );
};

export default DownCard3;
