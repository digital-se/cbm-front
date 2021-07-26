import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* loader component for Suspense*/
import PageLoader from './components/Common/PageLoader';

import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';


/* Used to render a lazy component with react-router */
// const waitFor = Tag => props => <Tag {...props} />; //arrumar esse bixao

const Busca = lazy(() => import('./components/Busca/Busca'));
const SubMenu = lazy(() => import('./components/SubMenu/SubMenu'));
// const SearchResult = lazy(() => import('./components/SearchResult/SearchResult'));
const Inicio = lazy(() => import('./components/Inicio/Inicio'));
const Cadastro = lazy(() => import('./components/Cadastro/Cadastro'));
const Documento = lazy(() => import("./components/Documento/Documento"));

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
    /* See full project for reference */
];

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    const animationName = 'rag-fadeIn'

    if (listofPages.indexOf(location.pathname) > -1) {
        return (
            // Page Layout component wrapper
            <Suspense fallback={<PageLoader />}>
                <BasePage>
                    <Suspense fallback={<PageLoader />}>
                        <Switch location={location}>
                            {/* See full project for reference */}
                        </Switch>
                    </Suspense>
                </BasePage>
            </Suspense>
        )
    }
    else {
        return (
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
            <Suspense fallback={<PageLoader />}>
                <Base>
                    <TransitionGroup>
                        <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                            <div>
                                <Suspense fallback={<PageLoader />}>
                                    <Switch location={location}>
                                        {/* <Route path="/busca" component={waitFor(Busca)} />
                                        <Route path="/submenu" component={waitFor(SubMenu)} />
                                        <Route path="/searchresult" component={waitFor(SearchResult)} />
                                        <Route path="/inicio" component={waitFor(Inicio)} />
                                        <Route path="/cadastro" component={waitFor(Cadastro)} />
                                        <Route path="/documentos/:id" component={waitFor(Documento)} /> */}
                                        <Route path="/busca" component={Busca} />
                                        <Route path="/submenu" component={SubMenu} />
                                        {/* <Route path="/searchresult" component={SearchResult} /> */}
                                        <Route path="/inicio" component={Inicio} />
                                        <Route path="/cadastro" component={Cadastro} />
                                        <Route path="/cadastro/" component={Cadastro} />
                                        <Route path="/editar/:id" component={Cadastro} />
                                        <Route path="/documentos/:id" component={Documento} />
                                        <Redirect to="/inicio" />
                                    </Switch>
                                </Suspense>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </Base>
            </Suspense>
        )
    }
}

export default withRouter(Routes);
