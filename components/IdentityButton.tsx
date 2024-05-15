'use client';

import React, {FunctionComponent} from 'react';
import {identifyUser} from '@/app/actions';

export const IdentityButton: FunctionComponent = () => (
    <button
        onClick={
            async (): Promise<void> => {
                await identifyUser(prompt('Enter the user ID') ?? 'mp');
            }
        }
    >
        Identify
    </button>
);
