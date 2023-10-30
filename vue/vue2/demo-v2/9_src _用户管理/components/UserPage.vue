<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" @click="shangxia(1)">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="i in count" :key="i" @click="pageC(i)">
          <a class="page-link" href="#">{{ i }}</a>
        </li>
        <li class="page-item" @click="shangxia(2)">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { getUsersPageApi } from "../api/users";
export default {
  name: "UserPage",
  props: ["keyword", "page"],
  data() {
    return {
      userList: [],
      count: 0,
      limit: 4,
      num: 1,
    };
  },

  mounted() {
    this.getCount();
  },
  created() {
    this.getCount();
  },
  methods: {
    async getCount() {
      this.userList = await getUsersPageApi();
      this.count = this.getC;
    },
    pageC(value) {
      this.num = value;
      this.$emit("update:page", value);
    },
    shangxia(type) {
      if (type === 1) {
        this.num = this.num - 1 < 1 ? 1 : this.num - 1;
      } else {
        this.num = this.num + 1 > this.count ? this.count : this.num + 1;
      }
      this.$emit("update:page", this.num);
    },
  },
  watch: {
    async keyword() {
      if (this.keyword === "") {
        this.userList = await getUsersPageApi();
        this.count = Math.ceil(this.userList.length / this.limit);
      } else {
        this.userList = await getUsersPageApi({
          username: this.keyword,
        });
        this.count = Math.ceil(this.userList.length / this.limit);
      }
    },
  },
  computed: {
    getC() {
      return Math.ceil(this.userList.length / this.limit);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>