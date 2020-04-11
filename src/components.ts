// Components
import VAModal from './components/VAModal';
import VADropdown from './components/VADropdown/VADropdown';
import VACard from './components/VACard';
import VAList, { VAListItem } from "./components/VAList"

const define = (Vue: any) => {
   Vue.component('va-modal', VAModal);
   Vue.component('va-dropdown', VADropdown);
   Vue.component('va-card', VACard);
   // Vue anime list
   Vue.component('va-list', VAList);
   Vue.component('va-list-item', VAListItem);
};

export default { define };
