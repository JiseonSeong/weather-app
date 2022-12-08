<template>
  <div>
    <ul class="city-selector">
      <li
        @click="selectCity(city)"
        :class="{ isSelected: city.selected }"
        v-for="city in cities"
        :key="city.code"
      >
        {{ city.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CitySelector",
  data() {
    return {
      cities: [
        { code: "Seoul", label: "Seoul", selected: false },
        { code: "Toronto", label: "Toronto", selected: false },
        { code: "Ottawa", label: "Ottawa", selected: false },
        { code: "Vancouver", label: "Vancouver", selected: false },
        { code: "Montreal", label: "Montreal", selected: false },
        { code: "Quebec", label: "Quebec", selected: false },
        { code: "Victoria", label: "Victoria", selected: false },
        { code: "Edmonton", label: "Edmonton", selected: false },
        { code: "Whistler", label: "Whistler", selected: false },
        { code: "Alberta", label: "Alberta", selected: false },
      ],
    };
  },
  methods: {
    selectCity(city) {
      city.selected = !city.selected;
      this.$emit("selectCity", city);
    },
  },
};
</script>

<style scoped>
.city-selector {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.city-selector li {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.05em solid #efefef;
  padding: 0.3em;
  cursor: pointer;
}
.isSelected {
  background: #08328088;
  color: rgb(245, 245, 245);
}
</style>
