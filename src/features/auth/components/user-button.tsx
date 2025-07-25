'use client';

import {
  Avatar,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
} from '@/components/Common';
import { logout } from '@/components/LoginForm/actions';
import { useGetCurrent } from '@/features/auth/api/use-get-current';
import { Loader2, LogOut } from 'lucide-react';

export const UserButton = () => {
  const { data: user, isLoading } = useGetCurrent();

  if (isLoading)
    return (
      <div className="flex size-10 items-center justify-center rounded-full bg-neutral-200">
        <Loader2 className="text-muted-foreground size-4 animate-spin" />
      </div>
    );

  if (!user) return null;

  const image = user?.image || '';
  const name = user?.name || '';
  const email = user?.email || '';

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="relative outline-none">
        <Avatar className="size-10 transition hover:opacity-75">
          <AvatarImage src={image} />
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-60"
        sideOffset={10}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-4">
          <Avatar className="size-[52px]">
            <AvatarImage src={image} />
          </Avatar>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium text-neutral-900">{name || 'User'}</p>
            <p className="text-xs text-neutral-500">{email}</p>
          </div>
        </div>
        <Separator className="mb-1" />
        <DropdownMenuItem
          onClick={() => logout()}
          className="flex h-10 cursor-pointer items-center justify-center font-medium text-amber-700"
        >
          <LogOut className="mr-2 size-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
