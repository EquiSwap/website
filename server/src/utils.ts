import { argon2id, Options as Argon2HashingOptions } from 'argon2';

/** HASHING **/

/**
 * Default password hashing options.
 */
export const equiSwapHashingOptions: Argon2HashingOptions & { raw?: false } = {
    type: argon2id,
    timeCost: 6,
    parallelism: 6,
    hashLength: 128,
    memoryCost: 8192,
    raw: false
};

/**
 * Password hashing options that return a raw buffer.
 */
export const equiSwapRawHashingOptions: Argon2HashingOptions & { raw?: true } = {
    ...equiSwapHashingOptions,
    raw: true
};

// eslint-disable-next-line no-control-regex
export const EMAIL_REGEX = /^(?:[a-z\d!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z\d!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z\d](?:[a-z\d-]*[a-z\d])?|\[(?:(?:(2(5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))\.){3}(?:(2(5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)|[a-z\d-]*[a-z\d]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$/;
