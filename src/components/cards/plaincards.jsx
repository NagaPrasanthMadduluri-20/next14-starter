import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import cardlogo from "../../../public/Group 28.svg";


const PlainCards = () => {
  return (
    <div className="grid gap-4">
      {/* Repeat this Card component for each plain card */}
      <Card className="bg-opacity-1 bg-gray-700 rounded-lg max-w-[300px] mt-5">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={cardlogo} alt="Icon" className="w-6 h-6 mr-2" />
              <CardTitle className="text-white">EL15  Account</CardTitle>
            </div>
            <img src={cardlogo} alt="Progress Icon" className="w-4 h-4" />
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-white">This is Sample Data output which we can replace</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Delete</button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">Save</button>
        </CardFooter>
      </Card>
      {/* Repeat the above Card component for each plain card */}
    </div>
  )
}

export default PlainCards