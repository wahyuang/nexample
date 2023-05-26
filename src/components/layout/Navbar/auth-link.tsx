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
        className="px-4 pt-1 pb-2 text-white rounded-md bg-sky-400"
      >
        {data.title}
      </Link>
    </div>
  );
}
