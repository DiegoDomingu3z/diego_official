import Layout from "../components/Layout";
import NameCompenent from "../components/Name/NameComponent";
import About from "./About";
import MainName from "./MainName";
import Projects from "./Projects";

const Home = () => {
    return (
        <>
        <Layout title={"Home"}>
        <MainName />
        <Projects />
        <About/>
        </Layout>
        </>
    )
}

export default Home;