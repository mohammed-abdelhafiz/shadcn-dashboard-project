import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserCard = () => {
  return (
    <div className="p-4 rounded-lg bg-primary-foreground space-y-2">
      <div className="flex items-center gap-2">
        <Avatar className="size-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold">John Doe</h1>
      </div>
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut suscipit
        blanditiis esse eaque recusandae ipsam tempore a quo quidem cupiditate
        nihil accusamus quam, optio dolor corporis nobis ipsa dolore porro!
      </p>
    </div>
  );
};
