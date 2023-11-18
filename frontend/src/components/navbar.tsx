import Image from "next/image";
import Link from "next/link";

interface Props {
  hideNetworkButtons?: boolean;
}

export function NavBar({ hideNetworkButtons }: Props) {
  return (
    <nav className="bg-transparent border-b border-b-black/30">
      <div className="max-w-7xl py-2 mx-auto flex justify-between">
        <Link href="/">
          <Image src="/logo.png" width={100} height={50} alt="Logo" />
        </Link>
        {!hideNetworkButtons && (
          <div className="flex space-x-2">
            <w3m-network-button />
            <w3m-button />
          </div>
        )}
      </div>
    </nav>
  );
}
