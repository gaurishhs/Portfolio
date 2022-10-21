import { Nav } from "../components/Navbar";
import Footer from "./Footer";

export default function Layout({ children }: any) {
    return (
        <>
            <Nav />
            <div className="px-4 py-16 max-h-full">
                {children}
            </div>
            <Footer />
        </>
    )
}