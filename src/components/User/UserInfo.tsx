import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { EditUser } from "./EditUser";
import { User } from "@/lib/types";

export const UserInfo = ({user}: {user: User}) => {
  return (
    <div className="p-4 rounded-lg bg-primary-foreground">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">User Information</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Edit</Button>
          </SheetTrigger>
          <EditUser />
        </Sheet>
      </div>
      <div className="space-y-4 mt-4">
        <div className="flex flex-col gap-2 mb-8">
          <p className="text-sm text-muted-foreground">Profile Completion</p>
          <Progress value={73} />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Username :</span>
          <span>{user.username}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Email :</span>
          <span>{user.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Phone :</span>
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Address :</span>
          <span>{user.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Role :</span>
          <Badge>{user.role}</Badge>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-4">Member since 2024</p>
    </div>
  );
};
