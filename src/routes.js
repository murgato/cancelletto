const routes = [
    {
        collapse: false,
        label: 'Dashboard',
        path: '/dashboard',
        views: []
    },
    {
        collapse: true,
        label: 'Configuração',
        path: '/configuracao',
        views: [
            {
                collapse: false,
                label: 'SideBar',
                path: '/confSidebar'
            },
            {
                collapse: true,
                label: 'Dashboard',
                path: '/confDashboard',
                views: [
                    {
                        collapse: false,
                        label: 'Teste01',
                        path: '/confDashboard',
                        views: []
                    },
                    {
                        collapse: true,
                        label: 'Teste02',
                        path: '/confDashboard',
                        views: [
                            {
                                collapse: false,
                                label: 'TesteCo',
                                path: '/confDashboard',
                                views: []
                            }


                        ]
                    }
                ]
            }
        ]
    },
    {
        collapse: false,
        label: 'Medidas Corporal',
        path: '/confDashboard',
        views: []


    }
]




export default routes