import React, {ReactElement} from 'react';
import {cql} from '@croct/plug-next/server';
import ConsentStatus from '@/components/ConsentStatus';

export default async function EvaluatePage(): Promise<ReactElement> {
    const granted: boolean = await cql`user is identified`;

    return (<ConsentStatus granted={granted} />);
}
