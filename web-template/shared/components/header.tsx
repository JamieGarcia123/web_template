import logo from "@/assets/texasflag.jpg";
import Image from "next/image";
import Link from "next/link";
import { pages } from "../../pages/api/dummydata";

function Header() {
  return (
    <nav className="nav-content">
      <Link href={"/"}>
        <Image src={logo} width={50} height={50} alt="logo" className="" />
      </Link>
     <ul className="nav-inner-content">
        {pages.map((pages) => (
          <li key={`${pages.name}`}>
            <Link href={`${pages.link}`}>{pages.link.replace("-", " ")}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
