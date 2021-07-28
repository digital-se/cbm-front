import { useKeycloak } from '@react-keycloak/web';

export default function AuthorizedElement({ roles, children }) {
    const { keycloak, initialized } = useKeycloak();
    const isAuthorized = () => {
        if (keycloak && roles) {
            return roles.some(r => {
                const realm = keycloak.hasRealmRole(r);
                const resource = keycloak.hasResourceRole(r);
                return realm || resource;
            });
        }
        return false;
    }

    return isAuthorized() && children
}