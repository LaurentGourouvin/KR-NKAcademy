import Link from "next/link";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center content-center w-full">
      <Image
        src="/assets/images/404.png"
        alt="404 image"
        width={500}
        height={500}
      />
      <Link
        href="/"
        className="inline-block rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
