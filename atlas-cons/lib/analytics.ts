// Analytics utilities
// TODO: Integrate with GA4, Meta Pixel, or your analytics provider

export const analytics = {
  track: (eventName: string, properties?: Record<string, any>) => {
    // For now, log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', eventName, properties)
    }

    // TODO: Add your analytics provider here
    // Example for GA4:
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('event', eventName, properties)
    // }

    // Example for Meta Pixel:
    // if (typeof window !== 'undefined' && window.fbq) {
    //   window.fbq('track', eventName, properties)
    // }
  },

  page: (pageName: string) => {
    analytics.track('page_view', { page: pageName })
  },

  formSubmit: (formName: string) => {
    analytics.track('form_submit', { form: formName })
  },

  ctaClick: (ctaName: string, location: string) => {
    analytics.track('cta_click', { cta: ctaName, location })
  },

  pricingView: (plan: string) => {
    analytics.track('pricing_view', { plan })
  },
}

// Declare global types for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
  }
}
