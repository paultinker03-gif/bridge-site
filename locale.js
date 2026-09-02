/* Bridge — locale store. Country + language, persisted, with document direction. */
(function () {
  if (window.BridgeLocale) return;

  var COUNTRIES = [
    { code: 'GB', name: 'United Kingdom', nameAr: 'المملكة المتحدة', currency: 'GBP £', region: 'Europe' },
    { code: 'IE', name: 'Ireland', nameAr: 'أيرلندا', currency: 'EUR €', region: 'Europe' },
    { code: 'FR', name: 'France', nameAr: 'فرنسا', currency: 'EUR €', region: 'Europe' },
    { code: 'DE', name: 'Germany', nameAr: 'ألمانيا', currency: 'EUR €', region: 'Europe' },
    { code: 'IT', name: 'Italy', nameAr: 'إيطاليا', currency: 'EUR €', region: 'Europe' },
    { code: 'ES', name: 'Spain', nameAr: 'إسبانيا', currency: 'EUR €', region: 'Europe' },
    { code: 'US', name: 'United States', nameAr: 'الولايات المتحدة', currency: 'USD $', region: 'Americas' },
    { code: 'CA', name: 'Canada', nameAr: 'كندا', currency: 'CAD $', region: 'Americas' },
    { code: 'AE', name: 'United Arab Emirates', nameAr: 'الإمارات العربية المتحدة', currency: 'AED', region: 'Middle East' },
    { code: 'SA', name: 'Saudi Arabia', nameAr: 'المملكة العربية السعودية', currency: 'SAR', region: 'Middle East' },
    { code: 'JP', name: 'Japan', nameAr: 'اليابان', currency: 'JPY ¥', region: 'Asia Pacific' },
    { code: 'AU', name: 'Australia', nameAr: 'أستراليا', currency: 'AUD $', region: 'Asia Pacific' }
  ];

  var LANGUAGES = [
    { code: 'en', name: 'English', native: 'English', dir: 'ltr' },
    { code: 'fr', name: 'French', native: 'Français', dir: 'ltr' },
    { code: 'de', name: 'German', native: 'Deutsch', dir: 'ltr' },
    { code: 'it', name: 'Italian', native: 'Italiano', dir: 'ltr' },
    { code: 'es', name: 'Spanish', native: 'Español', dir: 'ltr' },
    { code: 'ja', name: 'Japanese', native: '日本語', dir: 'ltr' },
    { code: 'ar', name: 'Arabic', native: 'العربية', dir: 'rtl' }
  ];

  var STRINGS = {
    en: {
      stDetails: 'Details', stDelivery: 'Delivery', stPayment: 'Payment',
      nvMen: 'Men', nvWomen: 'Women', shShop: 'Shop',
      catAccessoriesDesc: 'Caps, socks, gloves and warmers — the small decisions.',
      catJerseys: 'Jerseys', catBibs: 'Bibs & shorts', catOuterwear: 'Outerwear',
      catJerseysDesc: 'Race, endurance and thermal, one cut per job.',
      catBibsDesc: 'Eight-hour chamois, four leg lengths.',
      catOuterwearDesc: 'Gilets, shells and winter jackets.',
      xbKicker: 'Circularity at Bridge',
      xbTitle: 'Every Bridge piece has a second life at SHIFT.',
      xbBody: 'SHIFT is our own house for repair, resale and recovery. Send anything we have ever made to the bench, trade it in for credit, or buy it back graded and guaranteed.',
      xbP1: 'Repairs for life on anything Bridge has sold.',
      xbP2: 'Trade-in credit that spends here too.',
      xbP3: '412 certified pre-owned pieces live now.',
      xbCta: 'Visit SHIFT',
      xsKicker: 'The parent house',
      xsTitle: 'Everything we keep alive was built by Bridge.',
      xsBody: 'Bridge specifies every panel for repair before it specifies it for weight. That is why a ten-year-old jersey still comes back to the bench and leaves it wearable.',
      xsP1: 'Made in Europe, built to be opened up.',
      xsP2: 'Two collections a year, not four.',
      xsP3: 'Repairs for life, from the first owner on.',
      xsCta: 'Visit Bridge',
      sfPreOwned: 'Pre-owned', sfRepair: 'Repair', sfTradeIn: 'Trade-in', sfMaterials: 'Materials', sfFieldNotes: 'Field notes',
      sfAnnounce: 'Second life no. 41,208 logged today',
      sfAnnounceShort: 'Repairs for life · Trade in any Bridge piece',
      sfFooterBlurb: 'Repair, resale and recovery for Bridge cycling gear. A Bridge company, run as its own house.',
      sfFooterBlurbShort: 'Repair, resale and recovery for Bridge cycling gear.',
      sfCopyright: '© 2026 Bridge Cycling · SHIFT',
      sfCircularity: 'Circularity', sfHouse: 'SHIFT',
      sfShopPreOwned: 'Shop pre-owned', sfBookRepair: 'Book a repair', sfTradeKit: 'Trade in kit', sfMaterialsMethod: 'Materials method',
      sfTheLedger: 'The ledger', sfBenchHours: 'Benches & hours', sfGrading: 'Grading standard',
      sfYourRecord: 'Your record', sfDropNotices: 'Drop notices',
      sfPlpTitle: 'Second lives, graded and guaranteed.',
      sfPlpLead: 'Every piece here was traded in by a rider, repaired at the bench and graded by the people who built it. Two-year guarantee, same as new.',
      sfCertified: 'Certified pre-owned',
      sfAllGrades: 'All grades', sfGradeA: 'Grade A', sfGradeB: 'Grade B', sfGradeC: 'Grade C',
      sfEverything: 'Everything', sfCatJerseys: 'Jerseys', sfCatShorts: 'Shorts', sfCatOuterwear: 'Outerwear', sfCatKit: 'Kit',
      sfPieces: '%s of %s pieces', sfSecondLife: 'Second life', sfRecord: 'Record',
      sfCondition: 'Condition', sfGuarantee: 'Two-year guarantee · Free returns for 30 days · Repairs for life, whoever owns it next.',
      sfNothingTitle: 'Nothing in that grade right now.',
      sfNothingBody: 'Stock lands every fortnight. Subscribers see it twelve hours early.',
      sfGetDrops: 'Get drop notices',
      sfSortNewest: 'Newest in', sfSortPrice: 'Price', sfSortSaving: 'Biggest saving',
      sfSizeFit: 'Size & fit', sfOffNew: '%s% off new',
      race: 'Race', endurance: 'Endurance', winter: 'Winter', accessories: 'Accessories', journal: 'Journal',
      search: 'Search', searchPlaceholder: 'Jersey, bib short, cap', signIn: 'Sign in', bag: 'Bag',
      ordersRepairs: 'Orders & repairs', closeMenu: 'Close menu', menu: 'Menu',
      announce: 'Free returns for 90 days · Repairs for life', announceShort: 'Free returns for 90 days',
      shipsFrom: 'Ships from Bristol',
      shop: 'Shop', help: 'Help', studio: 'Studio',
      giftCards: 'Gift cards', sizeGuide: 'Size guide', delivery: 'Delivery', returns: 'Returns',
      repairs: 'Repairs', contact: 'Contact', about: 'About', workshop: 'Workshop',
      sustainability: 'Sustainability', stockists: 'Stockists',
      email: 'Email', signUp: 'Sign up', emailPlaceholder: 'you@example.com',
      footerBlurb: 'Road kit made in Europe and repaired for life. One newsletter a month — new pieces, ride reports, nothing else.',
      footerBlurbShort: 'Road kit made in Europe and repaired for life.',
      copyright: '© 2026 Bridge Cycling Ltd', terms: 'Terms', privacy: 'Privacy', cookies: 'Cookies',
      localeTitle: 'Country & language', localeLead: 'Prices, delivery options and taxes change with your country.',
      country: 'Country / region', language: 'Language', apply: 'Apply', cancel: 'Cancel',
      shippingTo: 'Shipping to', close: 'Close',
      accountWord: 'Account', joinWord: 'Join', theJournal: 'The Journal',
      restartFlow: 'Restart flow', verifyStep: 'Verify',
      emailAddress: 'Email address', password: 'Password', passMin: 'At least 8 characters',
      verificationCode: 'Verification code', resendCode: 'Resend code',
      codeLead: 'Six digits, sent to %s. Valid for ten minutes.',
      continueApple: 'Continue with Apple',
      errEmail: 'Enter a valid email address.',
      errPassShort: 'Passwords are at least 8 characters.',
      errCode: 'The code is six digits.',
      checking: 'Checking…', verifying: 'Verifying…', sending: 'Sending…', creating: 'Creating…',
      confirming: 'Confirming…', saving: 'Saving…', loading: 'Loading…', searching: 'Searching…',
      firstName: 'First name', lastName: 'Last name', skipForNow: 'Skip for now',

      lgPlateHead: 'Your kit, your orders, your repairs.',
      lgPlateBody: 'Track an order, book a repair, or reorder the size you know fits.',
      lgCredentials: 'Credentials',
      lgWelcome: 'Welcome back',
      lgLead: 'Use the address your Bridge account is registered to.',
      lgForgot: 'Forgot?', lgKeepSigned: 'Keep me signed in on this device',
      lgNoAccount: 'No account yet?', lgCreateOne: 'Create one',
      lgCreateTail: '— it takes a minute and saves your sizes.',
      lgTwoFactor: 'Two-factor', lgEnterCode: 'Enter your code',
      lgVerifyContinue: 'Verify and continue', lgBackToSignIn: '← Back to sign in',
      lgRecovery: 'Recovery', lgResetPass: 'Reset your password',
      lgResetLead: "We'll send a single-use link. It expires after one hour.",
      lgSendReset: 'Send reset link',
      lgRecoverySent: 'Recovery sent', lgCheckInbox: 'Check your inbox',
      lgSentLead: 'A reset link is on its way to %s. If nothing arrives in five minutes, check the address and try again.',
      lgSentTo: 'Sent to', lgExpires: 'Expires', lgOneHour: 'One hour from now',
      lgBackSignIn: 'Back to sign in', lgUseAnother: 'Use another address',
      lgSignedIn: 'Signed in',
      lgSignedInLead: 'Signed in as %s — two open orders and one repair in the workshop.',
      lgOrder: 'Order', lgPlaced: 'Placed', lgStatus: 'Status',
      lgPacked: 'Packed', lgInRepair: 'In repair', lgDelivered: 'Delivered',
      lgContinueShopping: 'Continue shopping',

      acPlateHead: 'Sized once. Repaired for life.',
      acBenefit1: 'Your sizes saved, so reordering takes one tap.',
      acBenefit2: 'Free repairs on every piece, for as long as you own it.',
      acBenefit3: 'Early access to new kit, a week before release.',
      acDetails: 'Details', acYourRiding: 'Your riding', acDoneStep: 'Done',
      acKicker: 'Create account', acTitle: 'Join Bridge',
      acLead: 'Two fields and a password. The riding questions come after — and you can skip them.',
      acJournalOptIn: 'Send me the Journal — one email a fortnight, new kit and route notes.',
      acCreateBtn: 'Create my account',
      acTerms1: 'Creating an account accepts our ', acTermsLink1: 'terms', acTermsAnd: ' and ',
      acTermsLink2: 'privacy notice', acTerms2: '. We never sell your data.',
      acHaveAccount: 'Already have an account?', acSignInInstead: 'Sign in instead',
      acConfirmEmail: 'Confirm your email', acEnterCode: 'Enter your code',
      acConfirmContinue: 'Confirm and continue', acChangeEmail: '← Change email address',
      acOptional: 'Optional',
      acRidingLead: 'So we show the right fit and the right season first. Change any of it later.',
      acUsualSize: 'Usual jersey size', acOpenSizeGuide: 'Open the size guide',
      acFitPrefer: 'Fit you prefer',
      acFitRaceRow: 'Race — close through the chest and sleeve',
      acFitClassicRow: 'Classic — a little room, all-day comfort',
      acWhatRide: 'What you ride — pick any',
      acRoad: 'Road', acGravel: 'Gravel', acCommuting: 'Commuting', acTouring: 'Touring',
      acSaveFinish: 'Save and finish',
      acCreated: 'Account created', acWelcomeName: 'Welcome, %s', acWelcomeBridge: 'Welcome to Bridge',
      acDoneLead: "You're signed in as %s. Here's what we've saved.",
      acName: 'Name', acEmailRow: 'Email', acSizeFit: 'Size & fit', acRiding: 'Riding', acJournal: 'Journal',
      acNotGiven: 'Not given', acNotSetAny: 'Not set — add it any time', acNotSetYet: 'Not set yet',
      acRaceFit: 'Race fit', acClassicFit: 'Classic fit',
      acSubscribedFort: 'Subscribed — fortnightly', acNotSubscribed: 'Not subscribed',
      acStartShopping: 'Start shopping', acEditRiding: 'Edit my riding details',
      acWeak: 'Weak', acFair: 'Fair', acGood: 'Good', acStrong: 'Strong',
      acErrFirst: 'Enter your first name.',

      nlPlateHead: 'Two emails a month. Routes, kit, repairs.',
      nlAMonth: 'A month', nlReaders: 'Readers', nlAds: 'Ads',
      nlSignUpStep: 'Sign up', nlConfirmStep: 'Confirm', nlSubscribedStep: 'Subscribed',
      nlFreeKicker: 'Free — unsubscribe any time', nlTitle: 'Read the Journal',
      nlLead: "Where we've been riding, what we've changed in the kit, and what came back for repair. No discount codes.",
      nlFirstOptional: 'First name — optional',
      nlWhatSend: 'What should we send you?',
      nlRoutes: 'Routes and ride reports', nlNewKit: 'New kit, a week before release',
      nlWorkshop: 'Workshop notes and repair guides',
      nlHowOften: 'How often', nlFortnightly: 'Fortnightly', nlMonthly: 'Monthly',
      nlSignMeUp: 'Sign me up', nlSigningUp: 'Signing up…',
      nlPrivacy1: "We'll email you once to confirm. Read our ", nlPrivacyLink: 'privacy notice',
      nlPrivacy2: ' — we never sell your address.',
      nlOneStep: 'One step left', nlCheckInbox: 'Check your inbox',
      nlConfirmLead: "We've sent a confirmation link to %s. Click it and you're on the list — it keeps other people from signing you up.",
      nlSentJust: 'Sent just now · the link lasts 24 hours',
      nlClicked: "I've clicked the link", nlChangeAddress: 'Change address',
      nlNothing1: 'Nothing arrived? Check spam, or ', nlSendAgain: 'send it again', nlNothing2: '.',
      nlOnList: "You're on the list", nlOnListName: "You're on the list, %s",
      nlDoneLead: "The next issue goes out on the 12th. Here's what you'll get.",
      nlAddress: 'Address', nlTopics: 'Topics', nlFrequency: 'Frequency',
      nlFortLabel: 'Fortnightly — 2 a month', nlMonthLabel: 'Monthly — 1 a month',
      nlEverything: 'Everything', nlTopicRoutes: 'Routes', nlTopicKit: 'New kit', nlTopicWorkshop: 'Workshop',
      nlHaveLook: 'Have a look at the kit', nlChangeWhat: 'Change what I get',

      sePlaceholder: 'Search jerseys, bibs, caps', seClear: 'Clear search',
      seRecent: 'Recent', seClearRecent: 'Clear recent searches',
      sePopular: 'Popular right now', seBrowseInstead: 'Browse instead',
      seRelevance: 'Relevance', sePrice: 'Price', seNewest: 'Newest',
      seNarrowBy: 'Narrow by', seClearFilters: 'Clear filters',
      seResultOne: '1 result', seResultMany: '%s results', seForQuery: '%s for “%s”',
      seNoMatches: 'No matches', seNothingFor: 'Nothing for “%s”',
      seEmptyLead: 'Check the spelling, or try a broader word — “jersey” rather than a product code.',
      seDidYouMean: 'Did you mean',
      seBrowseEverything: 'Browse everything', seAskWorkshop: 'Ask the workshop',
      seCatJersey: 'Jersey', seCatShorts: 'Shorts', seCatOuterwear: 'Outerwear',
      seCatBase: 'Base layer', seCatAccessories: 'Accessories',
      seColours: '%s colours', seColourOne: '1 colour',

      shSeriesKicker: 'Series 01 — out now',
      shHeroTitle: 'Kit built for the long way round',
      shHeroBody: 'Italian fabrics, flat-lock seams, and a chamois rated to eight hours. Made in Europe, repaired for life.',
      shShopRace: 'Shop the race kit', shFindSize: 'Find your size',
      shChamois: 'Chamois rating', shDayReturns: 'Day returns', shYears: 'Years riding',
      shRaceDesc: 'Close cut, low position, nothing spare.',
      shEnduranceDesc: 'Pockets, padding and all-day comfort.',
      shWinterDesc: 'Thermal, water-resistant, wind-proofed.',
      shPieces18: '18 pieces →', shPieces24: '24 pieces →', shPieces11: '11 pieces →',
      shNewSeason: 'New this season', shSeeAll: 'See all 53 →',
      shRepairsKicker: 'Repairs for life',
      shRepairsTitle: 'We would rather mend it than sell you another',
      shRepairsBody: 'Crash damage, a torn pocket, a worn chamois — send it in and our Bristol workshop repairs it. Free for the first two years, at cost after that.',
      shHowRepairs: 'How repairs work',
      shHome: 'Home',
      shPlpLead: 'Cut for a low position and a hard effort. Sized on the race fit — take a size up if you ride between sizes.',
      shProductType: 'Product type',
      shFJerseys: 'Jerseys (7)', shFShorts: 'Shorts & bibs (5)', shFOuterwear: 'Outerwear (4)', shFAccessories: 'Accessories (2)',
      shSize: 'Size', shColour: 'Colour', shAvailability: 'Availability', shInStock: 'In stock only',
      shClearAll: 'Clear all filters',
      shShowingOf: 'Showing %s of %s', shPopularSort: 'Popular',
      legalLabel: 'Legal', onThisPage: 'On this page', lastUpdated: 'Last updated', legalContact: 'Questions about this document?', shShopJerseys: 'Shop the jerseys', shLoadMore: 'Load more', shAllShown: 'All %s shown', shDecreaseQty: 'Decrease quantity', shIncreaseQty: 'Increase quantity', shGender: 'Fit',
      shRaceFitSeries: 'Race fit · Series 01',
      shPdpBody: 'A close-cut racing jersey in an Italian warp-knit that holds its shape wet or dry. Laser-cut sleeve hems, three deep pockets, and a full-length hidden zip.',
      shColourDash: 'Colour — %s', shSizeDash: 'Size — %s', shSizeGuide: 'Size guide',
      shAddToBag: 'Add to bag — £165', shAdded: 'Added to bag', shGoCheckout: 'Go to checkout',
      shFabric: 'Fabric', shFabricVal: '78% recycled polyamide, 22% elastane. Woven in Lombardy.',
      shFit: 'Fit', shFitVal: 'Race — close through chest and sleeve.',
      shWeight: 'Weight', shWeightVal: '142g (size M)',
      shFreeDelivery: 'Free delivery over £120 · 2–4 working days',
      shReturns90: '90-day returns, worn or unworn', shFreeRepairs: 'Free repairs for two years',
      shCompletes: 'Completes the kit',
      shCDeepBlue: 'Deep blue', shCInk: 'Ink', shCChalk: 'Chalk', shCSlate: 'Slate',
      shStep1: '1 Details', shStep2: '2 Delivery', shStep3: '3 Payment', shCheckout: 'Checkout',
      shContact: 'Contact', shContactLead: "We'll send your receipt and tracking here.",
      shDeliveryAddress: 'Delivery address', shAddress: 'Address',
      shTownCity: 'Town or city', shPostcode: 'Postcode',
      shDeliveryMethod: 'Delivery method',
      shStandardRow: 'Standard — 2–4 working days', shFree: 'Free',
      shExpressRow: 'Express — next working day', shCollectRow: 'Collect from the Bristol workshop',
      shPayment: 'Payment', shCardNumber: 'Card number', shExpiry: 'Expiry', shCVC: 'CVC',
      shBillingPost: 'Billing postcode', shBillingSame: 'Billing address is the same as delivery',
      shPay: 'Pay %s', shTakingPayment: 'Taking payment…', shKeepShopping: 'Keep shopping',
      shYourBag: 'Your bag', shItems: '%s items', shRemove: 'Remove',
      shPromo: 'Promotion code', shEnterCode: 'Enter code', shApply: 'Apply',
      shSubtotal: 'Subtotal', shDeliveryDash: 'Delivery — %s', shVat: 'VAT included', shTotal: 'Total',
      shSecure: 'Secure payment · 3-D Secure',
      shOrderConfirmed: 'Order confirmed', shThanks: "Thank you — it's on its way",
      shConfirmLead: "We've emailed a receipt to %s. Tracking follows once the workshop packs your order, usually the same afternoon.",
      shOrderRow: 'Order', shTotalPaid: 'Total paid', shDeliveryRow: 'Delivery', shBackHome: 'Back to home',
      shErrEmail: 'Enter a valid email address so we can send your receipt.',
      shShipStandard: 'Standard', shShipExpress: 'Express', shShipCollect: 'Workshop collection',
      shQty: 'Qty', shSoldOutM: 'Sold out in M',
      regEurope: 'Europe', regAmericas: 'Americas', regMiddleEast: 'Middle East', regAsiaPacific: 'Asia Pacific'

    },
    ar: {
      stDetails: 'البيانات', stDelivery: 'التوصيل', stPayment: 'الدفع',
      nvMen: 'رجال', nvWomen: 'نساء', shShop: 'تسوق',
      catAccessoriesDesc: 'قبعات وجوارب وقفازات ولفحات — التفاصيل الصغيرة.',
      catJerseys: 'القمصان', catBibs: 'البنطلونات والشورتات', catOuterwear: 'الملابس الخارجية',
      catJerseysDesc: 'للسرعة والتحمل والدفء، قَصّة واحدة لكل مهمة.',
      catBibsDesc: 'حشوة لثماني ساعات، وأربعة أطوال للساق.',
      catOuterwearDesc: 'صدريات وسواتر ومعاطف شتوية.',
      xbKicker: 'الاستدامة في بريدج',
      xbTitle: 'لكل قطعة من بريدج حياة ثانية في شِفت.',
      xbBody: 'شِفت هي دارنا الخاصة للإصلاح وإعادة البيع واستعادة المواد. أرسل أي قطعة صنعناها إلى المشغل، أو استبدلها برصيد، أو اشترها مصنّفة ومضمونة.',
      xbP1: 'إصلاح مدى الحياة لكل ما باعته بريدج.',
      xbP2: 'رصيد استبدال يُصرف هنا أيضاً.',
      xbP3: '٤١٢ قطعة مستعملة معتمدة متوفرة الآن.',
      xbCta: 'زيارة شِفت',
      xsKicker: 'الدار الأم',
      xsTitle: 'كل ما نُبقيه حياً صنعته بريدج.',
      xsBody: 'تُحدّد بريدج كل قطعة قماش لتكون قابلة للإصلاح قبل أن تُحدّدها لتكون خفيفة. لذلك يعود قميص عمره عشر سنوات إلى المشغل ويخرج منه صالحاً للركوب.',
      xsP1: 'مصنوعة في أوروبا، ومبنية لتُفتح وتُخاط.',
      xsP2: 'مجموعتان في العام، لا أربع.',
      xsP3: 'إصلاح مدى الحياة، من المالك الأول وما بعده.',
      xsCta: 'زيارة بريدج',
      sfPreOwned: 'المستعمل', sfRepair: 'الإصلاح', sfTradeIn: 'الاستبدال', sfMaterials: 'المواد', sfFieldNotes: 'ملاحظات ميدانية',
      sfAnnounce: 'حياة ثانية رقم ٤١٢٠٨ سُجّلت اليوم',
      sfAnnounceShort: 'إصلاح مدى الحياة · استبدل أي قطعة من بريدج',
      sfFooterBlurb: 'إصلاح وإعادة بيع واستعادة لملابس الدراجات من بريدج. شركة تابعة لبريدج، تُدار كدار مستقلة.',
      sfFooterBlurbShort: 'إصلاح وإعادة بيع واستعادة لملابس الدراجات من بريدج.',
      sfCopyright: '© ٢٠٢٦ بريدج سايكلينغ · شِفت',
      sfCircularity: 'الاستدامة', sfHouse: 'شِفت',
      sfShopPreOwned: 'تسوّق المستعمل', sfBookRepair: 'احجز إصلاحاً', sfTradeKit: 'استبدل ملابسك', sfMaterialsMethod: 'منهج المواد',
      sfTheLedger: 'السجل', sfBenchHours: 'المشاغل والمواعيد', sfGrading: 'معيار التصنيف',
      sfYourRecord: 'سجلّك', sfDropNotices: 'إشعارات الوصول',
      sfPlpTitle: 'حياة ثانية، مصنّفة ومضمونة.',
      sfPlpLead: 'كل قطعة هنا استبدلها راكب، وأُصلحت في المشغل، وصنّفها من صنعوها. ضمان سنتين، كالجديد.',
      sfCertified: 'مستعمل معتمد',
      sfAllGrades: 'كل التصنيفات', sfGradeA: 'تصنيف أ', sfGradeB: 'تصنيف ب', sfGradeC: 'تصنيف ج',
      sfEverything: 'الكل', sfCatJerseys: 'قمصان', sfCatShorts: 'شورتات', sfCatOuterwear: 'ملابس خارجية', sfCatKit: 'عتاد',
      sfPieces: '%s من %s قطعة', sfSecondLife: 'حياة ثانية', sfRecord: 'السجل',
      sfCondition: 'الحالة', sfGuarantee: 'ضمان سنتين · إرجاع مجاني ٣٠ يوماً · إصلاح مدى الحياة، لأي مالك لاحق.',
      sfNothingTitle: 'لا شيء في هذا التصنيف حالياً.',
      sfNothingBody: 'تصل قطع جديدة كل أسبوعين. المشتركون يرونها قبل ١٢ ساعة.',
      sfGetDrops: 'إشعارات الوصول',
      sfSortNewest: 'الأحدث', sfSortPrice: 'السعر', sfSortSaving: 'أكبر توفير',
      sfSizeFit: 'المقاس والقَصّة', sfOffNew: 'خصم %s%',
      race: 'السرعة', endurance: 'التحمل', winter: 'الشتاء', accessories: 'الملحقات', journal: 'المجلة',
      search: 'بحث', searchPlaceholder: 'قميص، بنطال، قبعة', signIn: 'تسجيل الدخول', bag: 'الحقيبة',
      ordersRepairs: 'الطلبات والإصلاحات', closeMenu: 'إغلاق القائمة', menu: 'القائمة',
      announce: 'إرجاع مجاني لمدة ٩٠ يوماً · إصلاح مدى الحياة', announceShort: 'إرجاع مجاني لمدة ٩٠ يوماً',
      shipsFrom: 'يُشحن من بريستول',
      shop: 'المتجر', help: 'المساعدة', studio: 'الاستوديو',
      giftCards: 'بطاقات الهدايا', sizeGuide: 'دليل المقاسات', delivery: 'التوصيل', returns: 'الإرجاع',
      repairs: 'الإصلاحات', contact: 'اتصل بنا', about: 'من نحن', workshop: 'الورشة',
      sustainability: 'الاستدامة', stockists: 'نقاط البيع',
      email: 'البريد الإلكتروني', signUp: 'اشترك', emailPlaceholder: 'you@example.com',
      footerBlurb: 'ملابس طرق مصنوعة في أوروبا وتُصلَح مدى الحياة. رسالة واحدة كل شهر — قطع جديدة وتقارير رحلات، لا أكثر.',
      footerBlurbShort: 'ملابس طرق مصنوعة في أوروبا وتُصلَح مدى الحياة.',
      copyright: '© ٢٠٢٦ بريدج سايكلينغ', terms: 'الشروط', privacy: 'الخصوصية', cookies: 'الكوكيز',
      localeTitle: 'البلد واللغة', localeLead: 'تتغير الأسعار وخيارات التوصيل والضرائب حسب بلدك.',
      country: 'البلد / المنطقة', language: 'اللغة', apply: 'تطبيق', cancel: 'إلغاء',
      shippingTo: 'الشحن إلى', close: 'إغلاق',
      accountWord: 'الحساب', joinWord: 'انضم', theJournal: 'المجلة',
      restartFlow: 'إعادة البدء', verifyStep: 'التحقق',
      emailAddress: 'البريد الإلكتروني', password: 'كلمة المرور', passMin: '٨ أحرف على الأقل',
      verificationCode: 'رمز التحقق', resendCode: 'إعادة إرسال الرمز',
      codeLead: 'ستة أرقام أُرسلت إلى %s، وتصلح لعشر دقائق.',
      continueApple: 'المتابعة عبر Apple',
      errEmail: 'أدخل بريداً إلكترونياً صحيحاً.',
      errPassShort: 'كلمة المرور ٨ أحرف على الأقل.',
      errCode: 'الرمز مكوّن من ستة أرقام.',
      checking: 'جارٍ التحقق…', verifying: 'جارٍ التأكيد…', sending: 'جارٍ الإرسال…', creating: 'جارٍ الإنشاء…',
      confirming: 'جارٍ التأكيد…', saving: 'جارٍ الحفظ…', loading: 'جارٍ التحميل…', searching: 'جارٍ البحث…',
      firstName: 'الاسم الأول', lastName: 'اسم العائلة', skipForNow: 'تخطَّ الآن',

      lgPlateHead: 'ملابسك، طلباتك، إصلاحاتك.',
      lgPlateBody: 'تابع طلباً، احجز إصلاحاً، أو أعد شراء المقاس الذي يناسبك.',
      lgCredentials: 'بيانات الدخول',
      lgWelcome: 'أهلاً بعودتك',
      lgLead: 'استخدم البريد المسجَّل في حسابك على بريدج.',
      lgForgot: 'نسيتها؟', lgKeepSigned: 'أبقِني مسجَّلاً على هذا الجهاز',
      lgNoAccount: 'لا حساب لديك؟', lgCreateOne: 'أنشئ حساباً',
      lgCreateTail: '— دقيقة واحدة، ويحفظ مقاساتك.',
      lgTwoFactor: 'التحقق بخطوتين', lgEnterCode: 'أدخل الرمز',
      lgVerifyContinue: 'تحقّق وتابع', lgBackToSignIn: '→ العودة لتسجيل الدخول',
      lgRecovery: 'استعادة', lgResetPass: 'إعادة تعيين كلمة المرور',
      lgResetLead: 'سنرسل رابطاً لاستخدام واحد، ينتهي بعد ساعة.',
      lgSendReset: 'أرسل رابط الاستعادة',
      lgRecoverySent: 'تم إرسال الاستعادة', lgCheckInbox: 'تحقّق من بريدك',
      lgSentLead: 'رابط إعادة التعيين في طريقه إلى %s. إن لم يصل خلال خمس دقائق، راجع العنوان وحاول مرة أخرى.',
      lgSentTo: 'أُرسل إلى', lgExpires: 'ينتهي', lgOneHour: 'بعد ساعة من الآن',
      lgBackSignIn: 'العودة لتسجيل الدخول', lgUseAnother: 'استخدم عنواناً آخر',
      lgSignedIn: 'تم تسجيل الدخول',
      lgSignedInLead: 'مسجَّل الدخول بـ %s — طلبان مفتوحان وإصلاح واحد في الورشة.',
      lgOrder: 'الطلب', lgPlaced: 'التاريخ', lgStatus: 'الحالة',
      lgPacked: 'مُعدّ للشحن', lgInRepair: 'قيد الإصلاح', lgDelivered: 'تم التسليم',
      lgContinueShopping: 'متابعة التسوق',

      acPlateHead: 'مقاس واحد. إصلاح مدى الحياة.',
      acBenefit1: 'مقاساتك محفوظة، فإعادة الشراء بلمسة واحدة.',
      acBenefit2: 'إصلاح مجاني لكل قطعة، ما دامت لديك.',
      acBenefit3: 'وصول مبكر للقطع الجديدة، قبل الإصدار بأسبوع.',
      acDetails: 'البيانات', acYourRiding: 'ركوبك', acDoneStep: 'تم',
      acKicker: 'إنشاء حساب', acTitle: 'انضم إلى بريدج',
      acLead: 'حقلان وكلمة مرور. أسئلة الركوب تأتي بعدها، ويمكنك تخطّيها.',
      acJournalOptIn: 'أرسلوا لي المجلة — رسالة كل أسبوعين، قطع جديدة وملاحظات طرق.',
      acCreateBtn: 'أنشئ حسابي',
      acTerms1: 'إنشاء الحساب يعني قبول ', acTermsLink1: 'الشروط', acTermsAnd: ' و',
      acTermsLink2: 'إشعار الخصوصية', acTerms2: '. لا نبيع بياناتك أبداً.',
      acHaveAccount: 'لديك حساب بالفعل؟', acSignInInstead: 'سجّل الدخول',
      acConfirmEmail: 'أكّد بريدك', acEnterCode: 'أدخل الرمز',
      acConfirmContinue: 'أكّد وتابع', acChangeEmail: '→ تغيير البريد الإلكتروني',
      acOptional: 'اختياري',
      acRidingLead: 'لنعرض المقاس المناسب والموسم المناسب أولاً. غيّرها متى شئت.',
      acUsualSize: 'مقاس القميص المعتاد', acOpenSizeGuide: 'افتح دليل المقاسات',
      acFitPrefer: 'القَصّة التي تفضّلها',
      acFitRaceRow: 'سرعة — ضيّق عند الصدر والكم',
      acFitClassicRow: 'كلاسيك — أوسع قليلاً، مريح طول اليوم',
      acWhatRide: 'ما الذي تركبه — اختر ما ينطبق',
      acRoad: 'طرق', acGravel: 'حصى', acCommuting: 'تنقل يومي', acTouring: 'رحلات',
      acSaveFinish: 'احفظ وأنهِ',
      acCreated: 'تم إنشاء الحساب', acWelcomeName: 'أهلاً، %s', acWelcomeBridge: 'أهلاً بك في بريدج',
      acDoneLead: 'أنت مسجَّل الدخول بـ %s. هذا ما حفظناه.',
      acName: 'الاسم', acEmailRow: 'البريد', acSizeFit: 'المقاس والقَصّة', acRiding: 'الركوب', acJournal: 'المجلة',
      acNotGiven: 'غير مُدخل', acNotSetAny: 'غير محدّد — أضفه متى شئت', acNotSetYet: 'غير محدّد بعد',
      acRaceFit: 'قَصّة سرعة', acClassicFit: 'قَصّة كلاسيك',
      acSubscribedFort: 'مشترك — كل أسبوعين', acNotSubscribed: 'غير مشترك',
      acStartShopping: 'ابدأ التسوق', acEditRiding: 'تعديل بيانات ركوبي',
      acWeak: 'ضعيفة', acFair: 'مقبولة', acGood: 'جيدة', acStrong: 'قوية',
      acErrFirst: 'أدخل اسمك الأول.',

      nlPlateHead: 'رسالتان كل شهر. طرق، ملابس، إصلاحات.',
      nlAMonth: 'في الشهر', nlReaders: 'قارئ', nlAds: 'إعلانات',
      nlSignUpStep: 'الاشتراك', nlConfirmStep: 'التأكيد', nlSubscribedStep: 'تم الاشتراك',
      nlFreeKicker: 'مجاناً — يمكنك الإلغاء في أي وقت', nlTitle: 'اقرأ المجلة',
      nlLead: 'أين ركبنا، وما غيّرناه في الملابس، وما عاد إلينا للإصلاح. بلا أكواد خصم.',
      nlFirstOptional: 'الاسم الأول — اختياري',
      nlWhatSend: 'ماذا تريد أن نرسل لك؟',
      nlRoutes: 'الطرق وتقارير الرحلات', nlNewKit: 'قطع جديدة، قبل الإصدار بأسبوع',
      nlWorkshop: 'ملاحظات الورشة وأدلة الإصلاح',
      nlHowOften: 'كم مرة', nlFortnightly: 'كل أسبوعين', nlMonthly: 'شهرياً',
      nlSignMeUp: 'اشتركوني', nlSigningUp: 'جارٍ الاشتراك…',
      nlPrivacy1: 'سنرسل رسالة واحدة للتأكيد. اقرأ ', nlPrivacyLink: 'إشعار الخصوصية',
      nlPrivacy2: ' — لا نبيع عنوانك أبداً.',
      nlOneStep: 'خطوة واحدة متبقية', nlCheckInbox: 'تحقّق من بريدك',
      nlConfirmLead: 'أرسلنا رابط تأكيد إلى %s. اضغط عليه لتصبح على القائمة — يمنع ذلك أن يشترك أحد باسمك.',
      nlSentJust: 'أُرسل الآن · الرابط يصلح ٢٤ ساعة',
      nlClicked: 'ضغطت على الرابط', nlChangeAddress: 'تغيير العنوان',
      nlNothing1: 'لم يصل شيء؟ تحقّق من البريد المزعج، أو ', nlSendAgain: 'أعد الإرسال', nlNothing2: '.',
      nlOnList: 'أنت على القائمة', nlOnListName: 'أنت على القائمة، %s',
      nlDoneLead: 'العدد القادم يصدر في الثاني عشر. هذا ما ستحصل عليه.',
      nlAddress: 'العنوان', nlTopics: 'المواضيع', nlFrequency: 'التكرار',
      nlFortLabel: 'كل أسبوعين — رسالتان شهرياً', nlMonthLabel: 'شهرياً — رسالة واحدة',
      nlEverything: 'كل شيء', nlTopicRoutes: 'الطرق', nlTopicKit: 'قطع جديدة', nlTopicWorkshop: 'الورشة',
      nlHaveLook: 'ألقِ نظرة على الملابس', nlChangeWhat: 'تغيير ما أستلمه',

      sePlaceholder: 'ابحث في القمصان والبناطيل والقبعات', seClear: 'مسح البحث',
      seRecent: 'الأخيرة', seClearRecent: 'مسح عمليات البحث الأخيرة',
      sePopular: 'الأكثر رواجاً الآن', seBrowseInstead: 'أو تصفَّح',
      seRelevance: 'الأنسب', sePrice: 'السعر', seNewest: 'الأحدث',
      seNarrowBy: 'تصفية حسب', seClearFilters: 'مسح المرشّحات',
      seResultOne: 'نتيجة واحدة', seResultMany: '%s نتيجة', seForQuery: '%s لـ «%s»',
      seNoMatches: 'لا نتائج', seNothingFor: 'لا شيء لـ «%s»',
      seEmptyLead: 'راجع الإملاء، أو جرّب كلمة أعم — «قميص» بدلاً من رمز المنتج.',
      seDidYouMean: 'هل تعني',
      seBrowseEverything: 'تصفّح كل شيء', seAskWorkshop: 'اسأل الورشة',
      seCatJersey: 'قميص', seCatShorts: 'بنطال', seCatOuterwear: 'ملابس خارجية',
      seCatBase: 'طبقة أساسية', seCatAccessories: 'ملحقات',
      seColours: '%s ألوان', seColourOne: 'لون واحد',

      shSeriesKicker: 'المجموعة ٠١ — متوفرة الآن',
      shHeroTitle: 'ملابس مصنوعة للطريق الطويل',
      shHeroBody: 'أقمشة إيطالية، وخياطة مسطّحة، وحشوة مصنّفة لثماني ساعات. صُنعت في أوروبا، وتُصلَح مدى الحياة.',
      shShopRace: 'تسوّق ملابس السرعة', shFindSize: 'اعرف مقاسك',
      shChamois: 'تصنيف الحشوة', shDayReturns: 'يوماً للإرجاع', shYears: 'عاماً من الركوب',
      shRaceDesc: 'قَصّة ضيّقة، وضعية منخفضة، بلا زيادة.',
      shEnduranceDesc: 'جيوب وحشوة وراحة طول اليوم.',
      shWinterDesc: 'حراري، مقاوم للماء، صادّ للريح.',
      shPieces18: '١٨ قطعة ←', shPieces24: '٢٤ قطعة ←', shPieces11: '١١ قطعة ←',
      shNewSeason: 'جديد هذا الموسم', shSeeAll: 'شاهد الـ ٥٣ ←',
      shRepairsKicker: 'إصلاح مدى الحياة',
      shRepairsTitle: 'نفضّل إصلاحها على بيعك قطعة أخرى',
      shRepairsBody: 'تلف بعد سقوط، جيب ممزّق، حشوة بالية — أرسلها وتُصلحها ورشتنا في بريستول. مجاناً في العامين الأولين، وبالتكلفة بعدها.',
      shHowRepairs: 'كيف يعمل الإصلاح',
      shHome: 'الرئيسية',
      shPlpLead: 'مقصوصة لوضعية منخفضة ومجهود عالٍ. المقاسات على قَصّة السرعة — اختر مقاساً أكبر إن كنت بين مقاسين.',
      shProductType: 'نوع المنتج',
      shFJerseys: 'قمصان (٧)', shFShorts: 'بناطيل (٥)', shFOuterwear: 'ملابس خارجية (٤)', shFAccessories: 'ملحقات (٢)',
      shSize: 'المقاس', shColour: 'اللون', shAvailability: 'التوفر', shInStock: 'المتوفر فقط',
      shClearAll: 'مسح كل المرشّحات',
      shShowingOf: 'يُعرض %s من %s', shPopularSort: 'الأكثر رواجاً',
      legalLabel: 'قانوني', onThisPage: 'في هذه الصفحة', lastUpdated: 'آخر تحديث', legalContact: 'أسئلة حول هذا المستند؟', shShopJerseys: 'تسوّق القمصان', shLoadMore: 'المزيد', shAllShown: 'عُرضت الـ %s كلها', shDecreaseQty: 'تقليل الكمية', shIncreaseQty: 'زيادة الكمية', shGender: 'القَصّة',
      shRaceFitSeries: 'قَصّة سرعة · المجموعة ٠١',
      shPdpBody: 'قميص سرعة بقَصّة ضيّقة من نسيج إيطالي يحافظ على شكله جافاً أو مبلولاً. أطراف أكمام مقطوعة بالليزر، وثلاثة جيوب عميقة، وسحّاب مخفي بطول القميص.',
      shColourDash: 'اللون — %s', shSizeDash: 'المقاس — %s', shSizeGuide: 'دليل المقاسات',
      shAddToBag: 'أضف إلى الحقيبة — ١٦٥£', shAdded: 'أُضيف إلى الحقيبة', shGoCheckout: 'إلى الدفع',
      shFabric: 'القماش', shFabricVal: '٧٨٪ بولي أميد معاد تدويره، ٢٢٪ إيلاستين. مُنسَّج في لومباردي.',
      shFit: 'القَصّة', shFitVal: 'سرعة — ضيّق عند الصدر والكم.',
      shWeight: 'الوزن', shWeightVal: '١٤٢ غ (مقاس M)',
      shFreeDelivery: 'توصيل مجاني فوق ١٢٠£ · ٢–٤ أيام عمل',
      shReturns90: 'إرجاع خلال ٩٠ يوماً، مستخدماً أو جديداً', shFreeRepairs: 'إصلاح مجاني لعامين',
      shCompletes: 'يكمل الطقم',
      shCDeepBlue: 'أزرق غامق', shCInk: 'حِبري', shCChalk: 'طباشيري', shCSlate: 'رمادي داكن',
      shStep1: '١ البيانات', shStep2: '٢ التوصيل', shStep3: '٣ الدفع', shCheckout: 'الدفع',
      shContact: 'التواصل', shContactLead: 'سنرسل الفاتورة والتتبع إلى هنا.',
      shDeliveryAddress: 'عنوان التوصيل', shAddress: 'العنوان',
      shTownCity: 'المدينة', shPostcode: 'الرمز البريدي',
      shDeliveryMethod: 'طريقة التوصيل',
      shStandardRow: 'عادي — ٢–٤ أيام عمل', shFree: 'مجاناً',
      shExpressRow: 'سريع — يوم العمل التالي', shCollectRow: 'الاستلام من ورشة بريستول',
      shPayment: 'الدفع', shCardNumber: 'رقم البطاقة', shExpiry: 'الانتهاء', shCVC: 'الرمز السري',
      shBillingPost: 'الرمز البريدي للفاتورة', shBillingSame: 'عنوان الفاتورة هو نفسه عنوان التوصيل',
      shPay: 'ادفع %s', shTakingPayment: 'جارٍ الدفع…', shKeepShopping: 'متابعة التسوق',
      shYourBag: 'حقيبتك', shItems: '%s قطعة', shRemove: 'إزالة',
      shPromo: 'كود الخصم', shEnterCode: 'أدخل الكود', shApply: 'تطبيق',
      shSubtotal: 'المجموع', shDeliveryDash: 'التوصيل — %s', shVat: 'الضريبة مشمولة', shTotal: 'الإجمالي',
      shSecure: 'دفع آمن · 3-D Secure',
      shOrderConfirmed: 'تم تأكيد الطلب', shThanks: 'شكراً — طلبك في الطريق',
      shConfirmLead: 'أرسلنا الفاتورة إلى %s. يصل التتبع بعد أن تجهّز الورشة طلبك، عادة في العصر نفسه.',
      shOrderRow: 'الطلب', shTotalPaid: 'المدفوع', shDeliveryRow: 'التوصيل', shBackHome: 'العودة للرئيسية',
      shErrEmail: 'أدخل بريداً إلكترونياً صحيحاً لنرسل الفاتورة.',
      shShipStandard: 'عادي', shShipExpress: 'سريع', shShipCollect: 'استلام من الورشة',
      shQty: 'الكمية', shSoldOutM: 'غير متوفر بمقاس M',
      regEurope: 'أوروبا', regAmericas: 'الأمريكتان', regMiddleEast: 'الشرق الأوسط', regAsiaPacific: 'آسيا والمحيط الهادئ'

    }
  };

  var KEY = 'bridge.locale.v1';
  var subs = [];
  var state = read();

  function read() {
    try {
      var raw = JSON.parse(localStorage.getItem(KEY));
      if (raw && findCountry(raw.country) && findLanguage(raw.language)) {
        return { country: raw.country, language: raw.language };
      }
    } catch (e) {}
    return { country: 'GB', language: 'en' };
  }
  function findCountry(code) { return COUNTRIES.filter(function (c) { return c.code === code; })[0]; }
  function findLanguage(code) { return LANGUAGES.filter(function (l) { return l.code === code; })[0]; }

  function language() { return findLanguage(state.language) || LANGUAGES[0]; }
  function country() { return findCountry(state.country) || COUNTRIES[0]; }
  function dir() { return language().dir; }

  function t(key) {
    var pack = STRINGS[state.language] || STRINGS.en;
    return pack[key] != null ? pack[key] : (STRINGS.en[key] != null ? STRINGS.en[key] : key);
  }
  function strings() {
    var pack = STRINGS[state.language] || {};
    var out = {};
    for (var k in STRINGS.en) out[k] = pack[k] != null ? pack[k] : STRINGS.en[k];
    return out;
  }
  function fmt(s) {
    var args = Array.prototype.slice.call(arguments, 1);
    var i = 0;
    return String(s == null ? '' : s).replace(/%s/g, function () { return args[i++]; });
  }
  var FLAG_FONT = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Twemoji Mozilla",sans-serif';
  function flag(code) {
    if (!code || code.length !== 2) return '';
    return String.fromCodePoint(
      0x1f1e6 + code.toUpperCase().charCodeAt(0) - 65,
      0x1f1e6 + code.toUpperCase().charCodeAt(1) - 65
    );
  }
  function countryName(c) { return state.language === 'ar' && c.nameAr ? c.nameAr : c.name; }

  function paint() {
    try {
      var el = document.documentElement;
      el.setAttribute('dir', dir());
      el.setAttribute('lang', state.language);
      if (document.body) document.body.setAttribute('dir', dir());
    } catch (e) {}
  }

  function set(next) {
    var c = next && next.country ? next.country : state.country;
    var l = next && next.language ? next.language : state.language;
    if (!findCountry(c)) c = state.country;
    if (!findLanguage(l)) l = state.language;
    if (c === state.country && l === state.language) return;
    state = { country: c, language: l };
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
    paint();
    subs.slice().forEach(function (fn) { try { fn(get()); } catch (e) {} });
  }

  function get() {
    return {
      countryCode: state.country, languageCode: state.language,
      country: country(), language: language(), dir: dir(), flag: flag(state.country),
      isRtl: dir() === 'rtl', t: strings()
    };
  }

  function subscribe(fn) {
    subs.push(fn);
    return function () { subs = subs.filter(function (f) { return f !== fn; }); };
  }

  paint();
  window.BridgeLocale = {
    COUNTRIES: COUNTRIES, LANGUAGES: LANGUAGES,
    get: get, set: set, subscribe: subscribe, t: t, strings: strings,
    countryName: countryName, dir: dir, fmt: fmt, flag: flag, FLAG_FONT: FLAG_FONT
  };
})();
