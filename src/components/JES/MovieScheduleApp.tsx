import React, { useState, useEffect } from 'react';
import '../JES/style.css';

const movies: string[] = ['에이리언: 로물루스', '행복의 나라', '파일럿', '늘봄가든', '필사의 추격', '빅토리', '가필드 더 무비', '시링의 하츄핑'];
const regions: string[] = ['서울', '경기', '인천', '대전', '부산', '광주', '강원', '제주'];

interface TheatersType {
  [key: string]: string[];
}

const theaters: TheatersType = {
  서울: ['강남', '종로', '강동', '동대문', '마곡', '성수', '센트럴', '신촌', '코엑스', '홍대'],
  경기: ['수원', '성남', '고양스타필드', '남양주', '동탄', '분당', '수원', '킨텍스'],
  인천: ['검단', '송도', '영종', '영종하늘도시', '인천논현', '청라지젤'],
  대전: ['공주', '논산', '대전', '세종', '천안', '오창', '진천'],
  부산: ['부산대점', '남포', '대구세븐밸리', '포항', '마산', '울산', '창원', '해운대'],
  광주: ['광주상무', '순천', '전대', '전주객사'],
  강원: ['남춘천', '속초', '원주혁신', '춘천석사'],
  제주: ['제주삼화', '제주서귀포', '제주아라'],
};

interface TimeSchedule {
  time: string;
  hall: string;
  seats: string;
}

interface TimesType {
  [key: string]: TimeSchedule[];
}

const times: TimesType = {
  // 서울 지역
  "강남": [
    { time: "10:00", hall: "1관 [Standard]", seats: "10/50" },
    { time: "13:00", hall: "2관 [Dolby]", seats: "15/60" },
    { time: "16:00", hall: "3관 [IMAX]", seats: "5/40" },
  ],
  "강동": [
    { time: "11:30", hall: "1관 [Dolby]", seats: "20/60" },
    { time: "14:30", hall: "2관 [Standard]", seats: "10/50" },
    { time: "17:30", hall: "3관 [IMAX]", seats: "8/40" },
  ],
  "군자": [
    { time: "12:00", hall: "1관 [Standard]", seats: "12/50" },
    { time: "15:00", hall: "2관 [Dolby]", seats: "10/60" },
    { time: "18:00", hall: "3관 [IMAX]", seats: "2/40" },
  ],
  "더 부티크 목동현대백화점": [
    { time: "14:35", hall: "107호 [Laser]", seats: "2/44" },
    { time: "16:10", hall: "컴포트E 106호 [Laser]", seats: "29/115" },
    { time: "17:20", hall: "108호 [Laser]", seats: "35/86" },
    { time: "18:40", hall: "컴포트E 106호 [Laser]", seats: "58/115" },
    { time: "20:00", hall: "컴포트E 102호 [Laser]", seats: "99/135" },
  ],
  // 경기도 지역
  "수원": [
    { time: "09:30", hall: "1관 [Standard]", seats: "30/50" },
    { time: "12:30", hall: "2관 [Dolby]", seats: "20/60" },
    { time: "15:30", hall: "3관 [IMAX]", seats: "10/40" },
  ],
  "성남": [
    { time: "10:00", hall: "1관 [Standard]", seats: "15/50" },
    { time: "13:00", hall: "2관 [Dolby]", seats: "30/60" },
    { time: "16:00", hall: "3관 [IMAX]", seats: "5/40" },
  ],
  "고양스타필드": [
    { time: "11:00", hall: "1관 [Standard]", seats: "25/50" },
    { time: "14:00", hall: "2관 [Dolby]", seats: "10/60" },
    { time: "17:00", hall: "3관 [IMAX]", seats: "3/40" },
  ],
  // 인천 지역
  "검단": [
    { time: "10:00", hall: "1관 [Standard]", seats: "12/50" },
    { time: "13:00", hall: "2관 [Dolby]", seats: "5/60" },
    { time: "16:00", hall: "3관 [IMAX]", seats: "1/40" },
  ],
  "송도": [
    { time: "11:00", hall: "1관 [Standard]", seats: "20/50" },
    { time: "14:00", hall: "2관 [Dolby]", seats: "30/60" },
    { time: "17:00", hall: "3관 [IMAX]", seats: "5/40" },
  ],
  "영종": [
    { time: "10:30", hall: "1관 [Standard]", seats: "15/50" },
    { time: "13:30", hall: "2관 [Dolby]", seats: "25/60" },
    { time: "16:30", hall: "3관 [IMAX]", seats: "8/40" },
  ],
  // 대전 지역
  "공주": [
    { time: "09:00", hall: "1관 [Standard]", seats: "10/50" },
    { time: "12:00", hall: "2관 [Dolby]", seats: "15/60" },
    { time: "15:00", hall: "3관 [IMAX]", seats: "20/40" },
  ],
  "논산": [
    { time: "10:30", hall: "1관 [Standard]", seats: "5/50" },
    { time: "13:30", hall: "2관 [Dolby]", seats: "12/60" },
    { time: "16:30", hall: "3관 [IMAX]", seats: "3/40" },
  ],
  "대전": [
    { time: "11:00", hall: "1관 [Standard]", seats: "15/50" },
    { time: "14:00", hall: "2관 [Dolby]", seats: "20/60" },
    { time: "17:00", hall: "3관 [IMAX]", seats: "25/40" },
  ],
  // 부산 지역
  "부산대점": [
    { time: "10:00", hall: "1관 [Standard]", seats: "5/50" },
    { time: "13:00", hall: "2관 [Dolby]", seats: "10/60" },
    { time: "16:00", hall: "3관 [IMAX]", seats: "15/40" },
  ],
  "남포": [
    { time: "11:00", hall: "1관 [Standard]", seats: "10/50" },
    { time: "14:00", hall: "2관 [Dolby]", seats: "25/60" },
    { time: "17:00", hall: "3관 [IMAX]", seats: "5/40" },
  ],
  "대구세븐밸리": [
    { time: "12:00", hall: "1관 [Standard]", seats: "8/50" },
    { time: "15:00", hall: "2관 [Dolby]", seats: "15/60" },
    { time: "18:00", hall: "3관 [IMAX]", seats: "2/40" },
  ],
  // 광주 지역
  "광주상무": [
    { time: "10:00", hall: "1관 [Standard]", seats: "7/50" },
    { time: "13:00", hall: "2관 [Dolby]", seats: "18/60" },
    { time: "16:00", hall: "3관 [IMAX]", seats: "10/40" },
  ],
  "순천": [
    { time: "11:00", hall: "1관 [Standard]", seats: "5/50" },
    { time: "14:00", hall: "2관 [Dolby]", seats: "15/60" },
    { time: "17:00", hall: "3관 [IMAX]", seats: "12/40" },
  ],
  "전대": [
    { time: "12:00", hall: "1관 [Standard]", seats: "20/50" },
    { time: "15:00", hall: "2관 [Dolby]", seats: "25/60" },
    { time: "18:00", hall: "3관 [IMAX]", seats: "3/40" },
  ],
  // 강원 지역
  "남춘천": [
    { time: "10:30", hall: "1관 [Standard]", seats: "30/50" },
    { time: "13:30", hall: "2관 [Dolby]", seats: "15/60" },
    { time: "16:30", hall: "3관 [IMAX]", seats: "5/40" },
  ],
  "속초": [
    { time: "09:30", hall: "1관 [Standard]", seats: "10/50" },
    { time: "12:30", hall: "2관 [Dolby]", seats: "20/60" },
    { time: "15:30", hall: "3관 [IMAX]", seats: "8/40" },
  ],
  "원주혁신": [
    { time: "11:30", hall: "1관 [Standard]", seats: "5/50" },
    { time: "14:30", hall: "2관 [Dolby]", seats: "10/60" },
    { time: "17:30", hall: "3관 [IMAX]", seats: "12/40" },
  ],
  // 제주 지역
  "제주삼화": [
    { time: "10:00", hall: "1관 [Standard]", seats: "20/50" },
    { time: "13:00", hall: "2관 [Dolby]", seats: "10/60" },
    { time: "16:00", hall: "3관 [IMAX]", seats: "7/40" },
  ],
  "제주서귀포": [
    { time: "11:00", hall: "1관 [Standard]", seats: "15/50" },
    { time: "14:00", hall: "2관 [Dolby]", seats: "20/60" },
    { time: "17:00", hall: "3관 [IMAX]", seats: "9/40" },
  ],
  "제주아라": [
    { time: "12:00", hall: "1관 [Standard]", seats: "5/50" },
    { time: "15:00", hall: "2관 [Dolby]", seats: "25/60" },
    { time: "18:00", hall: "3관 [IMAX]", seats: "3/40" },
  ],
};

const MovieScheduleApp: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<string>(movies[0]);
  const [selectedRegion, setSelectedRegion] = useState<string>(regions[0]);
  const [selectedTheater, setSelectedTheater] = useState<string>(theaters[regions[0]][0]);
  const [selectedTime, setSelectedTime] = useState<string>('');

  // 지역이 변경될 때 마다 해당 지역의 첫 번째 영화관과 첫 번째 시간을 선택하도록 설정
  useEffect(() => {
    const newTheater = theaters[selectedRegion][0];
    setSelectedTheater(newTheater);
  }, [selectedRegion]);

  // 영화관이 변경될 때 마다 첫 번째 시간을 선택하도록 설정
  useEffect(() => {
    const newTime = times[selectedTheater] ? times[selectedTheater][0].time : '';
    setSelectedTime(newTime);
  }, [selectedTheater]);

  // 컴포넌트가 처음 렌더링될 때 초기 상태 설정
  useEffect(() => {
    const initialTheater = theaters[selectedRegion][0];
    const initialTime = times[initialTheater] ? times[initialTheater][0].time : '';
    setSelectedTheater(initialTheater);
    setSelectedTime(initialTime);
  }, []);

  return (
    <div className="movie-schedule-app" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      {/* 상단 헤더 */}
      <div className="movie-schedule-header" style={{ width: '100%', paddingBottom: '10px', marginBottom: '20px' }}>
        <h2>영화 스케줄</h2>
      </div>

      {/* 전체 컨테이너: Flex를 사용하여 가로 정렬 */}
      <div className="movie-schedule-container" style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        {/* 영화 목록 */}
        <div className="movie-schedule-section" style={{ flex: 1 }}>
          <h3>영화</h3>
          <ul className="movie-list">
            {movies.map((movie) => (
              <li
                key={movie}
                onClick={() => setSelectedMovie(movie)}
                style={{ backgroundColor: movie === selectedMovie ? '#ddd' : '#f0f0f0', cursor: 'pointer', padding: '5px', marginBottom: '5px' }}
              >
                {movie}
              </li>
            ))}
          </ul>
        </div>

        {/* 지역 목록 */}
        <div className="movie-schedule-section" style={{ flex: 1 }}>
          <h3>지역</h3>
          <ul className="region-list">
            {regions.map((region) => (
              <li
                key={region}
                onClick={() => setSelectedRegion(region)}
                style={{ backgroundColor: region === selectedRegion ? '#ddd' : '#f0f0f0', cursor: 'pointer', padding: '5px', marginBottom: '5px' }}
              >
                {region}
              </li>
            ))}
          </ul>
        </div>

        {/* 영화관 목록 */}
        <div className="movie-schedule-section" style={{ flex: 1 }}>
          <h3>영화관 지점</h3>
          <ul className="theater-list">
            {theaters[selectedRegion].map((theater) => (
              <li
                key={theater}
                onClick={() => setSelectedTheater(theater)}
                style={{ backgroundColor: theater === selectedTheater ? '#ddd' : '#f0f0f0', cursor: 'pointer', padding: '5px', marginBottom: '5px' }}
              >
                {theater}
              </li>
            ))}
          </ul>
        </div>

        {/* 시간 목록 */}
        <div className="movie-schedule-section" style={{ flex: 2 }}>
          <h3>시간</h3>
          <ul className="schedule-list">
            {times[selectedTheater]?.map((schedule) => (
              <li
                key={schedule.time}
                onClick={() => setSelectedTime(schedule.time)}
                style={{ backgroundColor: schedule.time === selectedTime ? '#ddd' : '#f0f0f0', cursor: 'pointer', padding: '5px', marginBottom: '5px' }}
              >
                <div>{schedule.time}</div>
                <div>{schedule.hall}</div>
                <div>{schedule.seats}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieScheduleApp;
