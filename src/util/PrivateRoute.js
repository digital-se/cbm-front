import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export function PrivateRoute({ component: Component, roles, ...rest }) {
    const { keycloak } = useKeycloak();

    const isAutherized = (roles) => {
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

    return (
        <Route
            {...rest}
            render={props => {
                return isAutherized(roles)
                    ? <Component {...props} />
                    : <Redirect
                        to={{
                            pathname: '/',
                        }}
                    />
            }
            }
        />
    )
}