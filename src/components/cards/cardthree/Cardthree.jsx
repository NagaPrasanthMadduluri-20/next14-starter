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

const Cardthree = () => {
  return (
    <div className="border-2 border-slate-100 shadow-lg rounded-[20px] p-4 space-y-20">
      <div className="relative">
          <Card className="absolute z-40 shadow-lg">
            <PlainCards style={{ marginTop: 5 }} />
          </Card>
        </div>
        <div className="relative">
          <Card className="absolute z-40 shadow-lg">
            <PlainCards style={{ marginTop: 15 }} />
          </Card>
        </div>
        <div className="relative">
          <Card className="absolute z-30 shadow-lg">
            <PlainCards style={{ marginTop: 30 }} />
          </Card>
        </div>
        <div className="relative">
          <Card className="absolute z-20 shadow-lg">
            <PlainCards style={{ marginTop: 45 }} />
          </Card>
        </div>
      <Card>
        
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>    
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cardthree;
