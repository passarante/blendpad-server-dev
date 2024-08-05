import axios from 'axios';
import Querystring from 'query-string';
import api from '.';




export async function getUser(dispatch: any, address: any) {
    const data = await api.post(`/authentication/get-user`,
        Querystring.stringify({ address: address })
    )
        .then(async res => {
            dispatch({ type: 'FETCH_USER_SUCCESS', payload: data.user });
        })
        .catch(err => {
            dispatch({ type: 'FETCH_USER_SUCCESS', payload: null });
        });
}


export async function loginUser(dispatch: any, address: any, signer: any) {
    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        try {
            let token = localStorage.getItem('Token');
            console.log("getting signature");

            const signature = await signer.signMessage(
                `I am signing to blendpad for first time, I Agree with Terms And Conditions`
            );

            if (!signature) { console.log("signature not found"); return; }
            const { data } = await api.post(`/authentication/sign-in`,
                Querystring.stringify({ address: address, signature: signature })
            );
            const responseToken = data.token;
            console.log("responseTokend", responseToken);
            if (responseToken) {
                localStorage.setItem('responseToken', responseToken);
                // dispatch({ type: 'LOGIN_SUCCESS', payload: responseToken });
                console.log(
                    'get user 2'
                )
                await getUser(dispatch, address);
                return responseToken;
            } else {
                console.log("token not found");
            }
        } catch (err) {
            dispatch({ type: 'LOGIN_ERROR', error: err });
            console.log(err);
        }
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
        console.log(error);
    }
}

