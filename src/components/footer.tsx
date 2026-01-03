import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";

export const Footer = () => {
  const handleClick = (e: any, href: string) => {
    if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const links = [
    { name: "Nyumbani", href: "/" },
    { name: "Vifurushi", href: "#vifurushi" },
    { name: "Matunzio", href: "#matunzio" },
    { name: "Kuhusu Sisi", href: "#kuhusu" },
    { name: "Mawasiliano", href: "#mawasiliano" },
  ];

  return (
    <footer className="w-full bg-[#F9F9F9] pt-16 pb-8 text-default-600">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Sehemu ya 1: Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-black">
              Tabasamu<span className="text-[#B76E79]">.</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Tunageuza ndoto zako kuwa uhalisia. Mabingwa wa mapambo ya kisasa kwa ajili ya Harusi, Send-off, na Matukio ya Kifahari.
            </p>
          </div>

          {/* Sehemu ya 2: Viunganishi vya Haraka */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-black">Viunganishi</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    color="foreground"
                    className="hover:text-[#B76E79] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sehemu ya 3: Mawasiliano & Socials */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-black">Tupate Mitandaoni</h4>
            <div className="flex flex-col gap-2 text-sm">
              <p>📞 +255 746 555 500</p>
              <p>📍 Dar es Salaam, Tanzania</p>
              <p>✉️ info@tabasamu.co.tz</p>
            </div>

            <div className="flex gap-4 mt-4">
              <Link isExternal href="#" className="text-[#B76E79] font-bold text-sm">Instagram</Link>
              <Link isExternal href="#" className="text-[#B76E79] font-bold text-sm">TikTok</Link>
              <Link isExternal href="#" className="text-[#B76E79] font-bold text-sm">WhatsApp</Link>
            </div>
          </div>
        </div>

        <Divider className="my-8" />

        {/* Hakimiliki (Copyright) */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-default-400">
          <p>
            &copy; {new Date().getFullYear()} Tabasamu Decorators. Haki zote zimehifadhiwa.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="#" size="sm" color="foreground">Vigezo na Masharti</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};