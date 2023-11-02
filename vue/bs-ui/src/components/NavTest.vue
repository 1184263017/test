<template>
  <div>
    <!-- <ul>
      <li v-for="v in routers" :key="v.name">
        {{ v.meta.name }}
        <ul>
          <li v-for="v1 in v.children" :key="v1.name">
            <router-link :to="{ name: v1.name }">{{ v1.meta.name }}</router-link>
          </li>
        </ul>
      </li>
    </ul> -->
    <el-tree :data="dropDown" :props="defaultProps" accordion @node-click="handleNodeClick">
    </el-tree>
  </div>
</template>

<script>
export default {
  name: 'NavTest',

  data() {
    return {
      newData: [],
      treedata: [
        {
          label: '一级 1',
          Spath: '/',
          children: [
            {
              label: '二级 1-1',
              Spath: '/1/',
              children: [
                {
                  label: '三级 1-1-1',
                  Spath: '/1/1',
                },
              ],
            },
          ],
        },
        {
          label: '一级 2',
          name: 'xixi',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1',
                },
              ],
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1',
                },
              ],
            },
          ],
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1',
                },
              ],
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1',
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
        // SpecialRouterPath: 'SpecialRouterPath',
      },
    };
  },

  mounted() {
    // console.log(this.$router.options.routes);
    console.log(this.dropDown);
  },

  methods: {
    handleNodeClick(data) {
      console.log(data);
      // console.log(a, b);
      const path = '_path';
      this.$router.push({ name: data[path] }).catch((e) => console.log(e));
    },
  },
  computed: {
    routers() {
      return this.$router.options.routes;
    },
    dropDown() {
      return this.$router.options.routes.reduce((count, v) => {
        let children;
        if (v.children.length !== 0) {
          children = v.children.reduce((count1, v1) => {
            count1.push({
              label: v1.meta.name,
              _path: v1.name,
            });
            return count1;
          }, []);
        }
        count.push({
          label: v.meta.name,
          children,
          _path: v.name,
        });
        return count;
      }, []);
    },
  },
};
</script>

<style lang="scss" scoped></style>
