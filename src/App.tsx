import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container.tsx";
import { RecoilRoot } from "recoil";

export default function App() {
    return (
        <RecoilRoot>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </RecoilRoot>
    );
}
