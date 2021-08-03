import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PageLoader from './components/Common/PageLoader';
import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';
import { PrivateRoute } from './util/PrivateRoute';
import { useKeycloak } from '@react-keycloak/web';

const Busca = lazy(() => import('./components/Busca/Busca'));
const SubMenu = lazy(() => import('./components/SubMenu/SubMenu'));
const Inicio = lazy(() => import('./components/Inicio/Inicio'));
const Cadastro = lazy(() => import('./components/Cadastro/Cadastro'));
const Documento = lazy(() => import("./components/Documento/Documento"));
const ProtectedPage = lazy(() => import("./components/Protected/ProtectedPage"));

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
];

const Routes = ({ location }) => {

    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };
    const animationName = 'rag-fadeIn'
    
    const { initialized } = useKeycloak();
    if (!initialized) {
        return <h3>Carregando... (é pra ser uma bolinha rodando no meio da tela)</h3>;
    }

    if (listofPages.indexOf(location.pathname) > -1) {
        return (
            // Page Layout component wrapper
            <Suspense fallback={<PageLoader />}>
                <BasePage>
                    <Suspense fallback={<PageLoader />}>
                        <Switch location={location}>
                        </Switch>
                    </Suspense>
                </BasePage>
            </Suspense>
        )
    }
    else {
        return (
            
            // Use <BaseHorizontal> to change layout
            <Suspense fallback={<PageLoader />}>
                <Base>
                    <TransitionGroup>
                        <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                            <div>
                                <Suspense fallback={<PageLoader />}>
                                    <Switch location={location}>
                                        <Route path="/busca" component={Busca} />
                                        <Route path="/submenu" component={SubMenu} />
                                        <Route path="/inicio" component={Inicio} />
                                        <Route path="/documentos/:id" component={Documento} />
                                        <Route path="/protected" component={ProtectedPage} />
                                        
                                        {/* keycloak */}
                                        <PrivateRoute roles={['app-user']} path="/editar/:id" component={Cadastro} />
                                        <PrivateRoute roles={['app-user']} path="/cadastro" component={Cadastro} />
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
