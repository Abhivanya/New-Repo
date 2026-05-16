"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import ModeToggle from "./ModeToggle"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between md:gap-8 p-6 w-full md:max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold">Vanya.dev</h1>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-4 items-center">
        <Button variant="ghost">Projects</Button>
        <Button variant="ghost">About</Button>
        <Button>Contact</Button>
        <ModeToggle />
      </div>

      {/* Mobile menu */}
      <div className="md:hidden flex items-center gap-2">
        <ModeToggle />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <div className="flex flex-col gap-4 mt-10">
              <Button variant="ghost">Projects</Button>
              <Button variant="ghost">About</Button>
              <Button>Contact</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}