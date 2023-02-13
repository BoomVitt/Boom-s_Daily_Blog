
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="">
          <Image
            className="rounded-full object-cover"
            height={50}
            width={50}
            src="data:image/jpeg;base64,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"
            alt="logo"
          />
        </Link>
        <h1>The BOOM BLOG </h1>
      </div>
      <div>
      
      
          <Link
            href="https://www.linkedin.com/in/vittawat-sootawee-95a82920b/"
            className="px-5 py-3 text-sm md:text-base bg-black rounded-full text-[#F7AB0A] font-bold ml-2"
          >
            Linkedin
          </Link>
        </div>

    </header>
  );
}

export default Header;
