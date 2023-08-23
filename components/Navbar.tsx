import Image from "next/image";
import { Button } from ".";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between px-6 md:px-20 py-6">
      <div className="flex flex-row justify-center items-center gap-3">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="Logo" width={32} height={32} />
        </Link>
        <p className="font-bold text-3xl">E-Learn</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 md:gap-8">
        <Button
          type="button"
          label="Login"
          buttonStyle="font-bold text-l uppercase hover:text-gray-500"
        />
        <Button
          type="button"
          label="Register"
          containerStyle="bg-[#FFA000] shadow-lg shadow-[#EEA000] rounded-lg px-6 py-2 hover:bg-[#EEA000]"
          buttonStyle="font-bold text-l uppercase text-white"
        />

        <div className="text-gray-400">|</div>

        <Image
          src="/icons/settings.svg"
          alt="Settings"
          width={32}
          height={32}
        />
      </div>
    </nav>
  );
}
