/**
 * The pricing section.
 */
type Def$3ca9cc36 = {
    /**
     * The available pricing plans.
     */
    'plans': Def$861da295[],
    /**
     * The main title of the page.
     */
    'title': string,
    /**
     * A short text displayed above the page title.
     */
    'preTitle': string,
    /**
     * A two-line text displayed below the page title.
     */
    'subtitle': string,
};

/**
 * The details of a pricing plan.
 */
type Def$861da295 = {
    'link': string,
    'name': string,
    'price': {
        'monthly': string,
        'annually': string,
    },
    'features': string[],
    'description': string,
    'mostPopular': boolean,
};

/**
 * The pricing section.
 */
type Def$08cc63cc = {
    /**
     * The available pricing plans.
     */
    'plans': Def$861da295[],
    /**
     * The main title of the page.
     */
    'title': string,
    /**
     * A short text displayed above the page title.
     */
    'preTitle': string,
    /**
     * A two-line text displayed below the page title.
     */
    'subtitle': string,
    /**
     * The billing frequency selected by default.
     */
    'defaultFrequency': 'monthly' | 'annually',
};

declare module '@croct/plug/slot' {
    type PricingPageV1 = Def$3ca9cc36 & {'_component': 'pricing-section@1' | null};
    type PricingPageV2 = Def$08cc63cc & {'_component': 'pricing-section@2' | null};

    export interface VersionedSlotMap {
        'pricing-page': {
            latest: PricingPageV2,
            '1': PricingPageV1,
            '2': PricingPageV2,
        };
    }
}

export {};
