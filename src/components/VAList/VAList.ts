// Imports
import Vue, { VNode } from "vue"

// Styles
import "./scss/VAList.scss"

// Anime js
import anime from 'animejs'

// Export
export default Vue.extend({
   name: "va-list",
   props: {
      shadow: Boolean,
      outlined: Boolean,
      dark: Boolean,
      label: String
   },
   mounted() {
      let targets = this.$children.map(child => child.$el)
      anime({
         targets,
         duration: anime.stagger(100, { start: 600 }),
         translateY: [15, 0],
         easing: 'easeInOutQuad'
      })
   },
   computed: {
      classes(): object { return this.$props }
   },
   methods: {
      onItemClick(event: MouseEvent): void {
         let otherChilds = this.$children.filter(c => c.$el !== event.target)
         otherChilds.length > 0 && otherChilds.forEach(c => c.$el.classList.remove('active'))
         this.$children.find(c => c.$el === event.target)?.$el.classList.add('active')
      }
   },
   render(create): VNode {
      return create('ul', {
         staticClass: "va-list",
         class: this.classes,
         on: { click: this.onItemClick }
      }, [create('p', { staticClass: 'va-list-label' }), this.$slots.default]
      )
   }
})