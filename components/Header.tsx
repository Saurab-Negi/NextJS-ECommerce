import Image from "next/image";
import React from "react";
import logo from "@/images/logo.png";
import Container from "./Container";
import Form from "next/form";
import Link from "next/link";
import { CartIcon } from "./CartIcon";
import { BasketIcon } from "./BasketIcon";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

const Header = async () => {
  const user = await currentUser();
  console.log("loggedIn User", user);

  return (
    <header className="w-full bg-gray-100 py-4 border-b border-b-gray-400">
      <Container className="flex items-centert justify-between gap-5">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-28" priority />
        </Link>

        <Form action="/search" className="flex-1">
          <input
            type="text"
            name="query"
            placeholder="Search"
            className="w-full border border-gray-400 px-4 py-2
            rounded-md focus-visible:border-darkBlue outline-none"
          />
        </Form>
        <div className="flex items-center gap-5">
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <BasketIcon />
            </SignedIn>
            {user ? (
              <div>
                <UserButton />
                <div className="flex flex-col">
                  <p className="text-xs">Welcome</p>
                  <p className="font-semibold">{user?.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div
                  className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md
                      hover:shadow-none hoverEffect"
                >
                  <User className="text-blue-500 w-6 h-6" />
                  <div className="flex flex-col">
                    <p className="text-xs">Account</p>
                    <p className="font-semibold">Log In</p>
                  </div>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
