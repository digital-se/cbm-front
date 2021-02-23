const Menu = [
    {
        heading: 'Main Navigation',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Busca',
        path: '/busca',
        icon: 'icon-magnifier',
        translate: 'sidebar.nav.BUSCA'
    },
    {
        name: 'Cadastro',
        icon: 'fa fa-file',
        // translate: 'sidebar.CADASTRO'
        submenu: [
            {
                name: 'BGA',
                path: '/cadastro?tipo=bga'
            },
            {
                name: 'BGO',
                path: '/cadastro?tipo=bgo'
            },
            {
                name: 'BIR',
                path: '/cadastro?tipo=bir'
            },
            {
                name: 'Diário Oficial',
                path: '/cadastro?tipo=diario'
            },
            {
                name: 'Ficha',
                path: '/cadastro?tipo=ficha'
            },
            {
                name: 'Relatório de Processos',
                path: '/cadastro?tipo=relatorio'
            },
            {
                name: 'Fotos',
                path: '/cadastroFoto?tipo=foto'
            }
            // {
            //     name: 'grogs',
            //     path: 'https://google.com'
            // }
        ]
    },
];

export default Menu;
