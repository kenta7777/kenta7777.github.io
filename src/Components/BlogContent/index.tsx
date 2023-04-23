import markdownit from 'markdown-it';
import { useEffect, useState } from "react";
import matter from 'gray-matter';
import './index.css';

type Props = {
    resourcePath: string;
};

const BlogContent = ({resourcePath}: Props) => {
    const [blogContent, setBlogContent] = useState('');
    useEffect(() => {
        fetch(resourcePath).then(res => res.text()).then(text => setBlogContent(text))
    });

    // split metadata and body of blog from markdown resource
    const {data: {title, date}, content} = matter(blogContent);
    const md = markdownit();
    initMarkdownit(md);
    const renderedMarkdownStr = md.render(content);

    return (
        <div>
            <div className="blog-title">{title}</div>
            <div className="blog-date">{date}</div>
            <div dangerouslySetInnerHTML={{__html: renderedMarkdownStr}}/>
        </div>
    );
};

const initMarkdownit = (md: markdownit) => {
    const emoji = require('markdown-it-emoji');
    const prism = require('markdown-it-prism');
    const mark = require('markdown-it-mark');
    const footnote = require('markdown-it-footnote');
    md.use(emoji).use(prism).use(mark).use(footnote);
};

export default BlogContent;
