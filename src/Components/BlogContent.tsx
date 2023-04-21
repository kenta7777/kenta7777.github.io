import markdownit from 'markdown-it';
import { useEffect, useState } from "react";

type Props = {
    resourcePath: string;
};

const BlogContent = ({resourcePath}: Props) => {
    const [blogContent, setBlogContent] = useState('');
    useEffect(() => {
        fetch(resourcePath).then(res => res.text()).then(text => setBlogContent(text))
    });

    const md = markdownit();
    initMarkdownit(md);
    const renderedMarkdownStr = md.render(blogContent);

    return (
        <div dangerouslySetInnerHTML={{__html: renderedMarkdownStr}}/>
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
