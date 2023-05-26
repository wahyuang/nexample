import Link from "next/link";

export default function Logo() {
  return (
    <div className="relative">
      <Link
        href={`/`}
        className="block py-3 font-bold text-sky-500"
        title="Nexample"
      >
        NEXAMPLE
      </Link>
    </div>
  );
}
