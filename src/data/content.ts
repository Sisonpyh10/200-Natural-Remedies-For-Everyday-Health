import { ReviewItem, RecipeSample } from '../types';

export const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/dRm00lfrs6ro7Ns3Eo5EY03';

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Santiago F.',
    rating: 5,
    date: '3 days ago',
    verified: true,
    comment: "It arrived in great condition, it's what I expected",
  },
  {
    id: 'rev-2',
    author: 'Alex M.',
    rating: 5,
    date: '1 week ago',
    verified: true,
    comment: 'I liked it a lot. Very useful',
  },
  {
    id: 'rev-3',
    author: 'Gloria P.',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    comment:
      "thanks to this book I didn't panic when my husband woke up with terrible back pain at 4am and had to work at 6. I looked it up, found the remedy, made it, and he was able to go. Before I would've gone to the ER and who knows how much they'd charge me. This book has already paid for itself",
  },
  {
    id: 'rev-4',
    author: 'Sandra Flores',
    rating: 5,
    date: '3 weeks ago',
    verified: true,
    comment:
      "you look up the problem you have -- headache, gastritis, whatever -- and go straight to that page. In 30 seconds you already know what to do. It's not meant to be studied, it's meant to be used when you need it",
  },
  {
    id: 'rev-5',
    author: 'Esperanza G.',
    rating: 5,
    date: '1 month ago',
    verified: true,
    comment:
      "I'm the kind of person who needs to know why something works, not just that grandma said so. This book explains the why behind each remedy. I showed a few pages to my daughter who's studying nursing and she told me several of those plants do have studies behind them. That convinced me even more",
  },
  {
    id: 'rev-6',
    author: 'María Laura R.',
    rating: 5,
    date: '1 month ago',
    verified: true,
    comment:
      "I bought it pretty skeptical because I'd never made home remedies before and I thought it would be complicated or unclear. Honestly, it surprised me in a good way. Everything is explained step by step with ingredients that are easy to find. I started using it for digestion issues and to sleep better, and now I always keep it in the kitchen.",
  },
  {
    id: 'rev-7',
    author: 'Julia S.',
    rating: 5,
    date: '1 month ago',
    verified: true,
    comment:
      "Since I started following the recipes in the book, I don't feel as bloated anymore and I sleep a lot better.",
  },
  {
    id: 'rev-8',
    author: 'Jorge L.',
    rating: 5,
    date: '2 months ago',
    verified: true,
    comment:
      "I work in construction and my back is my worst enemy. I can't go to the doctor every time — that's $300 I don't have. The arnica and rosemary balm from the book changed my life. My coworkers ask me for the remedy too.",
  },
  {
    id: 'rev-9',
    author: 'Carmen V.',
    rating: 4,
    date: '2 months ago',
    verified: true,
    comment:
      'Very clear format and accurate measurements. The index is fast to navigate on my iPad and phone. Only wishing I had purchased the printed version too!',
  },
  {
    id: 'rev-10',
    author: 'David K.',
    rating: 5,
    date: '2 months ago',
    verified: true,
    comment:
      'I was tired of spending $40 on bottles of supplement pills that gave me stomach aches. My wife and I tried the chamomile and ginger steam remedy from chapter 3 when we caught a bad cold last month. We could actually breathe that same evening. Straightforward instructions with things you already have in the pantry.',
  },
  {
    id: 'rev-11',
    author: 'Patricia M.',
    rating: 5,
    date: '2 months ago',
    verified: true,
    comment:
      'What I appreciate most is the safety notes and precautions. Most natural remedy websites on Google never mention contraindications or interactions with blood pressure medication. This book clearly lists who shouldn\'t take what, which gives me peace of mind with my elderly parents.',
  },
  {
    id: 'rev-12',
    author: 'Helena T.',
    rating: 5,
    date: '3 months ago',
    verified: true,
    comment:
      'Bought this for the sinus remedies because seasonal allergies here in Texas are brutal. The eucalyptus thyme rinse recipe worked better than the nasal sprays that dried out my sinuses. Well organized by symptoms.',
  },
  {
    id: 'rev-13',
    author: 'Roberto C.',
    rating: 5,
    date: '3 months ago',
    verified: true,
    comment:
      'Simple, no BS approach. It doesn\'t promise miracle cures or tell you to hike into the Amazon for rare herbs. Lemon, garlic, mint, turmeric, apple cider vinegar... practical solutions you can whip up in 10 minutes on a weeknight.',
  },
  {
    id: 'rev-14',
    author: 'Clara B.',
    rating: 5,
    date: '3 months ago',
    verified: true,
    comment:
      'I keep it right by my spice rack. Last week my 8-year-old had an itchy bug bite that wouldn\'t stop swelling. Looked up the quick oatmeal and plantain paste, made it in 2 minutes, and the itch disappeared before bed.',
  },
  {
    id: 'rev-15',
    author: 'Mateo D.',
    rating: 5,
    date: '3 months ago',
    verified: true,
    comment:
      'The layout is very clean. Big readable print so you don\'t need your glasses when you\'re preparing tea at night. The step-by-step preparation guides are foolproof.',
  },
  {
    id: 'rev-16',
    author: 'Lorena Gutierrez',
    rating: 5,
    date: '4 months ago',
    verified: true,
    comment:
      'I was always intimidated by herbalism because other books read like chemistry manuals or medieval poetry. This one is completely grounded in reality. The calming evening infusion is now part of my nightly routine.',
  },
  {
    id: 'rev-17',
    author: 'Tomás N.',
    rating: 5,
    date: '4 months ago',
    verified: true,
    comment:
      'Great reference guide. I used to google home remedies and end up confused with 10 conflicting blogs. Here it\'s one trusted source tested with precise proportions and dosage frequency.',
  },
  {
    id: 'rev-18',
    author: 'Silvia A.',
    rating: 5,
    date: '4 months ago',
    verified: true,
    comment:
      'I gave a copy to my sister who just had a baby and was looking for gentle postpartum remedies. She called me raving about the calendula compress. Definitely worth every penny.',
  },
  {
    id: 'rev-19',
    author: 'Daniela R.',
    rating: 5,
    date: '5 months ago',
    verified: true,
    comment:
      'The section on digestive health alone made this worth buying. The peppermint fennel infusion saved my holidays after heavy family dinners. No heavy bloat or heartburn.',
  },
  {
    id: 'rev-20',
    author: 'Fernando G.',
    rating: 5,
    date: '5 months ago',
    verified: true,
    comment:
      'Clear, down-to-earth advice without any woo-woo fluff. Beautiful color images that actually help you recognize the dry herbs when you go to the local market. 10/10.',
  },
];

export const FAQS = [
  {
    question: 'Are the ingredients easy to find?',
    answer:
      'Yes, absolutely. Over 90% of the remedies use staple items already in your spice cabinet, pantry, or local grocery store (like ginger, garlic, chamomile, thyme, honey, olive oil, and baking soda). For the few herbal roots or specialty flowers, they are easily found in any local herbalist, health market, or online.',
  },
  {
    question: '¿Does it work even if I have no experience with herbal remedies?',
    answer:
      '100% yes. The book was created specifically for beginners with no botanical or medicinal background. Every remedy contains exact measurements, simple step-by-step instructions, and photographs of what each phase looks like so you never have to guess.',
  },
  {
    question: '¿Are the recipes complicated or time-consuming?',
    answer:
      'No. Most remedies take between 3 to 12 minutes to prepare. We designed every recipe for immediate everyday use when you or your family need fast relief without long decoction processes or complex laboratory tools.',
  },
  {
    question: 'Is it written in clear, easy-to-understand English?',
    answer:
      'Yes. There is no complicated medical jargon or confusing botanical terminology. Everything is written in friendly, accessible everyday English with clear problem-focused headings so you can find what you need in under 30 seconds.',
  },
];

export const RECIPE_SAMPLES: RecipeSample[] = [
  {
    id: 'deep-cleanse',
    pageNumber: 106,
    title: 'Deep Cleanse Infusion',
    category: 'Detox & Vitality Support',
    intro:
      "This infusion has traditionally been used as cleansing support when the goal is to accompany the body's natural detoxification processes. Burdock is known for its purifying action, dandelion supports liver function, and nettle contributes to waste elimination through the kidneys. Taken in moderation, it's designed for periods of gentle, mindful cleansing.",
    imageHero: '/images/infusion_cover.png',
    imageIngredients: '/images/tea_cover.png',
    ingredients: [
      '1 teaspoon dried burdock root',
      '1 teaspoon dried dandelion leaves',
      '1 teaspoon dried nettle leaves',
      '1 cup water',
    ],
    steps: [
      {
        title: 'Heat the water',
        instruction: 'Place the water in a pot or kettle and bring to a boil.',
      },
      {
        title: 'Add the herbs',
        instruction: 'Remove from heat and add the burdock, dandelion, and nettle.',
      },
      {
        title: 'Cover and steep',
        instruction: 'Cover the container and let it steep for 10 to 15 minutes.',
      },
      {
        title: 'Strain',
        instruction: 'Strain the infusion through a fine mesh before drinking.',
      },
    ],
    amountFrequency: ['Drink 1 cup a day.', 'Use for short periods, 5 to 7 days.'],
    warnings: [
      'Do not use during pregnancy or breastfeeding.',
      'Avoid in cases of kidney problems without medical supervision.',
      'Do not use for extended periods.',
      'Drink enough water throughout the day.',
      'Discontinue if it causes discomfort.',
    ],
  },
  {
    id: 'deep-rest',
    pageNumber: 42,
    title: 'Nervine Night Calm Infusion',
    category: 'Sleep & Nervous System',
    intro:
      'A soothing synergistic botanical blend crafted to gently quiet repetitive thoughts and ease physical muscular tension before bed. Chamomile relaxes the central nervous system, lemon balm eases restlessness, and passionflower promotes deep restorative REM cycles without grogginess the next morning.',
    imageHero: '/images/woman_reading_herbal_book_1790266668108.jpg',
    imageIngredients: '/images/remedy_tea_ingredients_1790266684287.jpg',
    ingredients: [
      '1 tablespoon dried chamomile flowers',
      '1 teaspoon dried lemon balm leaves',
      '1/2 teaspoon dried passionflower',
      '1 cup boiling water',
      '1 teaspoon raw wildflower honey (optional)',
    ],
    steps: [
      {
        title: 'Warm the vessel',
        instruction: 'Rinse your ceramic mug with boiling water to retain warmth.',
      },
      {
        title: 'Infuse herbs',
        instruction: 'Place herbs in a covered infuser and pour hot water (approx. 90°C).',
      },
      {
        title: 'Steep covered',
        instruction: 'Keep covered for 8 to 10 minutes to trap essential aromatic oils.',
      },
      {
        title: 'Sweeten and sip',
        instruction: 'Stir in honey if desired and sip slowly 30 minutes before bed.',
      },
    ],
    amountFrequency: ['Drink 1 warm cup 30-45 minutes before bedtime.', 'Use nightly as needed.'],
    warnings: [
      'Avoid driving or operating machinery immediately after consumption.',
      'Consult your physician if taking prescribed sedatives.',
      'Keep away from infants under 12 months (due to honey).',
    ],
  },
  {
    id: 'arnica-balm',
    pageNumber: 88,
    title: 'Arnica & Rosemary Sore Muscle Balm',
    category: 'Muscle & Joint Care',
    intro:
      'An invigorating warming topical ointment formulated for physical labor, lumbar aches, and stiff joints. Arnica extract stimulates localized circulation while rosemary and peppermint essential oils soothe inflamed muscle fibers.',
    imageHero: '/images/woman_tasting_herbal_syrup_1790266697808.jpg',
    imageIngredients: '/images/remedy_tea_ingredients_1790266684287.jpg',
    ingredients: [
      '2 tablespoons arnica-infused olive oil',
      '1 tablespoon grated yellow beeswax',
      '6 drops pure rosemary essential oil',
      '4 drops peppermint essential oil',
    ],
    steps: [
      {
        title: 'Melt beeswax',
        instruction: 'Gently melt beeswax in a heat-safe glass bowl over a simmering water bath.',
      },
      {
        title: 'Blend oils',
        instruction: 'Stir in arnica oil slowly until thoroughly combined and remove heat.',
      },
      {
        title: 'Add essences',
        instruction: 'Let cool for 2 minutes before dropping in rosemary and peppermint oils.',
      },
      {
        title: 'Pour & solidify',
        instruction: 'Pour into an amber tin and let firm at room temperature for 1 hour.',
      },
    ],
    amountFrequency: [
      'Massage a nickel-sized amount onto affected area 2 to 3 times daily.',
      'Wash hands thoroughly after application.',
    ],
    warnings: [
      'For external use only. Never apply to broken skin or open wounds.',
      'Perform a small skin patch test prior to full application.',
      'Avoid contact with eyes and mucous membranes.',
    ],
  },
];

export const SYMPTOMS_LIST = [
  {
    id: 'sleep',
    icon: '💤',
    title: 'Sleep issues',
    description: 'Insomnia, midnight waking, racing thoughts, restless legs',
    remedyPreview: 'Pages 38–52: Chamomile Nervine Infusion, Valerian Root Sleep Tincture',
  },
  {
    id: 'digestive',
    icon: '🍃',
    title: 'Digestive issues',
    description: 'Bloating, acid reflux, sluggish digestion, gas',
    remedyPreview: 'Pages 12–29: Ginger Fennel Soother, Peppermint Bile Activator, Cumin Tea',
  },
  {
    id: 'fatigue',
    icon: '⚡',
    title: 'Fatigue and low energy',
    description: 'Afternoon crashes, adrenal exhaustion, sluggish mornings',
    remedyPreview: 'Pages 74–86: Rosemary Brain Tonic, Nettle Iron Decoction, Ashwagandha Milk',
  },
  {
    id: 'muscle',
    icon: '💪',
    title: 'Muscle aches',
    description: 'Lower back stiffness, joint inflammation, physical strain',
    remedyPreview: 'Pages 88–104: Arnica & Rosemary Balm, Epsom Juniper Soak, Cayenne Salve',
  },
  {
    id: 'blood-sugar',
    icon: '🩸',
    title: 'Blood sugar concerns',
    description: 'Energy spikes, glucose stabilization, sugar cravings',
    remedyPreview: 'Pages 110–124: Cinnamon Ceylon Decoction, Fenugreek Seed Tea, Bitter Melon',
  },
];

export const POLICIES = {
  privacy: {
    title: 'Privacy Policy',
    content: `Natural Wellness Books respects your personal privacy. When you purchase our digital publications, we collect only the necessary details (such as your email address and payment billing credentials through certified encrypted gateways) required to deliver your digital access key and receipt. We never sell, rent, or trade your personal information with third-party advertisers. All transactions are protected via 256-bit SSL encryption.`,
  },
  refund: {
    title: 'Refund Policy & 60-Day Guarantee',
    content: `We stand behind "200 Natural Remedies for Everyday Health" with an unconditional 60-day money-back guarantee. If you review the book, try the recipes, and feel it hasn't given you practical natural solutions for your household, simply send an email to support@naturalsolutions.com within 60 days of purchase. We will issue a 100% full refund with no questions asked and no hassle.`,
  },
  terms: {
    title: 'Terms of Service',
    content: `The information provided in "200 Natural Remedies for Everyday Health – Digital Edition" is intended for general educational, historical, and traditional wellness purposes only. It is not intended to diagnose, treat, cure, or prevent any medical disease or replace professional diagnosis by a qualified medical practitioner. Always consult a licensed healthcare provider before beginning any new herbal regimen.`,
  },
  contact: {
    title: 'Contact Information',
    content: `Customer Support Email: support@naturalsolutions.com\nHours: Monday – Saturday, 8:00 AM – 7:00 PM EST\nPublisher: Natural Wellness Books\nPhysical Office: 742 Evergreen Terrace, Suite 300, Portland, OR 97201\nAverage Response Time: Under 4 hours on business days.`,
  },
  shipping: {
    title: 'Shipping Policy',
    content: `This edition is an INSTANT DIGITAL DOWNLOAD. Immediately upon completing checkout, you will receive lifetime access to the complete high-resolution PDF and interactive e-reader edition. A copy with your personal access link will also be dispatched instantly to your email inbox. There are zero shipping fees, zero transit delays, and you can download it to unlimited personal devices (phones, tablets, e-readers, and computers).`,
  },
  buyerProtection: {
    title: 'Buyer Protection Guarantee',
    content: `Your purchase is backed by our complete Buyer Protection program:\n1. 100% Secure Checkout with 256-bit bank-grade SSL encryption.\n2. Instant Digital Delivery with lifetime redownload access.\n3. 60-Day Money-Back Guarantee: If you are not completely satisfied, receive a full refund with one simple email.\n4. Verified Customer Support ready to assist you 6 days a week.`,
  },
};
