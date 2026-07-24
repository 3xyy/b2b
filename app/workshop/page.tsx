import { redirect } from "next/navigation";

// Workshop is no longer its own program — its content now lives on the
// Tech to Treasure page. Keep this route as a redirect so old links resolve.
export default function WorkshopPage() {
  redirect("/tech-to-treasure");
}
