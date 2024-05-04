import {
    Cloud,
    CreditCard,
    DeleteIcon,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiDeleteBinLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";


export function DropdownMenuModal() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <FaBell color='#FFCB69' size={23} className="z-20" />
            </DropdownMenuTrigger>


            <section className="absolute top-0 right-0 h-screen w-full backdrop-blur-xl bg-black opacity-70">
                <DropdownMenuContent className="relative top-0 right-0 z-20 w-[22rem] text-white bg-hover mt-5">

                    <DropdownMenuLabel className="flex items-center justify-between p-2 mb-5 shadow-2xl drop-shadow-2xl">
                        <p>Notifications</p>
                        <RiDeleteBinLine size={20} />
                    </DropdownMenuLabel>




                    <DropdownMenuGroup className=" grid gap-4 h-[50vh] overflow-y-auto">
                        <DropdownMenuItem className="flex gap-3 items-start shadow-2xl drop-shadow-2xl py-3">
                            <p className="p-8 rounded-full bg-buttons"></p>

                            <div>
                                <p className="">Verification status</p>
                                <p className="text-[11px] font-thin text-transparent bg-clip-text bg-gradient-to-r from-[#93B7BE] to-[#FFCB69]">SoccerVault Team</p>
                                <p className="text-xs">You have successfully verified and complete all login processes</p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-3 items-start shadow-2xl drop-shadow-2xl py-3">
                            <p className="p-8 rounded-full bg-buttons"></p>

                            <div>
                                <p className="">Verification status</p>
                                <p className="text-[11px] font-thin text-transparent bg-clip-text bg-gradient-to-r from-[#93B7BE] to-[#FFCB69]">SoccerVault Team</p>
                                <p className="text-xs">You have successfully verified and complete all login processes</p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-3 items-start shadow-2xl drop-shadow-2xl py-3">
                            <p className="p-8 rounded-full bg-buttons"></p>

                            <div>
                                <p className="">Verification status</p>
                                <p className="text-[11px] font-thin text-transparent bg-clip-text bg-gradient-to-r from-[#93B7BE] to-[#FFCB69]">SoccerVault Team</p>
                                <p className="text-xs">You have successfully verified and complete all login processes</p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-3 items-start shadow-2xl drop-shadow-2xl py-3">
                            <p className="p-8 rounded-full bg-buttons"></p>

                            <div>
                                <p className="">Verification status</p>
                                <p className="text-[11px] font-thin text-transparent bg-clip-text bg-gradient-to-r from-[#93B7BE] to-[#FFCB69]">SoccerVault Team</p>
                                <p className="text-xs">You have successfully verified and complete all login processes</p>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>



                </DropdownMenuContent>
            </section>
        </DropdownMenu>
    )
}
