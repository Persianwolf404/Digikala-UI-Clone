import { IoSearch } from "react-icons/io5";
import Navlist from "./Navlist";
import Link from "next/link";
import { PiShoppingCartSimple } from "react-icons/pi";
import { MainContainer } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
  return (
    <header
      id="navbar_items"
      className="border-b-2 bg-[#fff] h-[175px] relative overflow-hidden  border-gray-200 "
    >
      <Link href={"/"}>
        <div className="w-full h-[60px] relative">
          <Image
            className="object-cover object-center w-full h-full"
            src={
              "https://dkstatics-public.digikala.com/digikala-adservice-banners/03b08688d54afa1911722b86a42ea1ab367dc8be_1721658632.jpg?x-oss-process=image/quality,q_95"
            }
            fill
            alt="banner"
          />
        </div>
      </Link>
      <MainContainer className="mb-4">
        <div className="flex w-full items-center h-[60px] p-3 pt-6 ">
          <div className="mt-1">
            <Image src="/logo.svg" width={120} height={120} alt="logo" />
          </div>
          <div className="flex-grow  mr-5">
            <form className="w-[600px] rounded-lg items-center px-3 bg-gray-100 h-[45px] flex ">
              <IoSearch className="text-2xl ml-3 text-gray-400" />
              <input
                type="text"
                className="w-full placeholder-text-sm focus:outline-none bg-transparent"
                placeholder="جستجو"
                name=""
              />
            </form>
          </div>
          <div className="flex">
            <div className="w-auto h-auto flex border rounded-lg p-2 pt-1 ml-3">
              <span className="mt-1 text-sm">ورود | ثبت نام</span>
            </div>
            <div className="flex items-center">
              <div className="border-r-2">
                <PiShoppingCartSimple className="text-2xl mr-4" />
              </div>
            </div>
          </div>
        </div>
        <Navlist />
      </MainContainer>
    </header>
  );
};

export default Navbar;
