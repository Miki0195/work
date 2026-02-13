'use client';

import { motion } from 'framer-motion';

interface ComparisonRow {
  feature: string;
  us: string | boolean;
  typical: string | boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'Implementációs idő',
    us: '2-3 nap',
    typical: '3-6 hónap',
  },
  {
    feature: 'Képzési idő',
    us: '2 óra',
    typical: '2-4 hét',
  },
  {
    feature: 'Ügyfélszolgálat',
    us: '24/7 magyar nyelvű',
    typical: 'Csak munkaidőben',
  },
  {
    feature: 'Automatikus frissítések',
    us: true,
    typical: false,
  },
  {
    feature: 'Adatbiztonság',
    us: 'Enterprise szintű + GDPR',
    typical: 'Alap védelem',
  },
  {
    feature: 'API integráció',
    us: '200+ kész integráció',
    typical: '10-20 integráció',
  },
  {
    feature: 'Testreszabhatóság',
    us: 'Teljes mértékben',
    typical: 'Limitált',
  },
  {
    feature: 'Mobilapp',
    us: true,
    typical: 'Gyakran hiányzik',
  },
  {
    feature: 'Pénzvisszafizetési garancia',
    us: '90 nap',
    typical: 'Nincs',
  },
];

export function ComparisonSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Miért Minket Válasszon?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lássa a különbséget egy modern, ügyfélközpontú megoldás és a hagyományos rendszerek között
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
              <div className="text-lg font-semibold">Jellemző</div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">Studio Prof</div>
                <div className="text-sm text-primary-100">Modern Megoldás</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold mb-1">Tipikus versenytárs</div>
                <div className="text-sm text-primary-100">Hagyományos</div>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-200">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-3 p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="font-medium text-gray-900">{row.feature}</div>
                  
                  <div className="text-center">
                    {typeof row.us === 'boolean' ? (
                      row.us ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                          <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )
                    ) : (
                      <span className="font-semibold text-green-600">{row.us}</span>
                    )}
                  </div>

                  <div className="text-center">
                    {typeof row.typical === 'boolean' ? (
                      row.typical ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                          <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )
                    ) : (
                      <span className="text-gray-600">{row.typical}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Guarantee Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border-2 border-green-200 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                90 Napos Pénzvisszafizetési Garancia
              </h3>
              <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
                Ha nem éri el a 3x-os növekedést 90 napon belül, akkor visszaadjuk a teljes befektetését. 
                Kérdések nélkül. Ez a mi elköteleződésünk az Ön sikere iránt.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Teljes visszatérítés</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Kérdések nélkül</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Gyors feldolgozás</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
