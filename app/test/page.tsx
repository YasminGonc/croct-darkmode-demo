import React, {ReactElement} from 'react';
import {IdentityButton} from '@/components/IdentityButton';
import {AnonymizeButton} from '@/components/AnonymizeButton';

export default function TestPage(): ReactElement {
    return (
        <div>
            <IdentityButton />
            <AnonymizeButton />
        </div>
    );
}
