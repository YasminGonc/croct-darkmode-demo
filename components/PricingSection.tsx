'use client';

import {ReactElement, useState} from 'react';
import {RadioGroup} from '@headlessui/react';
import {CheckIcon} from '@heroicons/react/20/solid';
import classNames from 'classnames';
import {useCroct} from '@croct/plug-next';

type BillingFrequency = 'monthly' | 'annually';

type BillingMode = {
    value: BillingFrequency,
    label: string,
    priceSuffix: string,
};

const frequencies: BillingMode[] = [
    {
        value: 'monthly',
        label: 'Monthly',
        priceSuffix: '/month',
    },
    {
        value: 'annually',
        label: 'Annually',
        priceSuffix: '/year',
    },
];

export type Plans = {
    name: string,
    link: string,
    price: Record<BillingFrequency, string>,
    description: string,
    features: string[],
    mostPopular: boolean,
};

export type PricingSectionProps = {
    preTitle: string,
    title: string,
    subtitle: string,
    defaultFrequency?: BillingFrequency
};

export default function PricingSection(props: PricingSectionProps): ReactElement {
    const {preTitle, title, subtitle, defaultFrequency} = props;
    const plans: Plans = [
        {
            name: 'Freelancer',
            link: 'http://localhost:3000/checkout/freelancer',
            price: {
                monthly: '15',
                annually: '144'
            },
            description: 'The essentials to provide your best work for clients.',
            features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
            mostPopular: true
        },
        {
            name: 'Startup',
            link: 'http://localhost:3000/checkout/freelancer',
            price: {
                monthly: '30',
                annually: '288'
            },
            description: 'A plan that scales with your rapidly growing business.',
            features: ['25 products', 'Up to 1,000 subscribers', 'Advanced analytics', '24-hour support response time', 'Marketing automations'],
            mostPopular: false
        }
    ];
    const croct = useCroct();
    const [frequency, setFrequency] = useState(
        () => frequencies.find(
            candidate => candidate.value === defaultFrequency,
        ) ?? frequencies[0],
    );

    return (
        <div className="bg-gray-900 py-24 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">{preTitle}</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        {title}
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
                    {subtitle}
                </p>
                <div className="mt-16 flex justify-center">
                    <RadioGroup
                        value={frequency}
                        onChange={setFrequency}
                        className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
                    >
                        <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
                        {frequencies.map(
                            option => (
                                <RadioGroup.Option
                                    key={option.value}
                                    value={option}
                                    className={({checked}) => classNames(checked ? 'bg-indigo-500' : '', 'cursor-pointer rounded-full px-2.5 py-1')}
                                >
                                    <span>{option.label}</span>
                                </RadioGroup.Option>
                            ),
                        )}
                    </RadioGroup>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {plans.map(
                        plan => (
                            <div
                                key={plan.name}
                                className={
                                    classNames(
                                        plan.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                                        'rounded-3xl p-8 xl:p-10',
                                    )
                                }
                            >
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3 className="text-lg font-semibold leading-8 text-white">
                                        {plan.name}
                                    </h3>
                                    {plan.mostPopular
                                        ? (
                                            <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                                                Most popular
                                            </p>
                                        )
                                        : null}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-300">{plan.description}</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-white">{plan.price[frequency.value]}</span>
                                    <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
                                </p>
                                <a
                                    href={plan.link}
                                    onClick={
                                        event => {
                                            event.preventDefault();

                                            croct.track('goalCompleted', {
                                                goalId: 'plan-selected',
                                            });

                                            croct.session
                                                .edit()
                                                .set('plan', plan.name)
                                                .save();
                                        }
                                    }
                                    className={
                                        classNames(
                                            plan.mostPopular
                                                ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                                : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                                            'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                                        )
                                    }
                                >
                                    Buy plan
                                </a>
                                <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                                    {plan.features.map(
                                        feature => (
                                            <li key={feature} className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                                {feature}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}
