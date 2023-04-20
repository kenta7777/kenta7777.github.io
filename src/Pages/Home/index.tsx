import { Link } from "react-router-dom";
import MainInterests from "../../Components/MainInterests";
import github_image from '../../github-mark.png';
import './index.css';

const Home = () => {
    const MainInterestsNames = ["Rust", "TypeSystem", "Compiler"];
    return (
        <div>
            <header className="home-page">
                <h1> Kenta7777's Portfolio </h1>

                <h2>About Me</h2>
                <p>I'm Kenta7777, newbie software engineer.</p>
                <div className="link-box">
                    <p> <a rel="noreferrer" target="_blank" href="https://github.com/kenta7777"> <img src={github_image} alt="GitHub"></img> </a> </p>
                    <p> <Link to="/Blog">Blog</Link> </p>
                </div>
                
                <h2>Main Interests</h2>
                <MainInterests names={MainInterestsNames} />
            </header>
    </div>
    );
};

export default Home;
