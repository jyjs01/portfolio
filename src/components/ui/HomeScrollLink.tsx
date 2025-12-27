"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomeScrollLink({
  toId,
  className,
  children,
}: {
  toId: "projects" | "contact";
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Link
      href="/"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        sessionStorage.setItem("pendingScrollId", toId);
        router.push("/");
      }}
    >
      {children}
    </Link>
  );
}
