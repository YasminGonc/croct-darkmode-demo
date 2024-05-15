'use client';

import React, {FunctionComponent} from 'react';
import Link from 'next/link';
import {anonymizeUser} from '@/app/actions';

export const AnonymizeButton: FunctionComponent = () => (
    <Link href="/login" onClick={() => anonymizeUser()}>
        Anonymize
    </Link>
);
