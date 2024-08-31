import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from "react-router-dom";
import { LoginError } from "../contexts/ErrorMsg";
import useLoginStore from "../stores/login";

const LoginPage = () => {
    const navigate = useNavigate();
    const { loginId, setLoginId } = useLoginStore(); 
    const [userId, setUserId] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");
    const [errors, setErrors] = useState<{ error_id: boolean, error_pw: boolean }>({
        error_id: false,
        error_pw: false,
    });
    const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]);
    const [rememberId, setRememberId] = useState<boolean>(false);

    useEffect(() => {
        if (cookies.rememberUserId !== undefined) {
            setUserId(cookies.rememberUserId);
            setRememberId(true);
        } else {
            removeCookie('rememberUserId');
        }
    }, [cookies, removeCookie]);

    const handleUserid = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setErrors((prev) => ({ ...prev, error_id: false }));
        }
        setUserId(e.target.value);
    };

    const handleUserpw = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setErrors((prev) => ({ ...prev, error_pw: false }));
        }
        setUserPw(e.target.value);
    };

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberId(e.target.checked);
    };

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isEmailValid = validateEmail(userId);
        const isPasswordValid = validationPassWord(userPw);


        // 최종 유효성 검사를 통과한 경우에만 로그인 진행
        if (!isEmailValid && !isPasswordValid) {
            if (userId === 'admin' && userPw === 'qwer') {
                if (rememberId) {
                    setCookie('rememberUserId', userId, { path: '/' });
                } else {
                    removeCookie('rememberUserId');
                }
                setLoginId(userId);
                navigate('/'); // 페이지 리다이렉션
            }
        }
    };

    return (
        <div className="w-full h-full border flex justify-center items-center">
            <div className="w-[500px] h-[400px] p-10 rounded-md border">
                <form onSubmit={handleSubmit}>
                    <div className="pb-5">
                        <TextField
                            id="ID-basic"
                            label="아이디"
                            variant="standard"
                            value={userId}
                            onChange={handleUserid}
                            error={errors.error_id}
                            helperText={errors.error_id ? LoginError.E_id : ''}
                            fullWidth
                        />
                    </div>
                    <div className="pb-5">
                        <TextField
                            id="standard-password-input"
                            label="비밀번호"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            onChange={handleUserpw}
                            value={userPw}
                            error={errors.error_pw}
                            helperText={errors.error_pw ? LoginError.E_pw : ''}
                            fullWidth
                        />
                    </div>
                    <div>
                        <FormControlLabel control={<Checkbox checked={rememberId} onChange={handleChecked} />} label="ID 저장" />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{  height: 50, fontSize: '1.2rem' }}
                            type="submit"
                            fullWidth
                        >로그인</Button>
                    </div>
                    <div className="flex justify-between py-5">
                        <Link to={"/userfind"} className="w-[130px] text-center">ID/PW 찾기</Link>
                        <span>|</span>
                        <Link to={"/signup"} className="w-[130px] text-center" >회원가입</Link>
                        <span>|</span>
                        <Link to={"/"} className="w-[130px] text-center">비회원예매확인</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
