export type EventType = 'page_view' | 'cta_click' | 'form_submit' | 'form_success' | 'form_error';

export interface TrackingEvent {
  event: EventType;
  variant?: string;
  location?: string;
  value?: string;
  timestamp: string;
}

/**
 * Track page view event
 * TODO: Integrate with Google Analytics 4
 */
export function trackPageView(variant: string, page: string = 'landing') {
  const event: TrackingEvent = {
    event: 'page_view',
    variant,
    location: page,
    timestamp: new Date().toISOString(),
  };

  console.log('📊 Analytics Event:', event);

  // TODO: Replace with actual GA4 tracking
  // window.gtag('event', 'page_view', {
  //   variant: event.variant,
  //   page_location: window.location.href,
  //   page_title: document.title,
  // });
}

/**
 * Track CTA click event
 * TODO: Integrate with Google Analytics 4
 */
export function trackCTA(variant: string, location: string, ctaText?: string) {
  const event: TrackingEvent = {
    event: 'cta_click',
    variant,
    location,
    value: ctaText,
    timestamp: new Date().toISOString(),
  };

  console.log('📊 Analytics Event:', event);

  // TODO: Replace with actual GA4 tracking
  // window.gtag('event', 'cta_click', {
  //   variant: event.variant,
  //   cta_location: location,
  //   cta_text: ctaText,
  // });
}

/**
 * Track form submission event
 * TODO: Integrate with Google Analytics 4
 */
export function trackFormSubmit(variant: string, formType: string, success: boolean, errorMessage?: string) {
  const event: TrackingEvent = {
    event: success ? 'form_success' : 'form_error',
    variant,
    location: formType,
    value: errorMessage,
    timestamp: new Date().toISOString(),
  };

  console.log('📊 Analytics Event:', event);

  // TODO: Replace with actual GA4 tracking
  // if (success) {
  //   window.gtag('event', 'form_submit', {
  //     variant: event.variant,
  //     form_type: formType,
  //   });
  // } else {
  //   window.gtag('event', 'form_error', {
  //     variant: event.variant,
  //     form_type: formType,
  //     error_message: errorMessage,
  //   });
  // }
}

/**
 * Initialize tracking on page load
 * TODO: Load GA4 script
 */
export function initTracking() {
  // TODO: Initialize Google Analytics 4
  // const script = document.createElement('script');
  // script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  // script.async = true;
  // document.head.appendChild(script);
  //
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());
  // gtag('config', GA_MEASUREMENT_ID);

  console.log('📊 Analytics initialized (currently in demo mode)');
}
