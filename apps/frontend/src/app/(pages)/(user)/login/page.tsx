import UserLoginForm from "@/components/user/UserLoginForm";
import { Suspense } from "react";

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserLoginForm/>
    </Suspense>
  )
}