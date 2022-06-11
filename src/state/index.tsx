/**
 * @Author: forguo
 * @Date: 2022/5/29 13:57
 * @Description: 全局状态
 */
import React, {useState} from 'react';
interface AppStateValue {
    name: string,
    version: string,
    address: string,
    count: number,
}
interface Props {
    children: any,
}
const userInfo = {
    name: 'React',
    version: '17.0.2',
    address: 'China',
    count: 0,
}

export const AppContext = React.createContext(userInfo);
export const AppSetStateContext = React.createContext< React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);
export const AppState: React.FC<Props> = (props) => {
    const [state, setState] = useState(userInfo);
    return (
        <AppContext.Provider value={state}>
            <AppSetStateContext.Provider value={setState}>
                {
                    props.children
                }
            </AppSetStateContext.Provider>
        </AppContext.Provider>
    )
}
