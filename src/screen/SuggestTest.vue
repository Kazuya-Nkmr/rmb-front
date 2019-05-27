<template>
  <div>
    <input v-model.number="budget">円以下に絞り込む
    <input v-model.number="limit">件表示
    <p>{{matched.length}}件中{{limited.length}}件を表示</p>
    <ul>
      <li v-for="item in limited" v-bind:key="item.id">{{item.name}}{{item.price}}円</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Suggest",
  data: function() {
    return {
      budget: 300,
      limit: 2,
      list: [
        { id: 1, name: "リンゴ", price: 100 },
        { id: 2, name: "バナナ", price: 200 },
        { id: 3, name: "イチゴ", price: 300 },
        { id: 4, name: "オレンジ", price: 400 },
        { id: 5, name: "メロン", price: 500 }
      ]
    }
  },
  computed: {
    matched: function() {
      return this.list.filter(function(data) {
        return data.price <= this.budget
      }, this)
    },
    limited: function() {
      return this.matched.slice(0, this.limit)
    }
  },
  mounted() {
    console.log('hello');
  }
};
</script>
