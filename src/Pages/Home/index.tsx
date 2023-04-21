import { Link } from "react-router-dom";
import MainInterests from "../../Components/MainInterests";
import github_image from '../../Assets/github-mark.png';
import './index.css';

const Home = () => {
    const MainInterestsNames = ["Rust", "TypeSystem", "Compiler"];
    return (
        <div className="page">
            <div className="page-title"> Kenta7777's Portfolio </div>

            <div className="page-item">About Me</div>
            <p>I'm Kenta7777, newbie software engineer.</p>
            <div className="link-box">
                <p> <a rel="noreferrer" target="_blank" href="https://github.com/kenta7777"> <img src={github_image} alt="GitHub"></img> </a> </p>
                <p> <Link to="/Blog">Blog</Link> </p>
            </div>
            
            <div className="page-item">Main Interests</div>
            <MainInterests names={MainInterestsNames} />
    </div>
    );
};

export default Home;
