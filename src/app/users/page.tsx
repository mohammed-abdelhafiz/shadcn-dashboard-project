import { User } from "@/lib/types";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export const getUsersData = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      id: "m3n4o5p6",
      name: "Frank White",
      username: "frank_white",
      email: "frank.w@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "q7r8s9t0",
      name: "Grace Hopper",
      username: "grace_h",
      email: "grace.h@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "u1v2w3x4",
      name: "Henry Ford",
      username: "henry_f",
      email: "henry.f@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "y5z6a7b8",
      name: "Ivy Queen",
      username: "ivy_q",
      email: "ivy.q@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "c9d0e1f2",
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "c9d0e1f3", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "c9d0e1f4", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "c9d0e1f5", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "c9d0e1f6", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "c9d0e1f7", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "c9d0e1f8", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "c9d0e1f9", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "c9d0e1fa", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "c9d0e1fb", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "m3n4o5p7", // Unique ID
      name: "Frank White",
      username: "frank_white",
      email: "frank.w@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "q7r8s9t0",
      name: "Grace Hopper",
      username: "grace_h",
      email: "grace.h@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "u1v2w3x4",
      name: "Henry Ford",
      username: "henry_f",
      email: "henry.f@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "admin",
    },
    {
      id: "y5z6a7b8",
      name: "Ivy Queen",
      username: "ivy_q",
      email: "ivy.q@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "user",
    },
    {
      id: "c9d0e1f2",
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      role: "admin",
    },
  ];
};

export const metadata = {
  title: "Users",
  description: "Users page",
};

export default async function UsersPage() {
  const users = await getUsersData();
  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Users</h1>
      </div>
      <DataTable columns={columns} data={users} />
    </div>
  );
}
