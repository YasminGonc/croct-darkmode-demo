import 'server-only';
import {evaluate as executeQuery, EvaluationOptions as BaseOptions} from '@croct/plug-react/api';
import type {JsonValue} from '@croct/plug-react';
import {headers as getHeaders} from 'next/headers';
import {Header} from '../constants';

export type EvaluationOptions<T extends JsonValue = JsonValue> = Omit<BaseOptions<T>, 'apiKey'>;

export function evaluate<T extends JsonValue>(query: string, options: EvaluationOptions<T> = {}): Promise<T> {
    const headers = getHeaders();
    const uri = headers.get(Header.REQUEST_URI);
    const referrer = headers.get(Header.REFERRER);
    const clientId = headers.get(Header.CLIENT_ID);
    const clientIp = headers.get(Header.CLIENT_IP) ?? '127.0.0.1';
    const clientAgent = headers.get(Header.USER_AGENT);

    return executeQuery<T>(query, {
        apiKey: process.env.CROCT_API_KEY!,
        ...(clientId !== null && {clientId: clientId}),
        ...(clientIp !== null && {clientIp: clientIp}),
        ...(clientAgent !== null && {clientAgent: clientAgent}),
        ...(uri !== null
            ? {
                context: {
                    page: {
                        url: uri,
                        ...(referrer !== null ? {referrer: referrer} : {}),
                    },
                },
            }
            : {}
        ),
        extra: {
            cache: 'no-store',
        },
        ...options,
    });
}

// Template literal tag for CQL queries.
export function cql<T extends JsonValue>(strings: TemplateStringsArray, ...values: unknown[]): Promise<T> {
    return evaluate<T>(buildQuery(strings, values));
}

function buildQuery(strings: TemplateStringsArray, values: unknown[]): string {
    return strings.reduce(
        (result, string, index) => {
            const value = values[index];

            return result + string + (value !== undefined ? serialize(value) : '');
        },
        '',
    );
}

function serialize(value: unknown): string {
    switch (typeof value) {
        case 'number':
        case 'boolean':
        case 'string':
            return JSON.stringify(value);

        case 'object':
            if (value === null) {
                return 'null';
            }

            if (Array.isArray(value)) {
                return `[${value.map(serialize).join(',')}]`;
            }

            return `[${Object.entries(value)
                .map(([key, prop]) => `${JSON.stringify(key)}: ${serialize(prop)}`)
                .join(',')}]`;

        default:
            throw new TypeError(`Cannot serialize value of type ${typeof value}`);
    }
}
