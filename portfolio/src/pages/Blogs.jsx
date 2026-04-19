import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, ArrowRight, ArrowLeft, Calendar, Tag } from 'lucide-react';

const mockBlogs = [
  {
    id: 1,
    title: "Understanding React Server Components",
    brief: "Dive deep into the new paradigm of React Server Components and learn how they fundamentally change the way we build React applications.",
    content: `
      React Server Components (RSC) represent a significant shift in how we build React applications. By executing components on the server instead of the client, we can send less JavaScript to the browser and improve performance.
      
      Traditionally, React components run on the client, which means the browser has to download, parse, and execute the JavaScript for every component. Server Components move this execution to the server. This has several key benefits:
      
      1. Zero Bundle Size Effect: Code for server components is never sent to the client.
      2. Full Access to the Backend: You can access databases, read files, and use server-side APIs securely directly from your components.
      3. Automatic Code Splitting: With RSC, code splitting is handled automatically and natively by the framework.
      
      Understanding when to use Server versus Client components is the key to building performant modern React apps!
    `,
    date: "April 18, 2026",
    readTime: "5 min read",
    categories: ["React", "Architecture"],
    featured: true,
  },
  {
    id: 2,
    title: "Securing MERN Stack Applications",
    brief: "A comprehensive guide on the best practices for implementing security across MongoDB, Express, React, and Node.js.",
    content: `
      Security in modern web applications is not an afterthought—it's a fundamental requirement. When building with the MERN stack, each layer requires specific attention to safeguard user data.

      On the frontend, guarding against XSS (Cross-Site Scripting) is critical. React natively helps by escaping variables, but dangerous patterns like 'dangerouslySetInnerHTML' must be carefully audited.

      On the backend, protecting endpoints with proper rate limiting, CORS configuration, and validating payloads (e.g., using Zod or Joi) prevents injection attacks.
      
      Finally, securing your MongoDB instance involves using strong authentication, applying the Principle of Least Privilege for database users, and ensuring your database is never exposed directly to the public internet.
    `,
    date: "March 12, 2026",
    readTime: "8 min read",
    categories: ["MERN", "Security"],
    featured: false,
  },
  {
    id: 3,
    title: "Demystifying JSON Web Tokens (JWT)",
    brief: "Learn the robust mechanics behind JWTs, how they enable stateless authentication, and the best ways to store them securely.",
    content: `
      JSON Web Tokens (JWT) have become the industry standard for stateless authentication. But how do they actually work?

      A JWT has three parts: the Header (specifying the signing algorithm), the Payload (containing the claims or user data), and the Signature.

      The most critical aspect of implementing JWTs is storage. Storing them in LocalStorage leaves them vulnerable to XSS attacks. The recommended approach is to store tokens in secure, HttpOnly cookies. This prevents JavaScript from accessing the token and drastically reduces the attack surface.
    `,
    date: "February 28, 2026",
    readTime: "6 min read",
    categories: ["Security", "Backend"],
    featured: false,
  },
  {
    id: 4,
    title: "Mastering Tailwind CSS Grids",
    brief: "Unlock the full potential of CSS Grid with Tailwind's utility classes to build complex, responsive layouts with ease.",
    content: `
      CSS Grid can be intimidating, but Tailwind CSS makes it incredibly accessible.

      By using classes like 'grid-cols-1 md:grid-cols-3', you can create a layout that gracefully scales from mobile to desktop without writing custom media queries.

      Complex layouts, like dynamic dashboards or asymmetrical image galleries, are simplified with 'col-span' and 'row-span' utilities. The key to mastering Tailwind Grids is understanding the underlying CSS specifications while utilizing Tailwind's intuitive abstractions.
    `,
    date: "January 15, 2026",
    readTime: "4 min read",
    categories: ["CSS", "Frontend"],
    featured: false,
  },
  {
    id: 5,
    title: "The Future of Web Performance",
    brief: "Exploring the new metrics and tools shaping the landscape of web performance optimization.",
    content: `
      Performance is user experience. The Core Web Vitals (LCP, FID, CLS) paved the way, but new metrics like INP (Interaction to Next Paint) are providing deeper insights into application responsiveness.

      To keep up, developers need to embrace powerful profiling tools, implement advanced caching strategies, and optimize asset delivery. Building fast websites is arguably the single most impactful thing you can do for your application's success.
    `,
    date: "December 05, 2025",
    readTime: "7 min read",
    categories: ["Performance", "Frontend"],
    featured: false,
  }
];

export function BlogsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  // Extract all unique categories
  const categories = ['All', ...new Set(mockBlogs.flatMap(blog => blog.categories))];

  // Filter out featured if it's going to be shown separately
  const featuredPost = mockBlogs.find(blog => blog.featured);

  // Apply filters and search
  const filteredBlogs = mockBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.brief.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  // If we are showing regular grid (not searching), exclude the featured post from the grid
  const displayBlogs = (searchQuery === '' && selectedCategory === 'All') 
    ? filteredBlogs.filter(blog => blog.id !== featuredPost?.id) 
    : filteredBlogs;

  // Render full article view
  if (selectedPost) {
    return (
      <section className="py-24 bg-transparent min-h-screen text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </button>
          
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {selectedPost.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {selectedPost.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {selectedPost.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-12">
              {selectedPost.categories.map(cat => (
                <span key={cat} className="px-3 py-1 bg-slate-800 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
                  {cat}
                </span>
              ))}
            </div>

            {/* Simple content rendering */}
            <div className="prose prose-invert prose-emerald max-w-none">
              {selectedPost.content.split('\n').filter(Boolean).map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-lg leading-relaxed mb-6">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </motion.article>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="py-24 bg-slate-900/30 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-emerald-500"></span>
            Articles & Insights
          </h2>
          <p className="text-slate-400 max-w-2xl">
            My thoughts, learnings, and tutorials on software development, architecture, and technology.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/50'
                    : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-500" />
            </div>
            <input
              type="text"
              className="block w-full lg:w-72 pl-10 pr-3 py-2 border border-slate-800 rounded-lg leading-5 bg-slate-900/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-slate-900 transition-colors sm:text-sm"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Featured Article */}
        {searchQuery === '' && selectedCategory === 'All' && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 relative group cursor-pointer"
            onClick={() => setSelectedPost(featuredPost)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center hover:border-slate-700 transition-colors relative overflow-hidden">
              <div className="flex-1 z-10 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider">
                    Featured
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-3 h-3" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl text-lg">
                  {featuredPost.brief}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-2">
                    {featuredPost.categories.map(cat => (
                      <span key={cat} className="flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                        <Tag className="w-3 h-3" />
                        {cat}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-2 text-emerald-400 font-medium group-hover:gap-3 transition-all duration-300">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              
              <div className="hidden lg:flex w-1/3 justify-center items-center relative z-10">
                <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
                   <div className="w-32 h-32 rounded-full bg-emerald-500/20 blur-3xl absolute" />
                   <Search className="w-16 h-16 text-slate-700 opacity-50 z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl flex flex-col hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 group cursor-pointer"
                onClick={() => setSelectedPost(blog)}
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-medium px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                      {blog.categories[0]}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
                    {blog.brief}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                    <span className="text-sm font-medium text-emerald-400 flex items-center gap-1 group-hover:text-emerald-300 transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results Fallback */}
        {displayBlogs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed"
          >
            <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No related articles found</h3>
            <p className="text-slate-400">Try adjusting your search query or filter criteria.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-6 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-colors border border-emerald-500/20"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
