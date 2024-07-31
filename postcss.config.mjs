import { IoMdPerson } from "react-icons/io";
import { IoSettingsSharp, IoSwapHorizontalSharp } from "react-icons/io5";
import { LuForklift } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

export function Navlink() {
  const links = [
    { target: "#", text: "Dashboard", icon: <MdDashboard /> },
    { target: "#", text: "Ambientes", icon: <IoSwapHorizontalSharp /> },
    { target: "#", text: "Equipamentos", icon: <LuForklift /> },
    { target: "#", text: "Manutenções", icon: <IoSettingsSharp /> },
    { target: "#", text: "Usuários", icon: <IoMdPerson /> },
  ];

  return (
    <div className="space-y-2 mt-8">
      {links.map((obj) => (
        <a
          key={obj.text}
          href={obj.target}
          className="flex items-center gap-4 hover:text-blue-400 hover:font-semibold"
        >
          {obj.icon}
          {obj.text}
        </a>
      ))}
    </div>
  );
}
