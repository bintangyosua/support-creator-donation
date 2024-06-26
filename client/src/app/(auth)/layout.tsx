import React from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (session.isSignedIn) redirect("/dashboard");

  return <>{children}</>;
}
