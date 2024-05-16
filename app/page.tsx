import React, {Fragment, ReactElement, Suspense} from 'react';
import {fetchContent} from '@croct/plug-next/server';
import PricingSection from '@/components/PricingSection';
import PrivacyNotice from '@/components/PrivacyNotice';

export default async function PricingPage(): Promise<ReactElement> {
    const content = await fetchContent('pricing-page@2');

    return (
        <Fragment>
            <PricingSection {...content} />
            <Suspense>
                <PrivacyNotice />
            </Suspense>
        </Fragment>
    );
}
