import { useSession } from "next-auth/react";

export default function User() {
  const session = useSession();
  return <p>Welcome {session?.user?.name}!</p>;
}
