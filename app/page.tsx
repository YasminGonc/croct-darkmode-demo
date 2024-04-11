import React, {Fragment, ReactElement} from 'react';
import PricingSection from '@/components/PricingSection';
import {fetchContent} from '@/lib/utils/fetchContent';
import PrivacyNotice from '@/components/PrivacyNotice';

/**
 * Agenda for today's demo
 *
 * Introduction
 * - What is this demo about?
 * - How is it built?
 *
 * Highlights
 *
 * 1. Localization: how to support multiple languages easily
 * 2. Dynamic content: how to generate content in real-time
 * 3. Auto-versioning: how to move fast and not break things
 * 4. Fallbacks: how to ensure your site will always work, even if Croct is down
 * 5. Context: how to share date with the personalization layer
 * 6. Evaluation: how to access the personalization layer from your code
 */
export default async function PricingPage(): Promise<ReactElement> {
    const content = await fetchContent('pricing-page@2');

    return (
        <Fragment>
            <PricingSection {...content} />
            <PrivacyNotice />
        </Fragment>
    );
}
