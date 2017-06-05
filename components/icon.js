import React from 'react';

import Svg, { Path, Circle, G} from 'react-native-svg';

const icon = (name, color) => {
    switch (name) {
        case 'field'    : return <G stroke={color} stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><Circle cx="11" cy="9" r="3"/><Path d="M0 5h4v8H0M22 5h-4v8h4M11 12v6M11 0v6"/><Path d="M0 0h22v18H0z"/></G>;
        case 'calendar' : return <G stroke={color} stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><Path d="M23 9v14H1V9M1 3h22v6H1zM12 1v4M6 1v4M18 1v4"/><Path d="M5 13h2v1H5zM11 13h2v1h-2zM5 18h2v1H5zM11 18h2v1h-2zM17 13h2v1h-2z"/></G>;
        case 'zoom'     : return <G stroke={color} stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><Path d="M21 21l-5.6-5.6"/><Circle cx="9" cy="9" r="9"/></G>;
        case 'trophy'   : return <G stroke={color} stroke-width="2" fill="none" fill-rule="evenodd"><Path d="M5.29 11H4c-1.657 0-3-1.343-3-3V3h4M18.71 11H20c1.657 0 3-1.343 3-3V3h-4"/><Path d="M12 20v-4M12 16c-3.866 0-7-3.134-7-7V1h14v8c0 3.866-3.134 7-7 7zM17 23H7c0-1.657 1.343-3 3-3h4c1.657 0 3 1.343 3 3z" stroke-linecap="square"/></G>;
        case 'settings' : return <G stroke={color} stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><Path d="M22 13V9h-3.262c-.19-.732-.477-1.422-.852-2.058l2.306-2.306-2.828-2.828-2.306 2.306c-.636-.375-1.326-.663-2.058-.852V0H9v3.262c-.732.19-1.422.477-2.058.852L4.636 1.808 1.808 4.636l2.306 2.306C3.74 7.578 3.45 8.268 3.262 9H0v4h3.262c.19.732.477 1.422.852 2.058l-2.306 2.306 2.828 2.828 2.306-2.306c.635.375 1.326.663 2.058.852V22h4v-3.262c.732-.19 1.422-.477 2.058-.852l2.306 2.306 2.828-2.828-2.306-2.306c.375-.635.663-1.326.852-2.058H22z"/><Circle cx="11" cy="11" r="3"/></G>;
        case 'user'     : return <G stroke={color} stroke-width="2" fill="none" fill-rule="evenodd"><Path d="M11 15c-2.21 0-4-1.79-4-4V9c0-2.21 1.79-4 4-4s4 1.79 4 4v2c0 2.21-1.79 4-4 4z" stroke-linecap="square"/><Path d="M17.102 20.154C16.002 18.86 14.332 18 12.5 18h-3c-1.847 0-3.5.835-4.6 2.147"/><Circle stroke-linecap="square" cx="11" cy="11" r="11"/></G>;
        case 'map'      : return <G stroke={color} stroke-width="2" fill="none" fill-rule="evenodd"><Path d="M14.5 5.9L22 4v15l-8 2-6-2-8 2V6l7-1.7"/><Circle stroke-linecap="square" cx="11" cy="4" r="4"/><Path d="M11 8v5" stroke-linecap="square"/></G>;
    }
};

export default props => <Svg width="24" height="24">{icon(props.icon,props.color || 'black')}</Svg>
