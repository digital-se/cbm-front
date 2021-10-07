import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PageLoader from './components/Common/PageLoader';
import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';
import { PrivateRoute } from './util/PrivateRoute';
import { useKeycloak } from '@react-keycloak/web';
import { Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const Busca = lazy(() => import('./components/Busca/Busca'));
const SubMenu = lazy(() => import('./components/SubMenu/SubMenu'));
const Inicio = lazy(() => import('./components/Inicio/Inicio'));
const Cadastro = lazy(() => import('./components/Cadastro/Cadastro'));
const Documento = lazy(() => import("./components/Documento/Documento"));
const Arquivo = lazy(() => import("./components/Arquivo/Arquivo"));
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
    
    //Consertar, não funciona sem keycloak
    const { initialized } = useKeycloak();
    if (!initialized) {
        return (  
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center" >
                    <h2 style={{"text-align":"center", "color":"#F05050"}}>Tentando conectar-se com o serviço de autenticação!</h2> 
                </div>              
            </div>
        )
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
                                        <Route exact path="/documentos/:id_documento" component={Documento} />
                                        <Route path="/protected" component={ProtectedPage} />
                                        <Route path="/arquivo" component={Arquivo} />        
                                        
                                        {/* keycloak */}          
                                        <PrivateRoute roles={['bmrh.user']} path="/documentos/:id_documento/arquivos/:id_arquivo/editar" component={Arquivo} />
                                        <PrivateRoute roles={['bmrh.user']} exact path="/cadastro" component={Cadastro} />
                                        <PrivateRoute roles={['bmrh.user']} path="/documentos/:id_documento/editar" component={Cadastro} />
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
