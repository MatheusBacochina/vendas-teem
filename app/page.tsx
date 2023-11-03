'use client'
import HomePage from "./screens/Home/HomePage";
import { NextUIProvider } from "@nextui-org/react";
export default function Home() {
  return (
    <NextUIProvider>
      <HomePage />
    </NextUIProvider>
  );
}
