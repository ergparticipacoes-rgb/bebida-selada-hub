"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Building2, Users, Shield, LogOut } from "lucide-react";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Geral", icon: Home },
    { href: "/dashboard/estabelecimento", label: "Estabelecimento", icon: Building2 },
    { href: "/dashboard/representante", label: "Representante", icon: Users },
    { href: "/dashboard/admin", label: "Admin", icon: Shield },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-[#001F33] to-[#002A46] text-white h-screen p-6 space-y-4 sticky top-0 border-r border-[#E5C48F]/20">
      <div className="mb-8">
        <h2 className="text-xl font-serif font-bold mb-2 text-[#E5C48F]">Painel</h2>
        <p className="text-xs text-white/70">Rede Segura Nacional</p>
      </div>
      
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-[#E5C48F]/20 text-[#E5C48F] border-l-4 border-[#E5C48F]"
                  : "hover:bg-white/10 hover:text-[#E5C48F] text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 text-white transition-all">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </aside>
  );
}
