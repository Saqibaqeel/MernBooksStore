import React from 'react';

function AboutUs() {
  return (
    <section className="about-us py-5 bg-white">
      <div className="container">
        <div className="row">
          {/* Image Section */}
          <div className="col-md-6">
            <img
              src="/world-book.avif"
              alt="Book Store"
              className="img-fluid rounded"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="display-4 mb-3">Welcome to Our Book Store</h2>
            <p className="lead">
              At our Book Store, we believe in the power of reading. We offer a wide range of books that cater to every reader's needs. Whether you're looking for fiction, non-fiction, textbooks, or children's books, we have something for everyone.
            </p>
            <p>
              Our goal is to provide a welcoming space where people can discover new worlds through books. Our store offers books from a variety of genres, including the latest bestsellers and timeless classics. We are committed to providing exceptional customer service and making sure you find the perfect book to suit your interests.
            </p>
            <p>
              Join our community of book lovers and explore our vast collection. Our knowledgeable staff is always ready to help you find your next great read!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
