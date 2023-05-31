import { useSession } from "next-auth/react";

import Link from "@/components/link";

export default function AuthLink() {
  const { data: session } = useSession();

  const data = {
    url: !session ? `/login` : `/dashboard`,
    title: !session ? `Login` : `Dashboard`,
  };

  return (
    <div>
      <Link
        href={data.url}
        className="block px-4 py-2 pb-2 text-sm text-white rounded-md bg-sky-500"
      >
        {data.title}
      </Link>
    </div>
  );
}
