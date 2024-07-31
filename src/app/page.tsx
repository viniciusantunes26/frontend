import Image from "next/image";
import { FaBuilding } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { AiTwotoneTool } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <aside className="w-64 p-6 bg-white/25">
          <Image src={"/image/Low-code.jpg"} className="w-full" alt="Logo" width={240} height={240} />

          <nav className="space-y-4 flex flex-col mt-8">
            <a href="" className="flex items-center gap-2 hover:font-semibold">
              <MdDashboard />
              Dashboard
            </a>
            <a href="" className="flex items-center gap-2 hover:font-semibold">
              <FaBuilding />
              Ambientes
            </a>
            <a href="" className="flex items-center gap-2 hover:font-semibold">
              <BsTools />
              Equipamentos
            </a>
            <a href="" className="flex items-center gap-2 hover:font-semibold">
              <AiTwotoneTool  />
              Manutenções
            </a>
            <a href="" className="flex items-center gap-2 hover:font-semibold">
              <FaUser />
              Usuário
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <h1 className="text-4xl font-bold uppercase w-full bg-white/5 text-center">Sistema de Gestão de Manutenção</h1>

          <div>
            <div className="grid grid-cols-4 gap-4 p-6">
              <div className="bg-orange-200 p-6 flex gap-2 rounded-xl">
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl text-zinc-900 font-semibold">12</strong>
                  <span className="text-sm text-zinc-900 font-semibold">Ambientes</span>
                </div>
                <FaBuilding size={48} />
              </div>
              <div className="bg-blue-300 p-6 flex gap-2 rounded-xl">
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl text-zinc-900 font-semibold">34</strong>
                  <span className="text-sm text-zinc-900 font-semibold">Equipamentos</span>
                </div>
                <BsTools size={48} />
              </div>
              <div className="bg-red-500 p-6 flex gap-2 rounded-xl">
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl text-zinc-900 font-semibold">13</strong>
                  <span className="text-sm text-zinc-900 font-semibold">Chamados Pendentes</span>
                </div>
                <IoIosNotifications  size={48} />
              </div>
              <div className="bg-green-300 p-6 flex gap-2 rounded-xl">
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl text-zinc-900 font-semibold">21</strong>
                  <span className="text-sm text-zinc-900 font-semibold">Chamados Concluidos</span>
                </div>
                <IoMdCheckboxOutline  size={48} />
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg shadow-md mt-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Atividade
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Empreendimento
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Solicitação
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Atendimento
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-300">Atividade 1</td>
                    <td className="px-4 py-2 text-sm text-gray-300">Empreendimento 1</td>
                    <td className="px-4 py-2 text-sm text-gray-300">Solicitação 1</td>
                    <td className="px-4 py-2 text-sm text-gray-300">Atendimento 1</td>
                    <td className="px-4 py-2 text-sm text-gray-300">Editar/Excluir</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-300">Atividade 2</td>
                    <td className="px-4 py-2 text-sm text-gray-300">Empreendimento 2</td>
                    <td className="px-4 py-2 text-sm text-gray-300">Solicitação 2</td>
                    <td className="px-4 py-2 text-sm text-gray-300">Atendimento 2</td>
                    <td className="px-4 py-2 text-sm text-gray-300">Editar/Excluir</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <footer className="p-6 bg-white text-center text-red-950 text-sm">
        Todos os direitos reservados &copy; 2024
      </footer>
    </div>
  );
}
