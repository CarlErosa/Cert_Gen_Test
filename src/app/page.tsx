import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


export const metadata = {
  title: 'Certificate Generator',
  description: 'ICPEP Tech Dept Certificate Generator',
  icons: {
    icon: "/favicon-32x32.png"
  }
}

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="mesh-gradient absolute inset-0 -z-10">
        <div className="mesh-blob mesh-1"></div>
        <div className="mesh-blob mesh-2"></div>
        <div className="mesh-blob mesh-3"></div>
        <div className="mesh-blob mesh-4"></div>
      </div>
    
      <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-6">
        


        <Input
          type="text"
          placeholder="Type something..."
          className="w-full max-w-md"
        />

    
        <Button className="w-full max-w-md">
          Submit
        </Button>

    
        <ScrollArea className="h-40 w-full max-w-md rounded-md border p-4 bg-white">
          <div className="space-y-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="p-2 bg-gray-100 rounded shadow text-sm"
              >
                Scroll item {i + 1}
              </div>
            ))}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </main>
    </div>
  );
}
