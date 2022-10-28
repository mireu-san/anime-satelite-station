# Anime Satelite Station
- Used Jikan anime api v4 (based on myanimelist.com)

# Limitation (potential to-do-list)
- 추가 CSS 작업 진행 고려 (예: wrapping, grid).
- searchBar 에 input 값 입력 시, responding time 부문에서 지연이 발생함을 확인. 잠재적으로 api 서버 반응 속도 또는 useEffect 의심.
  - 해결법(비권장): 자체 api.json 을 로컬 상에 생성해서 출력. 단, 이러면 외부 온라인 api 를 대상으로 fetch 를 사용 할 일이 없음.

# What else can do for future project
  - react query 와 axios, fetch api 조합 고려. (Anime Satelite Station 프로젝트는 기초 기반적 성격을 내포 - useEffect, state, fetch)