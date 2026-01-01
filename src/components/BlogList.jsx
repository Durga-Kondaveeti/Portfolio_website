import { Buffer } from 'buffer'; 
window.Buffer = Buffer;         
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 1. Use relative path from 'src/components' to 'src/blogs'
    const modules = import.meta.glob('../blogs/*.md', { as: 'raw' });
    
    // Debugging: Check if modules were found
    console.log("Glob Modules Found:", modules);

    const loadPosts = async () => {
      const loadedPosts = await Promise.all(
        Object.entries(modules).map(async ([path, resolver]) => {
          const content = await resolver();
          const { data } = matter(content);
          
          // Debugging: Check parsed data
          console.log("Parsed Post:", path, data);

          // Create slug from filename
          const slug = path.split('/').pop().replace('.md', '');
          
          return {
            slug,
            ...data,
          };
        })
      );
      
      setPosts(loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date)));
    };

    loadPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-slate-500 mb-2">No blog posts found.</p>
        <p className="text-xs text-slate-400">
          (Check Console F12 to see if files are loading)
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
          <article className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              {post.tags?.[0] || 'Tech'}
            </span>
            <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;