import React from 'react';
import './Blogs.css';

const Blogs = () => {
    const blogsData = [
        { title: 'The Role Of Technology In Modern...', category: 'SAAS', img: './mac.jpg', date: 'May 10, 2024' },
        { title: 'The Services Provide For Design', category: 'DESIGN', img: './brat.jpg', date: 'May 10, 2024' },
        { title: 'Digital Marketo To Their New Office.', category: 'TECHNOLOGY', img: './office.jpg', date: 'May 10, 2024' }
    ];

    return (
        <section className="blogs" id="blog">
            <div className="blogs-grid">
                {blogsData.map((blog, index) => (
                    <div key={index} className="blog-card reveal">
                        <div className="blog-img-wrapper">
                            <img src={blog.img} alt={blog.title} />
                            <span className="blog-category">{blog.category}</span>
                        </div>
                        <div className="blog-content-box">
                            <div className="blog-meta">
                                <span className="meta-item">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    {blog.date}
                                </span>
                                <span className="meta-item">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                    No Comments
                                </span>
                            </div>
                            <h3 className="blog-title">{blog.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
