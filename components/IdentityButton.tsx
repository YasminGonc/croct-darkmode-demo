'use client';

import React, {FunctionComponent} from 'react';
import {identifyUser} from '@/app/actions';

export const IdentityButton: FunctionComponent = () => (
    <button
        type="button"
        onClick={
            async (): Promise<void> => {
                // eslint-disable-next-line no-alert -- This is a demo
                await identifyUser(prompt('Enter the user ID') ?? 'mp');
            }
        }
    >
        Identify
    </button>
);
