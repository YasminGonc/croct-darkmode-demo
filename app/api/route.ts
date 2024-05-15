'use server';

import {NextRequest} from 'next/server';
import {anonymize, identify} from '@croct/plug-next/server';

export async function GET(request: NextRequest): Promise<Response> {
    switch (request.nextUrl
        .searchParams
        .get('action')) {
        case 'identify':
            await identify(request.nextUrl
                .searchParams
                .get('userId') ?? 'mp');

            return new Response('User identified!');
        case 'anonymize':
            await anonymize();

            return new Response('User anonymized!');
    }

    return new Response('Hello, world!');
}
