'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Mennyi idő alatt tudom bevezetni a rendszert?',
    answer: 'A legtöbb ügyfél 2-3 napon belül teljesen üzembe helyezi a platformot. Dedikált onboarding szakértőnk végigkíséri az egész folyamaton, és biztosítjuk, hogy a csapata teljes mértékben fel legyen készülve az indulásra.',
  },
  {
    question: 'Van ingyenes próbaidőszak?',
    answer: 'Igen! 14 napos ingyenes próbaidőszakot kínálunk, hitelkártya nélkül. Teljes hozzáférést kap minden funkcióhoz, így pontosan megtapasztalhatja, hogyan működik a rendszer az Ön vállalkozásában.',
  },
  {
    question: 'Milyen integrációkat támogat a platform?',
    answer: 'Több mint 200 kész integrációt támogatunk, beleértve a népszerű CRM-eket (Salesforce, HubSpot), e-commerce platformokat (Shopify, WooCommerce), email marketing eszközöket (Mailchimp, ActiveCampaign) és számlázó rendszereket (Számlázz.hu, Billingo). Egyedi API integrációkat is biztosítunk.',
  },
  {
    question: 'Biztonságosak az adataim?',
    answer: 'Abszolút. Enterprise szintű adatbiztonsággal dolgozunk: 256-bites SSL titkosítás, többlépcsős biztonsági mentés, ISO 27001 tanúsítvány és teljes GDPR megfelelőség. Az adatai biztonságos európai szervereken tárolódnak.',
  },
  {
    question: 'Milyen ügyfélszolgálatot kapok?',
    answer: '24/7 magyar nyelvű ügyfélszolgálatot biztosítunk chat, email és telefon formájában. Minden ügyfél dedikált customer success managert kap, aki aktívan segít a célok elérésében és a rendszer optimalizálásában.',
  },
  {
    question: 'Mi a pénzvisszafizetési politikátok?',
    answer: '90 napos pénzvisszafizetési garanciát vállalunk. Ha nem éri el az ígért eredményeket, teljes mértékben visszatérítjük a befektetését, kérdések nélkül. Ez mutatja, mennyire biztosak vagyunk a platformunk hatékonyságában.',
  },
  {
    question: 'Tudok váltani a csomagok között?',
    answer: 'Természetesen! Bármikor válthat a csomagok között az igényei alapján. Ha feljebb lép, azonnal hozzáfér az új funkciókhoz. Ha lejjebb lép, a változtatás a következő számlázási ciklusban lép életbe.',
  },
  {
    question: 'Mennyire testreszabható a rendszer?',
    answer: 'Teljes mértékben testreszabható. Személyre szabhatja a dashboard-ot, a munkafolyamatokat, az értesítéseket, a jelentéseket és még sok mást. Egyedi fejlesztéseket is vállalunk nagyobb vállalatok számára.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gyakran Ismételt Kérdések
          </h2>
          <p className="text-xl text-gray-600">
            Minden, amit tudnia kell a kezdéshez
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Még mindig vannak kérdései?
          </h3>
          <p className="text-gray-600 mb-6">
            Szakértő csapatunk itt van, hogy segítsen. Vegye fel velünk a kapcsolatot bármikor.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Beszéljünk telefonon
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white hover:bg-gray-50 text-primary-600 font-semibold rounded-lg border-2 border-primary-600 transition-all"
            >
              Küldj egy emailt
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
