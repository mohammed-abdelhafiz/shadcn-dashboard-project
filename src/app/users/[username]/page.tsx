import { AppLineChart } from "@/components/charts/AppLineChart";
import CardList from "@/components/CardList";
import { UserBadges, UserInfo } from "@/components/User";
import { UserCard } from "@/components/User/UserCard";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { getUsersData } from "../page";
import { notFound } from "next/navigation";

export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const users = await getUsersData();
  const user = users.find((user) => user.username === username);
  if (!user) {
    return notFound();
  }
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/users">Users</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{user.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* Left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* User Badges Container */}
          <UserBadges />
          {/* User Information Container */}
          <UserInfo user={user} />
          {/* Card list Container */}
          <div className="p-4 rounded-lg bg-primary-foreground">
            <CardList title="latest transactions" />
          </div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-2/3 space-y-6">
          <UserCard user={user} />
          <div className="p-4 rounded-lg bg-primary-foreground">
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}
