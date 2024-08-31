import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

interface LinkTabProps {
  label: string;
  href: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const UserFindPage = () => {
  const [tab, setTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const renderContent = () => {
    switch (tab) {
      case 0:
        return <div>아이디 찾기 내용</div>;
      case 1:
        return <div>비밀번호 찾기 내용</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <h1>아이디 / 비밀번호 찾기</h1>
      </div>
      <Tabs
        value={tab}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
      >
        <LinkTab label="아이디 찾기" href="/find-id" />
        <LinkTab label="비밀번호 찾기" href="/find-password" />
      </Tabs>
      <div>
        {renderContent()}
      </div>
    </div>
  );
}

export default UserFindPage;
