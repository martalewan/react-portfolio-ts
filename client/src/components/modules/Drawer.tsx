import { ElDialog, ElDialogPanel, ElDialogBackdrop } from "@tailwindplus/elements/react";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from 'react-icons/md';
import Logo from "../ui/Logo";

type DrawerProps = {
    children: React.ReactNode;
};

const Drawer = ({ children }: DrawerProps) => {
    return (
        <ElDialog className="xl:hidden text-white" >
            <button
                command="show-modal"
                commandfor="drawer"
                className="rounded-md px-2 py-1 text-sm font-semibold cursor-pointer"
            >
                <CiMenuFries className="size-6 " />
            </button>


            <dialog
                id="drawer"
                aria-labelledby="drawer-title"
                className="fixed inset-0 size-auto max-h-none max-w-none overflow-hidden bg-transparent not-open:hidden backdrop:bg-transparent"
            >
                <ElDialogBackdrop className="absolute inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0" />

                <div className="absolute inset-0 pl-10 focus:outline-none sm:pl-16 text-white">
                    <ElDialogPanel className="group/dialog-panel relative ml-auto block size-full max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
                        <div className="z-10 absolute top-6 right-6 flex duration-500 ease-in-out group-data-closed/dialog-panel:opacity-0">
                            <button
                                type="button"
                                command="close"
                                commandfor="drawer"
                                className="relative rounded-md cursor-pointer"
                            >
                                <MdClose className="size-6" />

                            </button>

                        </div>

                        <div className="flex h-full flex-col items-center overflow-y-auto bg-gray-900 py-6 shadow-xl">
                            <div className="mt-20 sm:px-6">
                                <Logo />
                            </div>
                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                {children}
                            </div>
                        </div>
                    </ElDialogPanel>
                </div>
            </dialog>
        </ElDialog>
    );
};

export default Drawer;