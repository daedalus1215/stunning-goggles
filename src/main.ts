import { createApp } from 'vue';
import App from './App.vue';
import { Amplify } from 'aws-amplify';
import { awsConfig } from './aws-exports';

Amplify.configure(awsConfig as unknown as Record<string, any>);

createApp(App).mount('#app');
