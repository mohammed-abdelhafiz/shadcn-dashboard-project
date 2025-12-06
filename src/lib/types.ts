export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: string;
  role: "user" | "admin";
};

export type Payment = Omit<User, "role" | "phone" | "address"> & {
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
};
