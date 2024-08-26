import { ChangeEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import { LoginError } from "../contexts/ErrorMsg";

const SignupPage = () => {
    const [signup, setSignup] = useState({
        userId : "",
        userPw : "",
        userName     : "",
        userPhone    : "",
        userZipcode  : "",
        userAddress1 : "",
        userAddress2 : "",
    })
    const [errors, setErrors] = useState({
        error_id : false,
        error_Pw : false,
        error_Name : false, 
    })

    const handelChagne = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'ID-basic'){
            setSignup((prev)=>({...prev , userId : e.target.value}))
        }
    }
    return (
        <div>
            <div>
            <TextField
                            id="ID-basic"
                            label="아이디"
                            variant="standard"
                            value={signup.userName}
                            onChange={handelChagne}
                            error={errors.error_id}
                            helperText={errors.error_id ? LoginError.E_id : ''}
                            fullWidth
                        />
            </div>
        </div>
    )
}

export default SignupPage;