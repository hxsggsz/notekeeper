import { LogOut, Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface INavbar {
  handleNote: () => void;
  handleExit: () => void;
}

export const Navbar = (props: INavbar) => {
  return (
    <nav className="fixed left-0 top-0 flex h-svh flex-col items-center justify-between bg-cream p-2 shadow-lg">
      <h1 className="font-bold">Notekeeper</h1>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={props.handleNote}>
            <Plus />
          </TooltipTrigger>
          <TooltipContent>
            <p>Add Note</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={props.handleExit}>
            <LogOut />
          </TooltipTrigger>
          <TooltipContent>
            <p>Exit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
};
