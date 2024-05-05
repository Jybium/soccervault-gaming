import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaWallet } from "react-icons/fa"


export function DialogCloseButton() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button className='flex items-center gap-3 px-4 text-sm bg-buttons rounded-lg'>
                    <span><FaWallet size={23} /></span>Connect
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md p-3 bg-hover rounded-lg">
                <DialogHeader className="grid justify-center my-2">
                    <p className="h-40 w-40 text-center bg-buttons rounded-full"></p>
                </DialogHeader>
                <p className="text-white tracking-wider text-center text-lg">Connect to SoccerVault</p>
                <div className="grid items-center bg-secondary text-white tracking-wide rounded-lg">
                    <span className="flex gap-4 items-center px-5 py-2 relative hover:bg-gold hover:text-black hover:font-bold cursor-pointer"><p className="h-12 w-12 rounded-full bg-primary"></p> <p>Meta Mask</p> <p className="absolute right-2 top-2 py-1 px-2 bg-hover text-sm rounded-md shadow-md">Detected</p></span>
                    <span className="flex gap-4 items-center px-5 py-2 hover:bg-gold hover:text-black hover:font-bold cursor-pointer"><p className="h-12 w-12 rounded-full bg-primary"></p> <p>Coin Base</p></span>
                    <span className="flex gap-4 items-center px-5 py-2 hover:bg-gold hover:text-black hover:font-bold cursor-pointer"><p className="h-12 w-12 rounded-full bg-primary"></p> <p>Phantom</p></span>
                    <span className="flex gap-4 items-center px-5 py-2 hover:bg-gold hover:text-black hover:font-bold cursor-pointer"><p className="h-12 w-12 rounded-full bg-primary"></p> <p>Wallet Connect</p></span>
                </div>

            </DialogContent>
        </Dialog>
    )
}
