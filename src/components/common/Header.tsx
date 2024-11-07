import Link from "next/link";

export default function Header() {
  return (
    <header className="h-12 px-8 bg-red-500 flex items-center justify-between">
      <div className="">
        <Link className="text-2xl font-semibold " href="/">Code Glax</Link>
      </div>

      <div className=""></div>
    </header>
  );
}
