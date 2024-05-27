import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import star from "../../../../public/Group 25.svg";
import remote from "../../../../public/Group 26.svg";
import puzzle from "../../../../public/Group 27.svg";
import line from "../../../../public/Vector.svg";
import Image from "next/image";

const Cardone = () => {
  return (
    <div>
    <div className="border-2 border-slate-100 shadow-lg rounded-[20px] p-4 space-y-20">
      <Card className="bg-contain bg-center bg-repeat rounded-[20px]" style={{ backgroundImage: `url('/Vector.svg')` } }>
        <div className="flex flex-row justify-between items-center px-4 py-4 ">
          <CardHeader >
            <CardDescription>
              <div className="my-auto">
                <Image src={star} alt="image"/>
              </div>
            </CardDescription>
        

          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-y-16">
              <div>
                <Image src={remote} alt="image"/>
              </div>
              <div>
                <Image src={puzzle} alt="image" />
              </div>
            </div>
          </CardContent>
        </div>

        <CardFooter className="flex flex-col mt-24">
          <p className="text-xl">AI Where you work</p>
          <p className="text-xs">Deploy Scout Apps to Slack or Discord</p>
        </CardFooter>
      </Card>
    </div>
    </div>
  );
};

export default Cardone;
