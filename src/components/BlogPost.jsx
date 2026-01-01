import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import matter from 'gray-matter';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});

  useEffect(() => {
    const loadPost = async () => {
      // 1. Load all markdown files from src/blogs
      const modules = import.meta.glob('/src/blogs/*.md', { as: 'raw' });
      
      // 2. Find the file that matches the slug
      // Note: This expects file names to be "slug.md" or "slug.mdx"
      const path = `/src/blogs/${slug}.md`;
      
      if (modules[path]) {
        const rawText = await modules[path]();
        const { data, content } = matter(rawText);
        setMeta(data);
        setContent(content);
      } else {
        setContent('# 404 Not Found\nThis blog post does not exist.');
      }
    };

    loadPost();
  }, [slug]);

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b border-gray-100">
          <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-accent mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{meta.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            {meta.date && (
              <div className="flex items-center">
                <Calendar size={14} className="mr-2" />
                {new Date(meta.date).toLocaleDateString()}
              </div>
            )}
            {meta.tags && (
              <div className="flex items-center gap-2">
                <Tag size={14} />
                {meta.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Markdown Content */}
        <div className="p-8 prose prose-slate max-w-none prose-headings:text-primary prose-a:text-accent">
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;