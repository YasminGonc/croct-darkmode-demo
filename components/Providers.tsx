import {PropsWithChildren, ReactElement} from 'react';
import {CroctProvider} from '@croct/plug-react/CroctProvider';
import {headers} from 'next/headers';
import {Header} from '@/lib/constants';

export default function Providers({children}: PropsWithChildren): ReactElement {
    return (
        <CroctProvider
            debug
            appId="11c2f5f0-9f7e-4c9b-9c0c-0b5e9b4d9d9f"
            clientId={headers().get(Header.CLIENT_ID) ?? undefined}
        >
            {children}
        </CroctProvider>
    );
}
