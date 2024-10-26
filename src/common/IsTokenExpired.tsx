import jwt_decode from 'jwt-decode';

type DecodedToken = {
    exp?: number; // optional로 변경
    [key: string]: any; // 다른 프로퍼티를 위해 추가
};

type PropsType = {
    token: string | null; // 토큰을 props로 받음
    children: React.ReactNode; // React 노드 타입
}

const IsTokenExpired = ({ token, children }: PropsType) => {
    const isExpired = () => {
        if (!token) return true; // 토큰이 없으면 만료된 것으로 간주

        const decoded = jwt_decode(token) as DecodedToken; // 타입 단언
        const currentTime = Date.now() / 1000; // 현재 시간 (초 단위)

        return decoded.exp ? decoded.exp < currentTime : true; // 만료 시간 비교
    }

    if (isExpired()) {
        return <div>토큰이 만료되었습니다.</div>; // 만료 시 메시지
    }

    return <>{children}</>; // 만료되지 않았다면 자식 요소 렌더링
}

export default IsTokenExpired;
