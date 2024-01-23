"use client";

import { NextUIProvider } from "@nextui-org/react";
import { TRPCReactProvider } from "~/trpc/react";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <TRPCReactProvider>
      <NextUIProvider navigate={(path) => router.push(path)}>
        {children}
      </NextUIProvider>
    </TRPCReactProvider>
  );
}
