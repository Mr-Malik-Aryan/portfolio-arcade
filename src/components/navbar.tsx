import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Button } from "@/components/ui/button"


  export function Navbar() {
    return (
      <Menubar className="rounded-xl h-12 mt-6">
        <MenubarMenu >
              
        <Button variant="ghost">Home</Button>
        <Button variant="ghost" >About</Button>
        <Button variant="ghost">Projects</Button>
        <Button variant="ghost">Contact me</Button>
        

     </MenubarMenu>
        
      </Menubar>
    )
  }
  