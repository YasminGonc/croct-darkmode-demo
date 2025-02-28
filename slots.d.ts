/**
 * Pricing section
 * 
 * The pricing section.
 */
type Def$5b1b692c = {
    /**
     * Page title
     * 
     * The main title of the page.
     */
    'title': string,
    /**
     * Page pre-title
     * 
     * A short text displayed above the page title.
     */
    'preTitle': string,
    /**
     * Page subtitle
     * 
     * A two-line text displayed below the page title.
     */
    'subtitle': string,
    /**
     * Default frequency
     * 
     * The billing frequency selected by default.
     */
    'defaultFrequency': 'monthly' | 'annually',
  };
  
  declare module '@croct/plug/slot' {
    type PricingPageV1 = Def$5b1b692c & {'_component': 'pricing-section@1' | null};
    
    export interface VersionedSlotMap {
      'pricing-page': {
        latest: PricingPageV1,
        '1': PricingPageV1,
      };
    }
  }
  
  export {};
