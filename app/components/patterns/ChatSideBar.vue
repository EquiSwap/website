<template>
    <div class="chat-sidebar">
        <div class="center padded">
            <form class="center" @submit.prevent="startConversation">
                <TextField v-model="search" icon="user" label="Search for a user..." />
                <Button style="margin: 0" @click.native.prevent="startConversation">New Conversation</Button>
            </form>
            <p class="divider" v-if="hasConversations">&mdash;</p>
            <div class="users">
                <ChatSideBarUser
                    @click.native.prevent="selectConversation(author.id)"
                    :key="author.id"
                    v-for="author in authors"
                    :active="activeConversation === author.id"
                    :user="author"
                    :summary="conversations[author.id].summary"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { user } from "@/utils/store-accessor";

export default {
    props: {
        activeConversation: {
            type: String
        },
        conversations: {
            type: Object,
            required: true
        },
        authors: {
            type: Array,
            required: true
        }
    },

    data: () => ({
        search: undefined
    }),

    computed: {
        hasConversations () {
            return this.authors?.length ?? 0 > 0;
        }
    },

    methods: {
        async startConversation () {
            try {
                const lookupResponse = (await this.$axios.$get(`/v1/chat/lookup/${this.search}`, user.requestConfig)).payload;

                this.$emit('startConversation', lookupResponse.user);
            } catch(ex) {
                const errorData = ex.response?.data;
                this.$toast.error(errorData.message ?? 'Failed to locate user.');
            }
        },

        selectConversation(id) {
            this.$emit('selectConversation', id);
        },
    }
}
</script>

<style lang="scss" scoped>
.chat-sidebar {
    width: 350px;
    flex-shrink: 0;
    background: #f8f8f8;
    border-bottom-left-radius: 18px;

    .center {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .padded {
        padding: 20px;
    }

    .divider {
        margin: 20px 0;
        font-weight: bold;
        text-align: center;
    }

    .users {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>
