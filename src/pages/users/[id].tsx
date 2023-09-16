import { useSession } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();

  return <p>Welcome lol {session?.user?.name}!</p>;
}
