<!--

Custom Loader Widget
from my Apollo Design System:
https://github.com/apollosoftwarexyz/design-system/

-->

<template>
    <div class="loader circular" :class="{ slim, white }" v-if="type === 'circular'">
        <div class="inner" :class="{ large, slim, white }">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path path3" cx="50" cy="50" r="20" />
                <circle class="path path2" cx="50" cy="50" r="20" />
                <circle class="path" cx="50" cy="50" r="20" />
            </svg>
        </div>
    </div>
    <div class="loader linear" v-else-if="type === 'linear'" :class="{ large, slim, white }" />
</template>

<style lang="scss" scoped>
$loader-color: #9bda5d;

.loader {
    margin: 16px;
}

.loader.slim {
    margin: 0;
}

.loader.circular {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    margin: 16px;

    &.slim {
        margin: 0;
    }

    .inner {
        position: relative;
        display: inline-block;
        height: 32px;
        width: 32px;

        &.large {
            height: 52px;
            width: 52px;

            .path {
                stroke-width: 4px;
            }
        }

        -webkit-transform: rotate(280deg);
        transform: rotate(280deg);
    }

    .circular {
        -webkit-animation: circularLoader 2s linear infinite;
        animation: circularLoader 2s linear infinite;
        height: 100%;
        width: 100%;
    }

    .path {
        -webkit-animation: circularSegment 2s ease-in-out infinite;
        animation: circularSegment 2s ease-in-out infinite;
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        fill: none;
        stroke-width: 6;
        stroke-miterlimit: 10;
        stroke-linecap: round;

        stroke: $loader-color;
    }

    &.white .path {
        stroke: white;
    }

    .path2 {
        -webkit-animation-delay: 0.15s;
        animation-delay: 0.15s;

        stroke: lighten($loader-color, 10%);
        opacity: 0.6;
    }

    &.white .path2 {
        stroke: white;
    }

    .path3 {
        -webkit-animation-delay: 0.23s;
        animation-delay: 0.23s;

        stroke: lighten($loader-color, 20%);
        opacity: 0.3;
    }

    &.white .path3 {
        stroke: white;
    }

    @keyframes circularLoader {
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes circularSegment {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 130, 200;
        }

        to {
            stroke-dasharray: 130, 200;
            stroke-dashoffset: -124;
        }
    }
}

$loaderWidth: 75px;

.loader.linear {
    position: relative;
    display: block;
    height: 6px;

    background-color: rgba(100, 100, 100, 0.2);
    border-radius: 6px;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        left: -5px;
        top: 0;
        background-color: $loader-color;
        border-radius: 6px;

        width: $loaderWidth;
        height: 6px;

        animation: linearLoader 4s infinite;
    }

    &.white::after {
        background-color: white;
    }

    @keyframes linearLoader {
        0% {
            width: $loaderWidth;
            left: -5px;
        }
        50% {
            width: 100px;
            left: calc(100% - #{$loaderWidth});
        }
        100% {
            width: $loaderWidth;
            left: -5px;
        }
    }
}
</style>

<script>
/**
 * Loaders are indeterminate progress indicators used to convey to the user that an operation is in progress
 * such as fetching data or saving a user's changes. These should be used when the progress or details of an
 * operation are unknown, to indicate to the user that the operation is in fact still being performed and to
 * reassure the user that a delay is expected.
 *
 * Generally, you **should not** use a Loader if any of the following are true:
 *
 * - the progress, exact duration and/or steps of the operation are known; use a Progress indicator instead,
 * - there is a reasonable chance the operation will last for longer than 10 seconds*, or
 * - it is known that the operation will **always** be less than 100ms as it is unneccessary and may actually
 * worsen the UX (ignore this rule if networking is involved).
 *
 * \*For long-running actions (&gt;10s), a Loader should not be used (at least by itself) because, by convention,
 * it is used as a temporary progress indicator and it does not provide any feedback on the progress of the
 * operation being performed, thus using it for long-running operations may cause the user to become frustrated.
 * In this instance, you should consider either:
 *
 * - deferring the operation to the background and displaying a notification upon completion (if the operation
 * is non-blocking and the application can be used despite the operation), or
 * - displaying a full page dialog or loader with a time and/or progress estimate (if the operation is blocking
 * and the user cannot be allowed to perform other actions in the background).
 */
export default {
    name: "Loader",
    status: "review",
    version: "0.0.1",

    props: {
        /**
         * Whether the white variant should be used.
         */
        white: {
            type: Boolean,
            default: false
        },

        /**
         * If set, removes the margin from the loader.
         */
        slim: {
            type: Boolean,
            default: false
        },

        /**
         * Determines the style of the loading indicator.
         *
         * Valid options are `circular` and `linear`.
         */
        type: {
            type: String,
            default: "circular",
            required: false,
            validator: value => ["circular", "linear"].includes(value),
        },

        /**
         * If set, renders a large loader widget instead, useful for big dialogs or full-page loaders.
         *
         * This is only valid if the `type` is `circular`.
         */
        large: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
}
</script>
