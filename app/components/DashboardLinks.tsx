"use client";

import { cn } from "@/lib/utils";
import { HomeIcon, ReceiptText, User, ImagePlus, MonitorPlay, BadgePlus, SquarePlay } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const dashboardLinks = [
  {
    id: 0,
    name: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    id: 1,
    name: "Create New",
    href: "/dashboard/create-new",
    icon: ImagePlus,
  },
  {
    id: 2,
    name: "Create Short",
    href: "/dashboard/create-short",
    icon: BadgePlus,
  },
  {
    id: 3,
    name: "Videos",
    href: "/dashboard/videos",
    icon: MonitorPlay,
  },
  {
    id: 4,
    name: "Short Videos",
    href: "/dashboard/short-videos",
    icon: SquarePlay,
  },
  {
    id: 5,
    name: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    id: 6,
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: ReceiptText,
  },
];

export function DashboardLinks() {
  const pathname = usePathname();
  return (
    <>
      {dashboardLinks.map((link) => (
        <Link
          className={cn(
            pathname === link.href
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-foreground",
            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
          )}
          href={link.href}
          key={link.id}
        >
          <link.icon className="size-4" />
          {link.name}
        </Link>
      ))}
    </>
  );
}
