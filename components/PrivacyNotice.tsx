import {ReactElement} from 'react';
import {cql} from '@croct/plug-next/server';
import {PrivacyBanner} from '@/components/PrivacyBanner';

export default async function PrivacyNotice(): Promise<ReactElement> {
    const granted: boolean = await cql`user's consent or false`;

    return (<PrivacyBanner granted={granted} />);
}
