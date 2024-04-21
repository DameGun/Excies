import { useDispatch, useSelector } from "react-redux"
import { setStatus } from "../../redux/slices/loadingSlice.js";
import { Alert } from "react-native";
import { useEffect, useState } from "react";

export default function Error() {
    const { status, error } = useSelector(state => state.loading);
    const [alerted, setAlerted] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status == 'failed') {
            setAlerted(true);
        }
        else {
            setAlerted(false);
        }
    }, [status])

    return (
        (status == 'failed' && alerted) && Alert.alert('Error', error.message, [
            {
                text: 'Cancel',
                onPress: () => {
                    dispatch(setStatus({ status: 'idle' }))
                },
                style: 'cancel'
            }
        ])
    )
}