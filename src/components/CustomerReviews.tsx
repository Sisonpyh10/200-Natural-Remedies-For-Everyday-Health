import React, { useState } from 'react';
import { Star, User, ChevronDown, CheckCircle2, X } from 'lucide-react';
import { ReviewItem } from '../types';

interface CustomerReviewsProps {
  reviews: ReviewItem[];
  onAddReview: (review: ReviewItem) => void;
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  reviews,
  onAddReview,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'recent' | 'highest'>('recent');

  // Form state
  const [formName, setFormName] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formComment, setFormComment] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const reviewsPerPage = 5;

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'highest') {
      return b.rating - a.rating;
    }
    return 0; // Default recent as ordered
  });

  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);
  const displayedReviews = sortedReviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formComment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: formName.trim(),
      rating: formRating,
      date: 'Just now',
      verified: true,
      comment: formComment.trim(),
    };

    onAddReview(newRev);
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setIsWriteModalOpen(false);
      setFormName('');
      setFormComment('');
      setFormRating(5);
    }, 1200);
  };

  return (
    <section id="reviews" className="py-14 sm:py-20 bg-white border-b border-[#ede7df]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-stone-900 font-serif-display tracking-tight mb-10">
          Customer Reviews
        </h2>

        {/* Rating Overview Box */}
        <div className="bg-stone-50/80 border border-stone-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left: Overall score & stars */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-1 text-[#f59e0b] mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#f59e0b]" />
              ))}
            </div>
            <span className="text-xl sm:text-2xl font-bold text-stone-900 tabular-nums">
              4.97 out of 5
            </span>
            <span className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-600 mt-1">
              <span>Customer Reviews</span>
              <CheckCircle2 className="w-4 h-4 text-[#4a6b46] inline" />
            </span>
          </div>

          {/* Center: Star distribution bars matching screenshot */}
          <div className="flex flex-col gap-1.5 w-full max-w-xs text-xs text-stone-600">
            {/* 5 stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#f59e0b] w-20">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#f59e0b]" />
                ))}
              </div>
              <div className="flex-1 h-3 bg-stone-200 rounded-sm overflow-hidden">
                <div className="h-full bg-[#5f7d54] w-[96%]" />
              </div>
              <span className="w-6 text-right tabular-nums text-stone-700 font-medium">30</span>
            </div>

            {/* 4 stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#f59e0b] w-20">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#f59e0b]" />
                ))}
                <Star className="w-3 h-3 text-stone-300" />
              </div>
              <div className="flex-1 h-3 bg-stone-200 rounded-sm overflow-hidden">
                <div className="h-full bg-[#5f7d54] w-[4%]" />
              </div>
              <span className="w-6 text-right tabular-nums text-stone-700 font-medium">1</span>
            </div>

            {/* 3 stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#f59e0b] w-20">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#f59e0b]" />
                ))}
                {Array.from({ length: 2 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-stone-300" />
                ))}
              </div>
              <div className="flex-1 h-3 bg-stone-200 rounded-sm overflow-hidden">
                <div className="h-full bg-[#5f7d54] w-0" />
              </div>
              <span className="w-6 text-right tabular-nums text-stone-700 font-medium">0</span>
            </div>

            {/* 2 stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#f59e0b] w-20">
                {Array.from({ length: 2 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#f59e0b]" />
                ))}
                {Array.from({ length: 3 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-stone-300" />
                ))}
              </div>
              <div className="flex-1 h-3 bg-stone-200 rounded-sm overflow-hidden">
                <div className="h-full bg-[#5f7d54] w-0" />
              </div>
              <span className="w-6 text-right tabular-nums text-stone-700 font-medium">0</span>
            </div>

            {/* 1 star */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#f59e0b] w-20">
                <Star className="w-3 h-3 fill-[#f59e0b]" />
                {Array.from({ length: 4 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-stone-300" />
                ))}
              </div>
              <div className="flex-1 h-3 bg-stone-200 rounded-sm overflow-hidden">
                <div className="h-full bg-[#5f7d54] w-0" />
              </div>
              <span className="w-6 text-right tabular-nums text-stone-700 font-medium">0</span>
            </div>
          </div>

          {/* Right: Write a review CTA */}
          <div className="flex shrink-0">
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="bg-[#5f7d54] hover:bg-[#506c46] text-white font-semibold py-2.5 px-6 rounded-md shadow-xs transition-colors text-sm cursor-pointer whitespace-nowrap"
            >
              Write a review
            </button>
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className="mt-8 pb-4 border-b border-stone-200 flex items-center justify-between">
          <div className="relative inline-block text-left">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'recent' | 'highest')}
              className="appearance-none bg-transparent pr-8 py-1 text-xs sm:text-sm font-semibold text-stone-700 cursor-pointer focus:outline-none"
            >
              <option value="recent">Most Recent</option>
              <option value="highest">Highest Rating</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2 top-2 pointer-events-none text-stone-500" />
          </div>

          <span className="text-xs text-stone-500 tabular-nums">
            Showing {displayedReviews.length} of {reviews.length} reviews
          </span>
        </div>

        {/* Reviews List */}
        <div className="divide-y divide-stone-200/80">
          {displayedReviews.map((rev) => (
            <div key={rev.id} className="py-6 space-y-2">
              {/* 5 stars */}
              <div className="flex items-center gap-1 text-[#f59e0b]">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                ))}
              </div>

              {/* Author name with user avatar icon */}
              <div className="flex items-center gap-2 text-stone-800 text-sm font-semibold">
                <div className="w-6 h-6 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-500">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span>{rev.author}</span>
                {rev.verified && (
                  <span className="text-[11px] text-[#4a6b46] font-normal">
                    Verified
                  </span>
                )}
              </div>

              {/* Review Comment */}
              <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed pt-1">
                {rev.comment}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination: « ‹ 1 2 3 4 › » */}
        {totalPages > 1 && (
          <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-center gap-2 sm:gap-3 text-stone-700 text-sm font-semibold">
            {currentPage > 1 && (
              <>
                <button
                  onClick={() => setCurrentPage(1)}
                  className="w-8 h-8 rounded flex items-center justify-center hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
                  aria-label="First page"
                >
                  «
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="w-8 h-8 rounded flex items-center justify-center hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
                  aria-label="Previous page"
                >
                  ‹
                </button>
              </>
            )}

            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded flex items-center justify-center transition-colors cursor-pointer ${
                    currentPage === page
                      ? 'bg-[#5f7d54] text-white'
                      : 'hover:bg-stone-100 text-stone-700'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {currentPage < totalPages && (
              <>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="w-8 h-8 rounded flex items-center justify-center hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
                  aria-label="Next page"
                >
                  ›
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className="w-8 h-8 rounded flex items-center justify-center hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
                  aria-label="Last page"
                >
                  »
                </button>
              </>
            )}
          </div>
        )}

        {/* Write a Review Modal */}
        {isWriteModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200 animate-fadeIn">
              <button
                onClick={() => setIsWriteModalOpen(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 p-1 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-stone-900 mb-1">
                Write a Review
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mb-6">
                Share your experience with 200 Natural Remedies for Everyday Health.
              </p>

              {formSuccess ? (
                <div className="p-6 bg-[#f1f6ef] border border-[#bcd7b8] rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#4a6b46] mx-auto" />
                  <p className="font-bold text-[#2d492a]">Thank you for your review!</p>
                  <p className="text-xs text-stone-600">Your feedback has been verified and posted.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria G."
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5f7d54] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          className="p-1 text-[#f59e0b] hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              formRating >= star ? 'fill-[#f59e0b]' : 'text-stone-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-semibold text-stone-600 ml-2">
                        {formRating} of 5 Stars
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Your Review
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Which remedy helped you the most? How easy were the ingredients to find?"
                      value={formComment}
                      onChange={(e) => setFormComment(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5f7d54] text-sm"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsWriteModalOpen(false)}
                      className="px-4 py-2 text-sm text-stone-600 hover:text-stone-900 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#5f7d54] hover:bg-[#506c46] text-white font-semibold rounded-lg shadow-sm text-sm cursor-pointer"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
