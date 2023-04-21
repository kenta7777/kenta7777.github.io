import './index.css';
import samplePath from '../../BlogResources/Sample.md';
import BlogContent from '../../Components/BlogContent';

//TODO: read all blog resources from local
const Blog = () => 
    <div className="page">
        <div className="page-title"> Blog </div>
        <BlogContent resourcePath={samplePath} />
    </div>

export default Blog;
