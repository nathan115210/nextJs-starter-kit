import Link from "next/link";
import React from "react";

import AuthButtonGroup from "@/components/app-navbar/auth-button-group";
import { NavMenuItemProps } from "@/types/types";

export default function MobileNavMenu({
  menuItems,
  pagePath,
}: {
  menuItems: NavMenuItemProps[];
  pagePath: string;
}) {
  return (
    <div className="grid gap-4 p-4">
      {menuItems.map((item, index) => {
        return (
          <Link
            href={item.href}
            key={index}
            className={`text-2xl ${
              pagePath === item.href ? "font-bold" : "font-light"
            } underline-offset-4 hover:underline`}
          >
            {item.label}
          </Link>
        );
      })}
      <AuthButtonGroup />
    </div>
  );
}
