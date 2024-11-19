"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CapitalizeString } from "@/functions/format"

const frameworks = [
  {
    value: "real_madrid",
  },
  {
    value: "barcelona",
  },
  {
    value: "man_united",
  },
  {
    value: "chelsea",
  },
  {
    value: "man_city",
  },
]



interface IClubeSelectPop {
    children: React.ReactNode,
    openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
    valueState: [string, React.Dispatch<React.SetStateAction<string>>]
}

export function ClubeSelectPop({children, openState, valueState}: IClubeSelectPop) {
  const [open, setOpen] = openState
  const [value, setValue] = valueState

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {children}
        
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0 " >
        <Command  className="*:bg-[rgba(255,255,255,0.4)]">
          <CommandInput placeholder="Search clube..." />
          <CommandList>
            <CommandEmpty>No Clube found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((clube) => (
                <CommandItem
                  key={clube.value}
                  value={clube.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === clube.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {CapitalizeString(clube.value)}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
