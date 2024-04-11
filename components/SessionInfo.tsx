import {ReactNode} from 'react';

export type SessionInfoProps = {
    landingPage: string,
    duration: number,
    location: string,
    lastSelectedPlan: string,
};

export default function SessionInfo(info: SessionInfoProps): ReactNode {
    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-white">Session Information</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-400">Information about the current session.</p>
            </div>
            <div className="mt-6 border-t border-white/10">
                <dl className="divide-y divide-white/10">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-white">Landing page</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{info.landingPage}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-white">Duration</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{info.duration}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-white">Location</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{info.location}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-white">Last selected plan</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{info.lastSelectedPlan ?? 'None'}</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
