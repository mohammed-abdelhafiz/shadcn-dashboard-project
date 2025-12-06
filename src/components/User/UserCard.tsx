import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/lib/types";

export const UserCard = ({user}: {user: User}) => {
  return (
    <div className="p-4 rounded-lg bg-primary-foreground space-y-2">
      <div className="flex items-center gap-2">
        <Avatar className="size-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold">{user.name}</h1>
      </div>
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut suscipit
        blanditiis esse eaque recusandae ipsam tempore a quo quidem cupiditate
        nihil accusamus quam, optio dolor corporis nobis ipsa dolore porro!
      </p>
    </div>
  );
};
