import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from 'react-native';
import { useEffect, useRef } from "react";
import { setShowLoading, setStatus } from "../../redux/slices/loadingSlice.js";
import { MAX_REQUEST_WAITING_EXPIRE_TIME, MIN_REQUEST_WAITING_EXPIRE_TIME } from '../../constants/common.js';
import CustomModal from '../Modal';

export default function Loader() {
    const { status, showLoading } = useSelector(state => state.loading);
    const dispatch = useDispatch();
    const stateRef = useRef(status);

    useEffect(() => {
        const expireTimeout = setTimeout(() => {
            if(stateRef.current == 'loading') {
                dispatch(setStatus({ status: 'failed', error: 'Request waiting time exceeded' }));
            }
        }, MAX_REQUEST_WAITING_EXPIRE_TIME);

        const minTimeout = setTimeout(() => {
            if (stateRef.current == 'loading') {
                dispatch(setShowLoading(true))
            }
        }, MIN_REQUEST_WAITING_EXPIRE_TIME)

        return () => {
            clearTimeout(expireTimeout);
        }
    }, [status])

    useEffect(() => {
        stateRef.current = status;
    }, [status]);

    return (
        <CustomModal showModal={showLoading}>
            <ActivityIndicator color='#999999' size='large'/>
        </CustomModal>
    )
}