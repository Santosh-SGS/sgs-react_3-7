import type { Metadata } from "next";
import ManagementConsultingClient from "./client";

export const metadata: Metadata = {
  title: "Management Consulting | Synergiz Global",
};

export default function ManagementConsultingPage() {
  return <ManagementConsultingClient />;
}
