import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';

createInertiaApp( {
  resolve : name => import.meta.glob( './pages/**/*.vue', { eager: true } )[ `./pages/${name}.vue` ],
  setup( { el, App, props, plugin } ){ createApp( { render : () => h( App, props ) } ).use( plugin ).mount( el ) }
} );
