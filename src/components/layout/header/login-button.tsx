import { useSession } from "next-auth/react";
import { FaRegUserCircle } from "react-icons/fa";

import Link from "@/components/link";

export default function LoginButton() {
  const { data: session } = useSession();

  const data = {
    url: !session ? `/login` : `/dashboard`,
  };

  return (
    <div className="text-2xl text-sky-500">
      <Link href={data.url}>
        <FaRegUserCircle />
      </Link>
    </div>
  );
}
