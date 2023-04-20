import markdownit from 'markdown-it';
import { useEffect, useState } from 'react';
import './index.css';
import samplePath from '../../BlogContents/Sample.md';

const Blog = () => {
    const [blogContent, setBlogContent] = useState('');
    useEffect(() => {
        fetch(samplePath).then(res => res.text()).then(text => setBlogContent(text))
    });

    const md = markdownit();
    const emoji = require('markdown-it-emoji');
    const prism = require('markdown-it-prism');
    md.use(emoji).use(prism);

    return (
        <div className="page">
            <div className="page-title"> Blog </div>
            <div dangerouslySetInnerHTML={{__html: md.render(blogContent)}}/>
        </div>
    )
};

export default Blog;
