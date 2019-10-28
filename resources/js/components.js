import Vue from 'vue';


import FormGroup from '@components/Form/FormGroup';
import TextInput from '@components/Form/TextInput';
import DateTime from '@components/Form/DateTime';
import TextArea from '@components/Form/TextArea';
import PageHeader from '@components/PageHeader';
import Pagination from '@components/Pagination';
import Sidebar from '@components/Sidebar';

Vue.component('page-header', PageHeader);
Vue.component('pagination', Pagination);
Vue.component('form-group', FormGroup);
Vue.component('text-input', TextInput);
Vue.component('text-area', TextArea);
Vue.component('date-time', DateTime);
Vue.component('sidebar', Sidebar);