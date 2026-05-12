import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import Logo from "../ui/Logo";
import { GoArrowDownLeft } from "react-icons/go";

type DrawerProps = {
    children: React.ReactNode;
};

const Drawer = ({ children }: DrawerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const drawer = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999]"
                    initial={false}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
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
                                delay: 0.45,
                                duration: 0.25,
                            },
                        }}
                    />

                    <div className="absolute right-5 top-3 h-[81vh] w-[80vw] max-w-md rounded-xl overflow-hidden">
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
                                    duration: 0.75,
                                    ease: [0.83, 0, 0.17, 1],
                                },
                            }}
                            className="
                                absolute inset-0
                                bg-bg/80 backdrop-blur-xl shadow-xl
                            "
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
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
                                y: 10,
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
                            <div className="absolute top-3 right-3">
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
                className="rounded-md py-1 text-sm font-semibold cursor-pointer"
                aria-label="Open menu"
            >
                <GoArrowDownLeft className="size-8.5" />
            </button>

            {typeof document !== "undefined" &&
                createPortal(drawer, document.body)}
        </div>
    );
};

export default Drawer;