import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const UserBadges = () => {
  return (
    <div className="p-4 rounded-lg bg-primary-foreground">
      <h1 className="text-xl font-semibold">User Badges</h1>
      <div className="flex gap-4 mt-4">
        <HoverCard>
          <HoverCardTrigger>
            <BadgeCheck
              size={36}
              className="rounded-full p-2 bg-blue-500/30 border-blue-500/50 border"
            />
          </HoverCardTrigger>
          <HoverCardContent className="space-y-2">
            <h1 className="font-bold">Verified User</h1>
            <p className="text-sm text-muted-foreground">
              This user has been verified by the admin.
            </p>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <Shield
              size={36}
              className="rounded-full p-2 bg-green-500/30 border-green-500/50 border"
            />
          </HoverCardTrigger>
          <HoverCardContent className="space-y-2">
            <h1 className="font-bold">Admin</h1>
            <p className="text-sm text-muted-foreground">
              Admin users have full access to all features and can manage users.
            </p>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <Candy
              size={36}
              className="rounded-full p-2 bg-yellow-500/30 border-yellow-500/50 border"
            />
          </HoverCardTrigger>
          <HoverCardContent className="space-y-2">
            <h1 className="font-bold">Awarded</h1>
            <p className="text-sm text-muted-foreground">
              This user has been awarded for their contributions.
            </p>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <Citrus
              size={36}
              className="rounded-full p-2 bg-orange-500/30 border-orange-500/50 border"
            />
          </HoverCardTrigger>
          <HoverCardContent className="space-y-2">
            <h1 className="font-bold">Popular</h1>
            <p className="text-sm text-muted-foreground">
              This user has been popular in the community.
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};
