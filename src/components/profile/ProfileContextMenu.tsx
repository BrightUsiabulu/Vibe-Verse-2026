
import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger
} from "@/components/ui/context-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical, Settings, Share, Award, LogOut } from "lucide-react";

const ProfileContextMenu: React.FC = () => {
  return (
    <div className="absolute right-4 top-4">
      <ContextMenu>
        <ContextMenuTrigger>
          <Button variant="ghost" size="icon" className="text-white">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56 bg-gray-900 border-gray-800 text-white">
          <ContextMenuGroup>
            <ContextMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Account Settings</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <Share className="mr-2 h-4 w-4" />
              <span>Share Profile</span>
            </ContextMenuItem>
          </ContextMenuGroup>
          
          <ContextMenuSeparator className="bg-gray-700" />
          
          <ContextMenuLabel>Rewards</ContextMenuLabel>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Award className="mr-2 h-4 w-4" />
              <span>Live Rewards</span>
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="bg-gray-900 border-gray-800 text-white">
              <ContextMenuItem>Streaming Rewards</ContextMenuItem>
              <ContextMenuItem>Diamonds</ContextMenuItem>
              <ContextMenuItem>Premium Content</ContextMenuItem>
              <ContextMenuItem>Creator Fund</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          
          <ContextMenuSeparator className="bg-gray-700" />
          
          <ContextMenuItem>
            <span>Users Policy</span>
          </ContextMenuItem>
          
          <ContextMenuSeparator className="bg-gray-700" />
          
          <ContextMenuItem className="text-red-500">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log Out</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
};

export default ProfileContextMenu;
