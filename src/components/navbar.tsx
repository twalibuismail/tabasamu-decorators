import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Nyumbani", href: "/" },
    { name: "Kuhusu Sisi", href: "#kuhusu" },
    { name: "Matunzio", href: "#matunzio" },
    { name: "Vifurushi", href: "#vifurushi" },
    { name: "Mawasiliano", href: "#mawasiliano" }
  ];

  const handleNavClick = (e: any, href: string) => {
    e.preventDefault();

    // Close mobile menu first
    setIsMenuOpen(false);

    // Small delay to let menu close, then scroll
    setTimeout(() => {
      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 300); // 300ms delay for menu close animation
  };

  // Namba yako ya WhatsApp
  const whatsappNumber = "255746555500"; // Badilisha na namba yako
  const whatsappMessage = "Habari Tabasamu Decorators, nahitaji kuweka booking.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <HeroUINavbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      maxWidth="xl"
      position="sticky"
    >
      {/* 1. Mobile Toggle & Brand Logo */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Funga menu" : "Fungua menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            color="foreground"
            className="flex items-center gap-2"
            onClick={(e) => handleNavClick(e, "/")}
          >
            <img src="/logo.svg" alt="Tabasamu Logo" className="h-10 w-10" />
            <p className="font-bold text-2xl tracking-tight text-inherit">
              Tabasamu<span className="text-[#B76E79]">.</span>
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* 2. Desktop Menu (Katikati) */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              color="foreground"
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-[#B76E79] transition-colors font-medium text-lg"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* 3. Button ya WhatsApp (Kulia) */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href={whatsappLink}
            isExternal
            className="bg-[#B76E79] text-white font-bold shadow-lg shadow-[#B76E79]/40"
            radius="full"
            variant="shadow"
          >
            Weka Booking
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* 4. Mobile Menu List */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-xl py-2"
              color={index === 0 ? "primary" : "foreground"} // Nyumbani iwe na rangi
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};