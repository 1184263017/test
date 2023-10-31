<template>
    <div>
        <ContentLoader viewBox="0 0 400 300" :speed="2" primary-color="#ededed">
            <circle cx="19" cy="33" r="17" />
            <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
            <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
            <rect x="0" y="60" rx="2" ry="2" width="400" height="270" />
        </ContentLoader>
        <ContentLoader viewBox="0 0 400 300" :speed="2" primary-color="#ededed">
            <circle cx="19" cy="33" r="17" />
            <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
            <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
            <rect x="0" y="60" rx="2" ry="2" width="400" height="270" />
        </ContentLoader>
    </div>
</template>

<script>
import {
    ContentLoader,

} from 'vue-content-loader'
export default {
    name: 'WorkspaceJsonSkeleton',
    components: {
        ContentLoader,
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>