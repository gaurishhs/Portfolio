import Link from "next/link";

export default function FourOhFourPage() {
  return (
    <div className="flex flex-col text-white items-center justify-center w-full h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl font-medium">Page not found</p>

      <Link href="/">
        <button className="px-4 py-2 mt-4 text-lg font-medium text-white bg-green-400 rounded-md hover:bg-green-500">
          Go back home
        </button>
      </Link>
    </div>
  );
}
