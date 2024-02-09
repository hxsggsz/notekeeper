import { LogOut, Paperclip, Plus } from "lucide-react";
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
    <nav className="fixed left-0 top-0 flex h-svh flex-col items-center justify-between bg-cream p-4 shadow-lg dark:bg-midnight">
      <Paperclip data-testid="notekeeper" />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={props.handleNote}>
            <Plus data-testid="plus" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Add Note</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={props.handleExit}>
            <LogOut data-testid="exit" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Exit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
};
