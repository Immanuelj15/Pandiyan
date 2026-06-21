import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Calendar, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import ScrollReveal from '../components/ScrollReveal';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Pandyan Industrial Equipments`;
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-900">
        <div className="text-center">
          <h1 className="text-3xl font-black mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-brand-blue font-bold hover:underline">Return to Knowledge Base</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white text-slate-900 min-h-screen pb-20">
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-bold text-brand-blue mb-8 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Knowledge Base
          </Link>
          <ScrollReveal animation="fade-up">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <span className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-brand-blue" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-brand-blue" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <ScrollReveal animation="fade-up" delay={200}>
          <img
            src={post.imgSrc}
            alt={post.title}
            className="w-full h-auto object-cover rounded-xl shadow-xl mb-12 border-4 border-white"
            loading="lazy"
          />
          <div className="max-w-none">
            <p className="text-xl font-medium text-slate-700 leading-relaxed mb-8 border-l-4 border-brand-blue pl-6">
              {post.excerpt}
            </p>
            <div className="text-base sm:text-lg text-slate-600 leading-relaxed whitespace-pre-line">
              {post.fullContent}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
