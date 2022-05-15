<template>
    <div class="text-field-wrapper" :class="className">
        <span class="text-field-label" v-if="label && !hasValue">{{ label }}</span>
        <span class="text-field-icon" v-if="icon"><Icon :of="icon" /></span>
        <input class="text-field" :disabled="disabled" :type="type" :required="required" :aria-required="required" v-model="currentValue">
    </div>
</template>

<script>
export default {
    name: 'TextField',
    data: () => ({
        currentValue: undefined
    }),
    props: {
        icon: {
            type: String,
            required: false
        },
        label: {
            type: String,
            required: false
        },
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String,
            default: undefined
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    mounted() {
        this.currentValue = this.value;
    },
    computed: {
        hasValue () {
            return (this.currentValue?.length ?? 0) > 0;
        },
        className () {
            return {
                'has-value': this.hasValue,
                invalid: this.isValid,
                'has-icon': this.icon
            }
        },
        isValid () {
            if ((this.currentValue?.length ?? 0) === 0) { return true; }
            if (this.type === 'email' && (!(this.currentValue?.match(/^\S+@\S+\.\S\S+$/) ?? false))) {
                return false;
            }

            return true;
        }
    },
    watch: {
        currentValue (newValue) {
            this.$emit('input', newValue);
        },
        value (newValue) {
            this.currentValue = newValue;
        }
    }
}
</script>

<style lang="scss" scoped>
.text-field-wrapper {
    position: relative;
    display: block;
    width: 100%;

    margin: 10px 0;

    .text-field {
        font-weight: 500;
        background: #EBEBEB;
        padding: 10px 15px 10px 15px;
        border-radius: 7px;
        width: 100%;

        &[disabled] {
            opacity: 0.7;
            cursor: not-allowed;
        }
    }

    .text-field-label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translate(0, -50%);
        left: 15px;
        color: #A3A3A3;
        user-select: none !important;
        -webkit-user-select: none !important;
    }

    .text-field-icon {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 10px;
        pointer-events: none;
        color: #6D6D6D;
        user-select: none !important;
        -webkit-user-select: none !important;

        svg {
            height: 18px;
            width: 18px;
        }
    }

    &.has-icon {
        .text-field {
            padding-left: 35px;
        }

        .text-field-label {
            left: 35px;
        }
    }
}
</style>
