/**
 * News, Articles, and Historical Press Media for AMWSI
 * 
 * Compliance Rules:
 * - Articles from 2021 are marked as historical opinion pieces.
 * - Danish Anwer's official affiliation is stated with appropriate pending verification note.
 * - Politically partisan content is kept strictly unpublished (published: false) pending client & legal review.
 * - Multilingual support for English, Hindi, and Urdu (RTL layout ready).
 */

import { CONTENT_STATUS } from './organisation';

export const articles = [
  {
    id: "the-way-forward-in-covid-19-era",
    slug: "the-way-forward-in-covid-19-era",
    title: "The Way Forward in COVID-19 Era",
    category: "Articles",
    language: "en",
    isRtl: false,
    published: true,
    featured: true,
    status: CONTENT_STATUS.RESEARCH,
    publication: "Best Popular News",
    publishedDate: "2021-05-29",
    displayDate: "29 May 2021",
    author: {
      name: "Danish Anwer",
      note: "Historical author attribution; official spelling & AMWSI organisational affiliation pending final confirmation."
    },
    historicalNotice: "Historical opinion piece published in May 2021 during the second wave of COVID-19. Presented for archival reading and historical context; recommendations do not constitute current formal AMWSI policy without administrative ratification.",
    summary: "An analytical examination of three paramount national priorities exposed by the pandemic: urgent overhaul of rural healthcare infrastructure, stabilization of agricultural livelihoods, and addressing catastrophic learning losses in primary and secondary education.",
    image: "/images/cgc-educational-award.jpg",
    readTime: "6 min read",
    toc: [
      { id: "context", title: "The Unprecedented Crisis" },
      { id: "priority-1", title: "1. Healthcare Infrastructure & Public Health" },
      { id: "priority-2", title: "2. Agriculture & Rural Economic Support" },
      { id: "priority-3", title: "3. Education & Learning Continuity" },
      { id: "conclusion", title: "Strategic Roadmap Ahead" }
    ],
    content: `
      <div class="space-y-6 text-brand-darkText/90 leading-relaxed font-normal">
        <p class="text-lg leading-relaxed font-serif text-brand-darkText">
          The second wave of the COVID-19 pandemic in mid-2021 laid bare the profound structural fragilities within our socio-economic and public health systems. Beyond the immediate statistics, it necessitated a reflective assessment of national priorities. As India faced unprecedented humanitarian challenges, three foundational pillars emerged as urgent imperatives for recovery and resilient nation-building.
        </p>

        <h3 id="context" class="text-2xl font-bold font-heading text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">The Unprecedented Crisis</h3>
        <p>
          The pandemic disrupted lives across every demographic boundary, but its brunt was borne disproportionately by vulnerable households in semi-urban and rural areas. Daily wage earners, subsistence farmers, and children enrolled in under-resourced schools faced cumulative shocks spanning health emergencies, loss of livelihood, and total educational disruption.
        </p>

        <h3 id="priority-1" class="text-2xl font-bold font-heading text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">1. Healthcare Infrastructure and Public Health</h3>
        <p>
          The most immediate lesson of the crisis was the critical need to decentralize medical capacity. Primary Health Centres (PHCs) and Community Health Centres (CHCs) in rural hinterlands require robust emergency infrastructure, steady supplies of oxygen, essential drugs, and adequately trained medical personnel. Public health cannot remain an afterthought; it must be treated as the foremost national investment.
        </p>
        <p>
          Simultaneously, public health awareness, counter-misinformation drives, and community-led health communication are essential to ensure that timely medical intervention replaces panic and superstition during infectious outbreaks.
        </p>

        <h3 id="priority-2" class="text-2xl font-bold font-heading text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">2. Agriculture and Rural Economic Support</h3>
        <p>
          Throughout the stringent lockdowns, the agricultural sector served as the primary economic stabilizer for millions of reverse-migrating workers. Strengthening rural supply chains, ensuring fair remunerative prices, and facilitating localized agro-processing units are vital to preventing rural insolvency.
        </p>
        <p>
          Sustainable rural economies demand targeted micro-credit facilities, direct farmer-to-market linkage mechanisms, and decentralized storage facilities to insulate rural families against economic shocks.
        </p>

        <h3 id="priority-3" class="text-2xl font-bold font-heading text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">3. Education and Learning Development</h3>
        <p>
          Perhaps the most enduring, quiet tragedy of the pandemic was the severe digital divide in schooling. While urban pupils transitioned with relative ease to digital learning, millions of rural and economically disadvantaged children experienced an absolute hiatus in formal schooling.
        </p>
        <p>
          The solution requires urgent remedial education programs, community study spaces, and targeted literacy interventions to prevent irreversible generational learning loss. Bridging the digital divide with affordable learning tools and community-based volunteer mentors is indispensable.
        </p>

        <h3 id="conclusion" class="text-2xl font-bold font-heading text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">Strategic Roadmap Ahead</h3>
        <p>
          Moving forward requires a collective, non-partisan synergy between government apparatus, civil society organizations, philanthropic institutions, and community leadership. Rebuilding our collective fabric depends on whether we treat healthcare, agriculture, and education not as disparate sectors, but as indivisible human rights essential for national progress.
        </p>
      </div>
    `
  },
  {
    id: "alwatan-times-urdu-article-2021",
    slug: "alwatan-times-urdu-article-2021",
    title: "کورونا بحران اور پس ماندہ طبقات: صحت اور تعلیم کے بنیادی تقاضے",
    category: "Articles",
    language: "ur",
    isRtl: true,
    published: true,
    featured: false,
    status: CONTENT_STATUS.RESEARCH,
    publication: "Alwatan Times (الوطن ٹائمز)",
    publishedDate: "2021-05-11",
    displayDate: "11 May 2021 (۱۱ مئی ۲۰۲۱)",
    author: {
      name: "دانش انور (Danish Anwer)",
      note: "تاریخی اشاعت۔ تنظیمی منصب کی تصدیق باقی ہے۔"
    },
    historicalNotice: "یہ مضمون ۱۱ مئی ۲۰۲۱ کو الوطن ٹائمز میں شائع ہوا تھا، جو تاریخی پس منظر کے طور پر پیش کیا جا رہا ہے۔",
    summary: "کورونا وائرس کی تباہ کاریوں کے تناظر میں پس ماندہ علاقوں میں صحت کی بنیادی سہولیات، دیہی طبقات کی داد رسی اور بچوں کے تعلیمی تسلسل کو برقرار رکھنے کے عملی نکات پر جامع تجزیہ۔",
    image: "/images/press-clipping-amu-kapil-sibal.jpg",
    readTime: "5 منٹ مطالعہ",
    toc: [
      { id: "ur-intro", title: "موجودہ بحران اور زمینی حقائق" },
      { id: "ur-health", title: "صحت کا نظام اور دیہی علاقے" },
      { id: "ur-edu", title: "تعلیم کا تحفظ اور آئندہ لائحہ عمل" }
    ],
    content: `
      <div class="space-y-6 text-brand-darkText/90 leading-relaxed font-urdu text-xl text-right" dir="rtl">
        <p class="leading-loose">
          عالمی وبا کورونا نے پوری انسانیت کو جھنجھوڑ کر رکھ دیا ہے۔ ہندوستان میں دوسری لہر کے دوران جو المناک مناظر سامنے آئے، انہوں نے ہمارے سماجی اور طبی نظام کی کمزوریوں کو عیاں کر دیا۔ خصوصاً پس ماندہ اور دیہی طبقات کے لیے یہ وقت انتہائی صبر آزما اور بیداری کا متقاضی ہے۔
        </p>

        <h3 id="ur-intro" class="text-2xl font-bold text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">موجودہ بحران اور زمینی حقائق</h3>
        <p class="leading-loose">
          دیہی ہندوستان میں جہاں بنیادی صحت مراکز پر وسائل کی قلت ہے، وہاں عوام کو بروقت معلومات اور طبی امداد پہنچانا اولین ترجیح ہونی چاہیے۔ ضرورت اس بات کی ہے کہ سماجی ادارے اور باشعور نوجوان آگے آئیں اور عوام کو وبا سے بچاؤ، ماسک کے استعمال، اور حفاظتی ٹیکہ کاری کی ترغیب دیں۔
        </p>

        <h3 id="ur-health" class="text-2xl font-bold text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">صحت کا نظام اور دیہی علاقے</h3>
        <p class="leading-loose">
          علاج معالجے کے ساتھ ساتھ غربت زدہ خاندانوں کی معاشی مدد بھی اشد ضروری ہے۔ لاک ڈاؤن اور روزگار کے بحران نے روزانہ اجرت کمانے والوں کو سخت متاثر کیا ہے۔ ایسے میں باہمی تعاون، امداد باہمی اور انسانی ہمدردی کا مظاہرہ کرنا ہمارا اخلاقی و سماجی فریضہ ہے۔
        </p>

        <h3 id="ur-edu" class="text-2xl font-bold text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">تعلیم کا تحفظ اور آئندہ لائحہ عمل</h3>
        <p class="leading-loose">
          صحت کے ساتھ ساتھ ہمارے نونہالوں کی تعلیم کا نقصان بھی ایک خاموش المیہ ہے۔ اسکولوں کی بندش کی وجہ سے غریب گھرانوں کے بچے تعلیم سے دور ہو رہے ہیں۔ سماجی تنظیموں کو چاہیے کہ وہ مقامی سطح پر چھوٹے تعلیمی حلقے قائم کریں تاکہ بچوں کے تعلیمی تسلسل کو برقرار رکھا جا سکے۔
        </p>
      </div>
    `
  },
  {
    id: "kishanganj-bihar-hindi-covid-article",
    slug: "kishanganj-bihar-hindi-covid-article",
    title: "कोरोना संकट: सीमांचल और ग्रामीण इलाकों में स्वास्थ्य जागरूकता व शिक्षा की चुनौतियां",
    category: "Press Coverage",
    language: "hi",
    isRtl: false,
    published: true,
    featured: false,
    status: CONTENT_STATUS.RESEARCH,
    publication: "Regional Bihar Press (क्षेत्रीय समाचार पत्र)",
    publishedDate: "2021-05-11",
    displayDate: "11 May 2021 (11 मई 2021)",
    author: {
      name: "दानिश अनवर (Danish Anwer)",
      note: "ऐतिहासिक स्तंभ; आधिकारिक पदनाम व संगठनात्मक दायित्व सत्यापन के अधीन है।"
    },
    historicalNotice: "11 मई 2021 को प्रकाशित यह ऐतिहासिक आलेख महामारी काल के ग्रामीण परिदृश्य का विश्लेषण प्रस्तुत करता है।",
    summary: "कोरोना की दूसरी लहर के दौरान सीमांचल और ग्रामीण बिहार में स्वास्थ्य केंद्रों की स्थिति, प्राथमिक उपचार की आवश्यकता तथा छात्रों की पढ़ाई में आई रुकावटों पर एक तथ्यात्मक अवलोकन।",
    image: "/images/community-night-outreach.jpg",
    readTime: "5 मिनट पठन",
    toc: [
      { id: "hi-intro", title: "ग्रामीण क्षेत्रों में स्वास्थ्य की स्थिति" },
      { id: "hi-community", title: "सामुदायिक सहयोग और जागरूकता" },
      { id: "hi-education", title: "शिक्षा के नुकसान की भरपाई" }
    ],
    content: `
      <div class="space-y-6 text-brand-darkText/90 leading-relaxed font-devanagari text-lg">
        <p class="leading-relaxed">
          मई 2021 में कोरोना की दूसरी लहर ने पूरे देश को हिलाकर रख दिया। शहरों के साथ-साथ इसका असर बिहार और सीमांचल के दूरदराज ग्रामीण इलाकों में भी बेहद गंभीर रूप से देखा गया। इस आपदा ने साबित कर दिया कि जमीनी स्तर पर स्वास्थ्य ढांचे को मजबूत करना कितना आवश्यक है।
        </p>

        <h3 id="hi-intro" class="text-2xl font-bold font-heading text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">ग्रामीण क्षेत्रों में स्वास्थ्य की स्थिति</h3>
        <p class="leading-relaxed">
          प्राथमिक स्वास्थ्य केंद्रों (PHC) में आवश्यक दवाओं, ऑक्सीजन और प्रशिक्षित स्वास्थ्य कर्मियों की निरंतर उपलब्धता सुनिश्चित की जानी चाहिए। ग्रामीण जनता में महामारी के प्रति वैज्ञानिक दृष्टिकोण और स्वच्छता की आदतें विकसित करना सबसे बड़ा रक्षा कवच है।
        </p>

        <h3 id="hi-community" class="text-2xl font-bold font-heading text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">सामुदायिक सहयोग और जागरूकता</h3>
        <p class="leading-relaxed">
          सच्ची सामाजिक सेवा वही है जो संकट के समय सबसे कमजोर व्यक्ति के काम आए। इस कठिन समय में समाज के सक्षम लोगों, सामाजिक संगठनों और युवाओं को मिलकर जरूरतमंद परिवारों तक राशन, दवा और सही जानकारी पहुंचाने का बीड़ा उठाना चाहिए।
        </p>

        <h3 id="hi-education" class="text-2xl font-bold font-heading text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">शिक्षा के नुकसान की भरपाई</h3>
        <p class="leading-relaxed">
          लगातार स्कूल बंद रहने से गरीब परिवारों के बच्चों की पढ़ाई में भारी व्यवधान आया है। जब तक स्थिति सामान्य नहीं होती, स्थानीय स्तर पर छोटे-छोटे अध्ययन समूहों के माध्यम से बुनियादी पठन-पाठन जारी रखने की आवश्यकता है।
        </p>
      </div>
    `
  },
  {
    id: "sahara-express-urdu-article-2021",
    slug: "sahara-express-urdu-article-2021",
    title: "تعلیمی بیداری اور سماجی فلاح کی ضرورت",
    category: "News",
    language: "ur",
    isRtl: true,
    published: true,
    featured: false,
    status: CONTENT_STATUS.RESEARCH,
    publication: "Roznama Sahara Express (روزنامہ سہارا ایکسپریس)",
    publishedDate: "2021-04-18",
    displayDate: "April 2021 (اپریل ۲۰۲۱)",
    author: {
      name: "سماجی نمائندہ (Community Correspondent)",
      note: "شائع شدہ اخباری رپورٹ"
    },
    historicalNotice: "اپریل ۲۰۲۱ میں روزنامہ سہارا ایکسپریس میں شائع ہونے والا تاریخی تذکرہ۔",
    summary: "معاشرے میں پسماندگی کے خاتمے کے لیے جدید تعلیم، اسکالرشپ اسکیموں سے آگاہی اور باہمی اتحاد کی اہمیت پر خصوصی کالم۔",
    image: "/images/community-indoor-gathering.jpg",
    readTime: "4 منٹ مطالعہ",
    toc: [
      { id: "ur-sahara-edu", title: "تعلیم کا بنیادی کردار" },
      { id: "ur-sahara-welfare", title: "سماجی فلاح کے تقاضے" }
    ],
    content: `
      <div class="space-y-6 text-brand-darkText/90 leading-relaxed font-urdu text-xl text-right" dir="rtl">
        <p class="leading-loose">
          قوموں کی ترقی اور وقار کا راز صرف اور صرف علم اور حکمت میں پوشیدہ ہے۔ دور حاضر میں وہ قومیں کبھی سرخرو نہیں ہو سکتیں جو اپنے نونہالوں کو جدید تعلیم اور اخلاقی تربیت سے محروم رکھیں۔
        </p>
        <h3 id="ur-sahara-edu" class="text-2xl font-bold text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">تعلیم کا بنیادی کردار</h3>
        <p class="leading-loose">
          ضرورت اس امر کی ہے کہ ہم اپنے وسائل کا رخ تعلیمی بیداری کی طرف موڑیں۔ سرکاری وظائف اور اسکالرشپ سے متعلق آگاہی مہمات چلائی جائیں تاکہ مستحق طلبہ مالی تنگی کے سبب تعلیم ادھوری نہ چھوڑیں۔
        </p>
      </div>
    `
  },
  {
    id: "amu-kishanganj-historical-coverage",
    slug: "amu-kishanganj-historical-coverage",
    title: "AMU Kishanganj Centre: A Historic Milestone for Higher Education in Seemanchal",
    category: "Press Coverage",
    language: "en",
    isRtl: false,
    published: true,
    featured: false,
    status: CONTENT_STATUS.RESEARCH,
    publication: "Regional Archive / Press Documentation (2011–2014)",
    publishedDate: "2014-02-15",
    displayDate: "Historical Archive (2011–2014)",
    author: {
      name: "Press Archive & Historical Documentation",
      note: "Archival record compiled from public news coverage"
    },
    historicalNotice: "Archival documentation of public community mobilization and government approvals for the AMU Kishanganj Centre.",
    summary: "A retrospective overview of the community advocacy, land sanctioning, and operational commencement of the AMU Kishanganj Off-Campus Centre in Bihar.",
    image: "/images/press-clipping-amu-sonia-gandhi.jpg",
    readTime: "5 min read",
    toc: [
      { id: "history", title: "Origins of the Movement" },
      { id: "timeline-recap", title: "Key Milestones (2011-2014)" },
      { id: "impact", title: "Higher Education in Seemanchal" }
    ],
    content: `
      <div class="space-y-6 text-brand-darkText/90 leading-relaxed font-normal">
        <p>
          The establishment of the Aligarh Muslim University (AMU) Centre in Kishanganj represents one of the most prominent civil society and community-driven higher education achievements in modern Bihar.
        </p>
        <h3 id="history" class="text-2xl font-bold font-heading text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">Origins of the Movement</h3>
        <p>
          Kishanganj and the broader Seemanchal zone have historically registered among the lowest literacy rates in the country. The demand for an AMU centre rallied students, educationists, and community elders across party lines.
        </p>
        <h3 id="timeline-recap" class="text-2xl font-bold font-heading text-brand-dark mt-8 mb-4 border-b border-brand-border pb-2">Key Milestones (2011-2014)</h3>
        <p>
          In 2011, after sustained public memorandums and community assemblies, the Bihar State Cabinet cleared 224 acres of land in Kishanganj. In early 2014, the centre formally commenced its first batch of academic programs.
        </p>
      </div>
    `
  },
  // UNPUBLISHED PARTISAN POLITICAL COMMENTARY (Strict Compliance: Rule 8 - Kept Unpublished pending explicit client approval & legal review)
  {
    id: "political-commentary-draft",
    slug: "political-commentary-draft",
    title: "Regional Political Analysis & Commentary (Internal Archive Only)",
    category: "Internal Policy",
    language: "en",
    isRtl: false,
    published: false, // KEPT UNPUBLISHED TO COMPLY WITH COMPLIANCE RESTRICTIONS
    featured: false,
    status: CONTENT_STATUS.DECISION,
    publication: "Internal Draft / Unverified",
    publishedDate: "2021-05-01",
    displayDate: "Under Legal Review",
    author: {
      name: "Pending Review",
      note: "Political opinion content strictly kept unpublished from public view per compliance policy."
    },
    historicalNotice: "RESTRICTED INTERNAL ARCHIVE: Politically partisan content is withheld from public release pending legal review and executive approval.",
    summary: "Draft commentary concerning electoral perspectives in regional politics.",
    image: "",
    readTime: "N/A",
    toc: [],
    content: `<p>This document is withheld from publication in compliance with organisational non-partisan guidelines.</p>`
  }
];
