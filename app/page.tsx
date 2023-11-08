'use client'
import HomePage from "./screens/Home/HomePage";
import { NextUIProvider } from "@nextui-org/react";
import AnalyticsHome from "./components/analyticsHome";
export default function Home() {
  return (
    <NextUIProvider>
      <AnalyticsHome />
      <HomePage />
    </NextUIProvider>
  );
}
