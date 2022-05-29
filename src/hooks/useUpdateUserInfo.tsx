/**
 * @Author: forguo
 * @Date: 2022/5/29 15:22
 * @Description: useUpdateUserInfo.tsx
 */
import {useContext} from "react";
import {AppSetStateContext} from "../state";

export const useUpdateUsrInfo = () => {
    const setState = useContext(AppSetStateContext);
    return () => {
        if (setState) {
            setState((state) => {
                return {
                    ...state,
                    count: state.count + 1,
                }
            })
        }
    };
}
