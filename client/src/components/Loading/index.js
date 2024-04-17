import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, Alert } from 'react-native';
import React, { useEffect, useRef } from "react";
import { setStatus } from "../../redux/slices/loadingSlice";

export default function Loading() {
    const { status, error } = useSelector(state => state.loading);
    const dispatch = useDispatch();
    const stateRef = useRef(status);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(status == 'loading') {
                dispatch(setStatus({ status: 'failed', error: 'Request waiting time exceeded' }));
            }
        }, 5000);

        return () => {
            clearTimeout(timeout);
        }
    }, [])

    useEffect(() => {
        stateRef.current = status;
    }, [status]);

    return (
        <React.Fragment>
            {status == 'loading' && <ActivityIndicator color='#999999' size='large'/>}
            {status == 'failed' && Alert.alert('Error', error, [
                {
                    text: 'OK',
                    onPress: () => {
                        dispatch(setStatus({ status: 'idle' }))
                    }
                }
            ])}
        </React.Fragment>
    )
}