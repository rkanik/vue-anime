// Imports
import Vue, { VNode } from "vue"

// Styles
import "./scss/VAListItem.scss"

// Export
export default Vue.extend({
   name: "va-list-item",
   props: {
      dark: Boolean
   },
   created() {
      console.log(this.$props)
   },
   methods: {
      click(event: MouseEvent): void {
         this.$emit('click', event)
      }
   },
   // render(): VNode {
   //    return <li class="va-list-item"></li>
   // }
   render(create): VNode {
      return create('li', {
         staticClass: "va-list-item",
         on: {
            click: this.click
         }
      }, this.$slots.default)
   }
})