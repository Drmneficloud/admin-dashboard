import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      router.push("/dashboard");
    } catch (e) {
      alert("خطأ في تسجيل الدخول");
    }
  };

  return (
    <div>
      <h2>تسجيل دخول المشرف</h2>
      <input type="email" onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPass(e.target.value)} />
      <button onClick={handleLogin}>دخول</button>
    </div>
  );
}