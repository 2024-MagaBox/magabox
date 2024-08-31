import { ChangeEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import { LoginError } from "../contexts/ErrorMsg";
import Postcode from "../components/LSK/organism/Postcode";

const SignupPage = () => {
    const [signup, setSignup] = useState({
        userId: "",
        userPw: "",
        userPWCHK: "",
        userName: "",
        userPhone: "",
        userZipcode: "",
        userAddress1: "",
        userAddress2: "",
    });

    const [errors, setErrors] = useState({
        error_id: false,
        error_Pw: false,
        error_Phone: false,
        error_PWCHK: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        setSignup((prev) => ({
            ...prev,
            [id]: value,
        }));
    };
    console.log(signup)

    // 비밀번호 일치 여부 확인
    if (signup.userPw.length >0 && signup.userPWCHK.length > 0){
        if(signup.userPw.length != signup.userPWCHK.length){
            errors.error_PWCHK = true;
        } else {
            errors.error_PWCHK = signup.userPw === signup.userPWCHK;
        }
    }

    const validateEmail = (value: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailRegex.test(value);
        setErrors((prev) => ({ ...prev, error_id: !isValid }));
        return isValid;
    };

    const validationPassWord = (value: string): boolean => {
        const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/;
        const isValid = passwordRegEx.test(value);
        setErrors((prev) => ({ ...prev, error_pw: !isValid }));

        return isValid;
    };
    const handelsubmit = () => {
        validateEmail(signup.userId);
        validationPassWord(signup.userPw);
    }

    return (
        <div className="w-full h-full flex justify-center py-10">
            <div className="w-[600px]">
                <form onSubmit={handelsubmit}>
                    <div>
                        <TextField
                            id="userId"
                            label="아이디"
                            variant="standard"
                            value={signup.userId}
                            onChange={handleChange}
                            error={errors.error_id}
                            helperText={errors.error_id ? LoginError.E_id : ''}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            id="userPw"
                            label="비밀번호"
                            variant="standard"
                            type="password"
                            autoComplete="current-password"
                            value={signup.userPw}
                            onChange={handleChange}
                            error={errors.error_Pw}
                            helperText={errors.error_Pw ? LoginError.E_pw : errors.error_PWCHK? LoginError.E_pwchk: ''}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            id="userPWCHK"
                            label="비밀번호확인"
                            variant="standard"
                            type="password"
                            autoComplete="current-password"
                            value={signup.userPWCHK}
                            onChange={handleChange}
                            error={errors.error_PWCHK}
                            helperText={errors.error_Pw ? LoginError.E_pw : errors.error_PWCHK? LoginError.E_pwchk: ''}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            id="userName"
                            label="이름"
                            variant="standard"
                            value={signup.userName}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            id="userPhone"
                            label="연락처"
                            variant="standard"
                            value={signup.userPhone}
                            onChange={handleChange}
                            error={errors.error_Phone}
                            helperText={errors.error_Phone ? LoginError.E_phone : ''}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <Postcode 
                            signup={signup}
                            setSignup={setSignup}
                        />
                    </div>        
                    <div>
                        <TextField
                        id="userAddress2"
                        label="상세주소"
                        variant="standard"
                        value={signup.userAddress2}
                        onChange={handleChange}
                        fullWidth
                        />
                    </div>
                    <div className="py-10">
                        <Button
                                variant="contained"
                                color="primary"
                                sx={{ height: 50, fontSize: '1.2rem' }}
                                type="submit"
                                fullWidth
                            >회원가입</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
