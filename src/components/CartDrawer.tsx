import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShieldCheck, Check, Sparkles, Download, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { STRIPE_CHECKOUT_URL } from '../data/content';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onAddBump: () => void;
  hasBump: boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onAddBump,
  hasBump,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalSavings = cartItems.reduce(
    (acc, item) => acc + (item.originalPrice - item.price) * item.quantity,
    0
  );

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail.trim() || !customerName.trim()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutStep('success');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-2xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf8f5] shadow-2xl flex flex-col border-l border-stone-200">
          {/* Top Bar */}
          <div className="px-6 py-5 border-b border-stone-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold font-serif-display text-stone-900">
                {checkoutStep === 'cart' && 'Your Shopping Bag'}
                {checkoutStep === 'checkout' && 'Instant Checkout'}
                {checkoutStep === 'success' && 'Order Confirmed!'}
              </h2>
              {checkoutStep === 'cart' && (
                <span className="bg-[#edf3eb] text-[#4a6b46] text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartItems.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {checkoutStep === 'cart' && (
              <>
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <p className="text-stone-500 text-sm">Your shopping cart is currently empty.</p>
                    <button
                      onClick={onClose}
                      className="px-5 py-2 bg-[#5f7d54] text-white text-xs font-bold rounded-lg uppercase"
                    >
                      Browse Remedies
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs flex gap-4 items-center"
                      >
                        <div className="w-16 h-20 bg-stone-100 rounded-md overflow-hidden shrink-0 border border-stone-200">
                          <img
                            src={item.image}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-stone-900 font-serif-display leading-snug truncate">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-[#5f7d54] font-medium">{item.subtitle}</p>

                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-sm font-bold text-stone-900 tabular-nums">
                              ${item.price.toFixed(2)}
                            </span>
                            <span className="text-xs text-stone-400 line-through tabular-nums">
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          </div>

                          {/* Stepper */}
                          <div className="flex items-center justify-between mt-3 pt-2 border-t border-stone-100">
                            <div className="flex items-center border border-stone-200 rounded-md bg-stone-50">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="p-1 hover:text-black text-stone-500 cursor-pointer"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="px-2.5 text-xs font-semibold tabular-nums text-stone-800">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="p-1 hover:text-black text-stone-500 cursor-pointer"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Order Bump Box */}
                    {!hasBump && (
                      <div className="bg-[#f2f7ef] border-2 border-dashed border-[#5f7d54]/40 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#5f7d54] text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Sparkles className="w-3 h-3" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h5 className="text-xs font-bold text-[#2d4b29] uppercase tracking-wide">
                                Special One-Time Offer
                              </h5>
                              <span className="text-xs font-bold text-[#5f7d54] tabular-nums">
                                +$4.99
                              </span>
                            </div>
                            <p className="text-xs text-stone-700 mt-1 leading-snug">
                              <strong>Printable Quick-Reference Kitchen Cards</strong>: 12 laminated-ready cheat sheets with instant dosages to tape inside your cabinet.
                            </p>
                            <button
                              onClick={onAddBump}
                              className="mt-2.5 text-xs font-bold bg-[#5f7d54] hover:bg-[#4a6b46] text-white px-3.5 py-1.5 rounded-md transition-colors shadow-2xs cursor-pointer flex items-center gap-1.5"
                            >
                              <span>Add to Order</span>
                              <span>+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'checkout' && (
              <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="p-3.5 bg-stone-100 rounded-lg text-xs text-stone-700 flex items-center justify-between">
                  <span>Order Total:</span>
                  <span className="text-base font-bold text-stone-900 tabular-nums">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5f7d54]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Email Address (for Instant Delivery)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5f7d54]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Payment Simulation (Instant Test Mode)
                  </label>
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600 space-y-1">
                    <p className="flex items-center gap-1 text-[#4a6b46] font-semibold">
                      <ShieldCheck className="w-4 h-4" /> 256-Bit SSL Encrypted Checkout
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Sandbox demonstration enabled. Click below to verify instant digital delivery.
                    </p>
                  </div>
                </div>
              </form>
            )}

            {checkoutStep === 'success' && (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 bg-[#e8efe6] text-[#4a6b46] rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold font-serif-display text-stone-900">
                    Thank You, {customerName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Your digital access key and receipt have been dispatched to <strong>{customerEmail}</strong>.
                  </p>
                </div>

                <div className="p-5 bg-white border border-stone-200 rounded-xl shadow-xs text-left space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-stone-100">
                    <span className="text-stone-500">Order ID:</span>
                    <span className="font-mono font-bold text-stone-800">#NAT-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">Access Type:</span>
                    <span className="text-[#4a6b46] font-bold">Lifetime Digital Access</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">Total Charged:</span>
                    <span className="font-bold text-stone-900">${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Instant Download Action */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      alert('Downloading "200 Natural Remedies for Everyday Health (Complete PDF & Interactive Edition)"...');
                    }}
                    className="w-full bg-[#5f7d54] hover:bg-[#4d6a43] text-white font-bold py-3.5 px-6 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Your Digital Book (PDF)</span>
                  </button>
                  <p className="text-[11px] text-stone-500 mt-2">
                    Compatible with iPad, Kindle, iPhone, Android, and Desktop.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          {cartItems.length > 0 && checkoutStep !== 'success' && (
            <div className="p-6 border-t border-stone-200 bg-white space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-stone-500 text-xs">
                  <span>List Price:</span>
                  <span className="line-through tabular-nums">
                    ${(subtotal + totalSavings).toFixed(2)}
                  </span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex justify-between text-[#8c6747] text-xs font-semibold">
                    <span>Special Savings (59% OFF):</span>
                    <span className="tabular-nums">-${totalSavings.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-stone-900 text-base pt-1 border-t border-stone-100">
                  <span>Subtotal:</span>
                  <span className="text-xl text-[#4a6b46] tabular-nums">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {checkoutStep === 'cart' ? (
                <a
                  href={STRIPE_CHECKOUT_URL}
                  className="w-full bg-[#5f7d54] hover:bg-[#506c46] active:bg-[#435c3b] text-white font-bold py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="px-4 py-3 border border-stone-300 text-stone-700 text-xs font-bold rounded-lg hover:bg-stone-50 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    form="checkout-form"
                    disabled={isProcessing}
                    className="flex-1 bg-[#5f7d54] hover:bg-[#506c46] text-white font-bold py-3 px-6 rounded-lg shadow-md text-sm uppercase cursor-pointer disabled:opacity-50"
                  >
                    {isProcessing ? 'Authorizing...' : `Pay $${subtotal.toFixed(2)}`}
                  </button>
                </div>
              )}

              <p className="text-[11px] text-center text-stone-400">
                🔒 60-Day Unconditional Money-Back Guarantee
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
