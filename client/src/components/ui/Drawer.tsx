import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import Logo from "../ui/Logo";

type DrawerProps = {
    children: React.ReactNode;
};

const Drawer = ({ children }: DrawerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const drawer = (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-9999"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-bg-inverse-15"
                        aria-label="Close menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            transition: {
                                delay: 0.25,
                                duration: 0.35,
                            },
                        }}
                    />

                    <div className="absolute right-0 top-0 h-dvh w-[85vw] max-w-md">

                        <motion.div
                            initial={{
                                clipPath: "circle(0% at 100% 0%)",
                            }}
                            animate={{
                                clipPath: "circle(150% at 100% 0%)",
                                transition: {
                                    duration: 0.75,
                                    ease: [0.83, 0, 0.17, 1],
                                },
                            }}
                            exit={{
                                clipPath: "circle(0% at 100% 0%)",
                                transition: {
                                    delay: 0.12,
                                    duration: 0.7,
                                    ease: [0.83, 0, 0.17, 1],
                                },
                            }}
                            className="
                                absolute inset-0
                                bg-bg shadow-xl
                            "
                        />

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.25,
                                    duration: 0.35,
                                },
                            }}
                            exit={{
                                opacity: 0,
                                y: -8,
                                transition: {
                                    duration: 0.18,
                                    ease: "easeOut",
                                },
                            }}
                            className="
                                relative z-10
                                flex h-full flex-col
                                items-center overflow-y-auto py-6
                            "
                        >
                            <div className="absolute top-4 right-7">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-md cursor-pointer"
                                    aria-label="Close menu"
                                >
                                    <MdClose className="size-6" />
                                </button>
                            </div>

                            <div className="mt-20 sm:px-6">
                                <Logo />
                            </div>

                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <div className="xl:hidden text-text">
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="rounded-md px-2 py-1 text-sm font-semibold cursor-pointer"
                aria-label="Open menu"
            >
                <CiMenuFries className="size-6" />
            </button>

            {typeof document !== "undefined" &&
                createPortal(drawer, document.body)}
        </div>
    );
};

export default Drawer;