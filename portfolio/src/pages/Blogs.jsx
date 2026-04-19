import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, ArrowRight, Calendar, Tag } from 'lucide-react';
import { FaMediumM } from 'react-icons/fa';

const mockBlogs = [
  {
    id: 1,
    title: "Understanding React Server Components",
    brief: "Dive deep into the new paradigm of React Server Components and learn how they fundamentally change the way we build React applications.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    date: "April 18, 2026",
    readTime: "5 min read",
    categories: ["React", "Architecture"],
    featured: true,
    mediumUrl: "https://medium.com/@yourusername/react-server-components"
  },
  {
    id: 2,
    title: "Securing MERN Stack Applications",
    brief: "A comprehensive guide on the best practices for implementing security across MongoDB, Express, React, and Node.js.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
    date: "March 12, 2026",
    readTime: "8 min read",
    categories: ["MERN", "Security"],
    featured: false,
    mediumUrl: "https://medium.com/@yourusername/securing-mern-stack"
  },
  {
    id: 3,
    title: "Demystifying JSON Web Tokens (JWT)",
    brief: "Learn the robust mechanics behind JWTs, how they enable stateless authentication, and the best ways to store them securely.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    date: "February 28, 2026",
    readTime: "6 min read",
    categories: ["Security", "Backend"],
    featured: false,
    mediumUrl: "https://medium.com/@yourusername/jwt-demystified"
  },
  {
    id: 4,
    title: "Mastering Tailwind CSS Grids",
    brief: "Unlock the full potential of CSS Grid with Tailwind's utility classes to build complex, responsive layouts with ease.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop",
    date: "January 15, 2026",
    readTime: "4 min read",
    categories: ["CSS", "Frontend"],
    featured: false,
    mediumUrl: "https://medium.com/@yourusername/tailwind-grids"
  },
  {
    id: 5,
    title: "The Future of Web Performance",
    brief: "Exploring the new metrics and tools shaping the landscape of web performance optimization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    date: "December 05, 2025",
    readTime: "7 min read",
    categories: ["Performance", "Frontend"],
    featured: false,
    mediumUrl: "https://medium.com/@yourusername/web-performance"
  }
];

export function BlogsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
            Read my full articles on Medium.
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
            className="mb-12"
          >
            <a 
              href={featuredPost.mediumUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center hover:border-slate-700 transition-colors relative overflow-hidden">
                
                {/* Image Section */}
                <div className="w-full md:w-2/5 aspect-[16/9] md:aspect-auto md:h-full rounded-xl overflow-hidden relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content Section */}
                <div className="flex-1 z-10 w-full py-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider">
                      Featured
                    </span>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                    {featuredPost.brief}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-between gap-6">
                    <div className="flex gap-2">
                      {featuredPost.categories.map(cat => (
                        <span key={cat} className="flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                          <Tag className="w-3 h-3" />
                          {cat}
                        </span>
                      ))}
                    </div>
                    <span className="flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                      <FaMediumM />
                      Read on Medium <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
                
              </div>
            </a>
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
                className="bg-slate-900 border border-slate-800 rounded-2xl flex flex-col hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 group overflow-hidden"
              >
                <a 
                  href={blog.mediumUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-col"
                >
                  {/* Article Image Image */}
                  <div className="w-full h-48 overflow-hidden relative">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

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
                      
                      <span className="text-sm font-medium text-white flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-lg group-hover:bg-white group-hover:text-black transition-colors duration-300">
                        <FaMediumM />
                        Read More
                      </span>
                    </div>
                  </div>
                </a>
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
