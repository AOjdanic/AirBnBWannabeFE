import Link from "next/link";

export function Navigation() {
  return (
    <div className="flex justify-between p-4 sticky bg-red-500 text-white font-bold">
      <Link href={"/"}>Home</Link>
      <div className="flex gap-2">
        <Link href={"/signup"}>Sign Up</Link>
        <Link href={"/login"}>Log In</Link>
      </div>
    </div>
  );
}
