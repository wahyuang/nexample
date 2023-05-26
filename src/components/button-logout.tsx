"use client";
import { signOut } from "next-auth/react";

export default function ButtonLogout() {
  return (
    <button onClick={() => signOut({ callbackUrl: `/login` })}>Logout</button>
  );
}
