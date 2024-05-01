import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// kindeAuth
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

//components
import { Button } from "./ui/button";
import Dropdown from "./Dropdown";

const socials = [
  { icon: <FaYoutube />, href: "#" },
  { icon: <FaFacebook />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
];

const Header = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  console.log(isUserAuthenticated);

  return (
    <header className="py-6 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="flex items-center gap-5 justify-center xl:w-max">
            <Link href="/">
              <Image src="/assets/logo.svg" width={160} height={160} alt="" />
            </Link>
            <div className="w-[1px] h-[40px] bg-gray-300"></div>
            <div className="flex gap-2">
              {socials.map((item, index) => {
                return (
                  <Link
                    href={item.href}
                    key={index}
                    className="bg-accent text-white hover:bg-accent-hover text-sm w-[28px] h-[28px] flex items-center justify-center rounded-full transition-all"
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <div>
              {isUserAuthenticated ? (
                <Dropdown />
              ) : (
                <div className="flex gap-2">
                  <LoginLink>
                    <Button>Sign in</Button>
                  </LoginLink>
                  <RegisterLink>
                    <Button>Register</Button>
                  </RegisterLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
