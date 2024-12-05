"use client"

import { Button } from "@/components/ui/button";
import { logoutUser } from "@/utils/loginUser";
import { redirect } from "next/dist/server/api-utils";

export default function Logout({ handleLogout }: { handleLogout: Function }) {
  
  return (<Button className="ml-2" onClick={async () => {
    await logoutUser()
    handleLogout()
  }}>Logout</Button>)
}
