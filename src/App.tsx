import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroProduct } from './components/HeroProduct';
import { TrustPillars } from './components/TrustPillars';
import { GrandmotherStory } from './components/GrandmotherStory';
import { LookInsideRecipe } from './components/LookInsideRecipe';
import { Testimonials } from './components/Testimonials';
import { PeaceOfMindSection } from './components/PeaceOfMindSection';
import { ComparisonTable } from './components/ComparisonTable';
import { GrandmotherWisdom } from './components/GrandmotherWisdom';
import { GuaranteeSection } from './components/GuaranteeSection';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { PolicyModal } from './components/PolicyModal';
import { CartItem, ReviewItem } from './types';
import { INITIAL_REVIEWS, STRIPE_CHECKOUT_URL } from './data/content';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'book-digital',
      title: '200 Natural Remedies for Everyday Health',
      subtitle: 'Digital Edition (Instant Download)',
      price: 14.95,
      originalPrice: 37.0,
      quantity: 1,
      image: '/images/natural_remedies_book_cover_1790266645380.jpg',
    },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activePolicyKey, setActivePolicyKey] = useState<string | null>(null);
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const hasBump = cartItems.some((item) => item.id === 'bump-reference-cards');

  const handleAddToCart = () => {
    window.location.href = STRIPE_CHECKOUT_URL;
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddBump = () => {
    if (hasBump) return;
    setCartItems((prev) => [
      ...prev,
      {
        id: 'bump-reference-cards',
        title: 'Printable Kitchen Quick-Reference Cards',
        subtitle: '12 Laminated-Ready Sheets',
        price: 4.99,
        originalPrice: 15.0,
        quantity: 1,
        image: '/images/remedy_tea_ingredients_1790266684287.jpg',
        isBump: true,
      },
    ]);
  };

  const handleAddReview = (newReview: ReviewItem) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  const scrollToLookInside = () => {
    const el = document.getElementById('look-inside');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      {/* 1. Top Offer Notice */}
      <AnnouncementBar />

      {/* 2. Primary Navigation Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPolicy={(key) => setActivePolicyKey(key)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 3. Hero / PDP Section */}
        <HeroProduct
          onAddToCart={handleAddToCart}
          onScrollToLookInside={scrollToLookInside}
        />

        {/* 4. Trust Pillars Banner */}
        <TrustPillars />

        {/* 5. Grandmother Kitchen Wisdom & Symptoms Explorer */}
        <GrandmotherStory onGetCopy={handleAddToCart} />

        {/* 6. A Look Inside: Exact Page 106 Deep Cleanse Infusion */}
        <LookInsideRecipe />

        {/* 7. Highlighted Customer Quotes */}
        <Testimonials />

        {/* 8. Peace of Mind Split Collage Section */}
        <PeaceOfMindSection onClaimOffer={handleAddToCart} />

        {/* 9. Comparison Matrix: 200 Natural Solutions vs Others */}
        <ComparisonTable />

        {/* 10. Knowing vs Searching Ancestral Story */}
        <GrandmotherWisdom onBuyNow={handleAddToCart} />

        {/* 11. 60-Day Risk-Free Guarantee Section */}
        <GuaranteeSection onBuyWithGuarantee={handleAddToCart} />

        {/* 12. Full Customer Reviews with Pagination & Submission */}
        <CustomerReviews reviews={reviews} onAddReview={handleAddReview} />
      </main>

      {/* 13. Sage Footer with Policy Modals & Payment Badges */}
      <Footer onOpenPolicy={(key) => setActivePolicyKey(key)} />

      {/* Shopping Bag Drawer with Instant Checkout Flow */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onAddBump={handleAddBump}
        hasBump={hasBump}
      />

      {/* Policy & Trust Dialogs */}
      <PolicyModal
        policyKey={activePolicyKey}
        onClose={() => setActivePolicyKey(null)}
      />
    </div>
  );
}
