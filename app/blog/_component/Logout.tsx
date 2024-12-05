"use client"

import { logoutUser } from "@/utils/loginUser";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    // Call the server-side logout function
    const res = await fetch("/api/logout", { method: "POST" });

    if (res.ok) {
      // Redirect to the home page after successful logout
      router.push("/");
    } else {
      console.error("Failed to log out.");
    }
  };
  return (<button className="ml-2" onClick={async () => await logoutUser()}>Logout</button>)
}
