"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Camera } from "lucide-react";
import ArucoDetector from "./ArucoDetector";

interface CamerProps {
  setCommands: React.Dispatch<React.SetStateAction<Command[]>>;
  gameType: GameType;
}

const CamerPopUp = ({ setCommands, gameType }: CamerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCapture = () => {
    console.log("Image captured");
    setIsOpen(false);
  };

  return (
    <div className="w-full h-0 bg-gray-100 flex flex-col items-center justify-center">
      <canvas className="w-full h-full bg-white" />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="fixed bottom-4 right-4 text-black rounded-full p-3">
            <Camera className="h-6 w-6 text-black" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[100vw] sm:max-h-[100vh] p-0">
          <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
            <ArucoDetector setCommands={setCommands} gameType={gameType} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CamerPopUp;
