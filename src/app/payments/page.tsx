import { Payment } from "@/lib/types";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const getPaymentsData = async (): Promise<Payment[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      id: "m3n4o5p6",
      name: "Frank White",
      username: "frank_white",
      email: "frank.w@example.com",
      amount: 300,
      status: "success",
    },
    {
      id: "q7r8s9t0",
      name: "Grace Hopper",
      username: "grace_h",
      email: "grace.h@example.com",
      amount: 150,
      status: "processing",
    },
    {
      id: "u1v2w3x4",
      name: "Henry Ford",
      username: "henry_f",
      email: "henry.f@example.com",
      amount: 400,
      status: "failed",
    },
    {
      id: "y5z6a7b8",
      name: "Ivy Queen",
      username: "ivy_q",
      email: "ivy.q@example.com",
      amount: 90,
      status: "success",
    },
    {
      id: "c9d0e1f2",
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      amount: 210,
      status: "pending",
    },
    {
      id: "c9d0e1f3", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      amount: 210,
      status: "pending",
    },
    {
      id: "c9d0e1f4", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      amount: 210,
      status: "pending",
    },
    {
      id: "c9d0e1f5", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      amount: 210,
      status: "pending",
    },
    {
      id: "c9d0e1f6", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      amount: 210,
      status: "pending",
    },
    {
      id: "c9d0e1f7", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      amount: 210,
      status: "pending",
    },
    {
      id: "c9d0e1f8", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      amount: 210,
      status: "pending",
    },
    {
      id: "c9d0e1f9", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      amount: 210,
      status: "pending",
    },
    {
      id: "c9d0e1fa", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      amount: 210,
      status: "pending",
    },
    {
      id: "c9d0e1fb", // Unique ID
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      amount: 210,
      status: "pending",
    },
    {
      id: "m3n4o5p7", // Unique ID
      name: "Frank White",
      username: "frank_white",
      email: "frank.w@example.com",
      amount: 300,
      status: "success",
    },
    {
      id: "q7r8s9t0",
      name: "Grace Hopper",
      username: "grace_h",
      email: "grace.h@example.com",
      amount: 150,
      status: "processing",
    },
    {
      id: "u1v2w3x4",
      name: "Henry Ford",
      username: "henry_f",
      email: "henry.f@example.com",
      amount: 400,
      status: "failed",
    },
    {
      id: "y5z6a7b8",
      name: "Ivy Queen",
      username: "ivy_q",
      email: "ivy.q@example.com",
      amount: 90,
      status: "success",
    },
    {
      id: "c9d0e1f2",
      name: "Jack Black",
      username: "jack_b",
      email: "jack.b@example.com",
      amount: 210,
      status: "pending",
    },
  ];
};

export default async function PaymentsPage() {
  const payments = await getPaymentsData();
  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={payments} />
    </div>
  );
}
