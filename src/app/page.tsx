"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState("");

  const handleChange = (value) => {
    setSelectedImage(value);
  };

  return (
    <div className="min-h-screen w-full relative">
      <div className="mesh-gradient absolute inset-0 -z-10">
        <div className="mesh-blob mesh-1"></div>
        <div className="mesh-blob mesh-2"></div>
        <div className="mesh-blob mesh-3"></div>
        <div className="mesh-blob mesh-4"></div>
      </div>

      <div className="shadow-lg rounded-xl w-[900px] h-[650px] mx-25 bg-white/30 backdrop-blur-2xl absolute left-0 top-1/2 transform -translate-y-1/2 border border-gray-300 p-5 flex items-center justify-center">
        {selectedImage && (
          <div className="relative">
            <img
              src={`/${selectedImage}`}
              alt="Selected Certificate"
              className="w-[830px] h-[580px] object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      <div className="shadow-lg w-100 h-screen bg-white absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-300 p-5">
        <div className="flex justify-center top-10 ">
          <img src={`/logo.png`} alt="Logo" className="h-50" />
        </div>
        <main className="top-[100px] flex flex-col items-center justify-center p-10 space-y-6">
          <Input
            type="text"
            placeholder="Type something..."
            className="w-full max-w-md"
          />

          <Button className="w-full max-w-md">Submit</Button>

          <Select
            className="h-40 w-full max-w-md rounded-md border p-4 bg-white"
            onValueChange={handleChange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="certificate_1.jpg">Certificate 1</SelectItem>
              <SelectItem value="certificate_2.jpg">Certificate 2</SelectItem>
              <SelectItem value="certificate_3.jpg">Certificate 3</SelectItem>
            </SelectContent>
          </Select>
        </main>
      </div>
    </div>
  );
}
