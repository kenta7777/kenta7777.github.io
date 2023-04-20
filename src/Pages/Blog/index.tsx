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
    const mark = require('markdown-it-mark');
    const footnote = require('markdown-it-footnote');
    md.use(emoji).use(prism).use(mark).use(footnote);

    return (
        <div className="page">
            <div className="page-title"> Blog </div>
            <div dangerouslySetInnerHTML={{__html: md.render(blogContent)}}/>
        </div>
    )
};

export default Blog;
