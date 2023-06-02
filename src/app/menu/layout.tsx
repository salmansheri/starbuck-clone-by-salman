import Header from "./components/Header";
import Sidebar from "./components/sidebar/Sidebar";

export default function MenuLayout({
    children
}: {
    children: React.ReactNode,
}) {
    return(
        <>
        <Header />
        <div className="pl-10 md:pl-40 lg:pl-52 flex">
            <Sidebar />

        {children}
        </div>
        </>
    )
}