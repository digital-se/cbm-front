import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export function PrivateRoute({ component: Component, roles, ...rest }) {
    const { keycloak } = useKeycloak();

    const isAuthorized = (roles) => {
        if (keycloak && roles) {
            return roles.some(r => {
                // No KeyCloak tem 2 formas de colocar cargos em usuários 
                // Você pode colocar cargos no Realm e no Client 
                // Neste caso você pode usar ambos os cenários com os hasRealmRole & hasResourceRole
                const realm = keycloak.hasRealmRole(r);
                const resource = keycloak.hasResourceRole(r);
                return realm || resource;
            });
        }
        return false;
    }
    PrivateRoute.propTypes = {
        component:PropTypes.any,
        roles: PropTypes.any
    }

    return (
        <Route
            {...rest}
            render={props => {
                return isAuthorized(roles)
                    ? <Component {...props} />
                    : <Redirect
                        to={{
                            pathname: keycloak.login(),
                        }}
                    />
            }
            }
        />
    )
    
}