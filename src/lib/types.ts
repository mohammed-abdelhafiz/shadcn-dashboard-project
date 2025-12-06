export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: string;
  role: "user" | "admin";
};

export type Payment = User & {
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
};
