import React, {ReactElement} from 'react';
import {cql} from '@/lib/utils/evaluate';
import ConsentStatus from '@/components/ConsentStatus';

export default async function EvaluatePage(): Promise<ReactElement> {
    const granted: boolean = await cql`user's consent or false`;

    return (<ConsentStatus granted={granted} />);
}
