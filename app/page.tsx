import React, {Fragment, ReactElement, Suspense} from 'react';
import {fetchContent} from '@croct/plug-next/server';
import PricingSection from '@/components/PricingSection';
import PrivacyNotice from '@/components/PrivacyNotice';

export default async function PricingPage(): Promise<ReactElement> {
    const {content} = await fetchContent('pricing-page@1', {
        fallback: {
            _component: 'pricing-section@1',
            preTitle: 'Pricing',
            title: 'Pricing plans for teams of all sizes',
            subtitle: 'Choose an affordable plan that\'s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.',
            defaultFrequency: 'annually'
        }
    });

    return (
        <Fragment>
            <PricingSection { ...content } />
            <Suspense>
                <PrivacyNotice />
            </Suspense>
        </Fragment>
    );
}
