'use client';

import {ReactNode, useState} from 'react';
import {useCroct} from '@croct/plug-next';

type PrivacyBannerProps = {
    granted: boolean,
};

export function PrivacyBanner({granted}: PrivacyBannerProps): ReactNode {
    const croct = useCroct();
    const [visible, setVisible] = useState(!granted);

    return visible && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
            <div className="pointer-events-auto max-w-sm rounded-xl bg-slate-800  p-6 shadow-lg ring-1 ring-gray-900/10">
                <p className="text-sm leading-6 text-gray-300">
                    We collect anonymous information to personalize and improve your experience.
                </p>
                <div className="mt-4 flex items-center gap-x-5">
                    <button
                        type="button"
                        className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                        onClick={() => {
                            croct.user
                                .edit()
                                .set('custom.consent', true)
                                .save();

                            setVisible(false);
                        }}
                    >
                        That&apos;s fine
                    </button>
                    <a className="text-sm font-semibold leading-6 text-gray-400" href="/consent">
                        Current status
                    </a>
                </div>
            </div>
        </div>
    );
}
