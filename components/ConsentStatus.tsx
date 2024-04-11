import React, {ReactElement} from 'react';

export type ConsentStatusProps = {
    granted: boolean,
};

export default function ConsentStatus({granted}: ConsentStatusProps): ReactElement {
    return (
        <main className="grid min-h-full place-items-center bg-gray-800 px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-8xl">
                    {granted ? '✅ Yes' : '❌ No'}
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-300">
                    {granted ? 'The user has granted consent.' : 'The user has not granted consent.'}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="/"
                        className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        Go back home
                    </a>
                </div>
            </div>
        </main>
    );
}
