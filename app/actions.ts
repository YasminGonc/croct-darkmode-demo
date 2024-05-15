'use server';

import {anonymize, identify} from '@croct/plug-next/server';

export async function identifyUser(userId: string): Promise<void> {
    await identify(userId);
}

export async function anonymizeUser(): Promise<void> {
    await anonymize();
}
