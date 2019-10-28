import RouteWrapper from '@screens/RouteWrapper';

const routes = [
    { path: '/', redirect : { name: 'events.index' }, },
    {
        path: '/publication', component: RouteWrapper, redirect : { name: 'events.index' },
        children: [
            {
                path: 'events', component: RouteWrapper,
                children: [
                    { path: '/', component: () => import('@screens/events/List'), name: 'events.index', },
                    { path: 'create', component: () => import('@screens/events/Form'), name: 'events.create', },
                    { path: ':id/show', component: () => import('@screens/events/Details'), name: 'events.show', },
                    { path: ':id/edit', component: () => import('@screens/events/Form'), name: 'events.edit', },
                ],
            },
        ],
    },

];

export default routes;