export interface Profile {
  name: string;
  role: string;
  tagline: string;
  intro: string;
  email: string;
  github: string;
  githubUrl: string;
  liveSite: { label: string; url: string };
}

export interface Stat {
  n: number;
  suffix: string;
  label: string;
}

export interface AboutItem {
  key: string;
  title: string;
  desc: string;
}

export interface Award {
  date: string;
  title: string;
  org: string;
}

export interface Cert {
  date: string;
  title: string;
  org: string;
}

export interface SchoolingItem {
  period: string;
  title: string;
  note: string;
}

export interface TrainingItem {
  period: string;
  title: string;
  desc: string;
  bullets: string[];
  result?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ProjectShot {
  id: string;
  cap: string;
}

export interface Project {
  id: string;
  no: string;
  title: string;
  featured: boolean;
  sub: string;
  period: string;
  role: string;
  team: string;
  stack: string[];
  bullets: string[];
  result: string;
  link: string;
  shots: ProjectShot[];
}

export interface ConsoleData {
  title: string;
  logs: string[];
}

export const DATA = {
  profile: {
    name: "박태경",
    role: "웹 프론트엔드 · 풀스택 개발",
    tagline: "프론트엔드를 주력으로 하는 풀스택 개발자",
    intro:
      "안정적으로 동작하는 화면을 설계하고, 흩어진 데이터를 신뢰할 수 있는 형태로 사용자에게 전달합니다. 실제 사용자와 실서비스 배포 경험을 기준으로 개발합니다.",
    email: "your@email.com",
    github: "github.com/username",
    githubUrl: "https://github.com/username",
    liveSite: { label: "stocket.site", url: "https://www.stocket.site/" },
  } satisfies Profile,

  stats: [
    { n: 8, suffix: "", label: "Projects" },
    { n: 5, suffix: "", label: "Awards" },
    { n: 25, suffix: "+", label: "Tech Stack" },
    { n: 1500, suffix: "", label: "실 사용자" },
  ] satisfies Stat[],

  about: [
    {
      key: "SHIP",
      title: "만드는 데서 끝내지 않고 배포까지 책임진다",
      desc: "실 사용자 1,500명이 쓴 서비스와 AWS 실서비스 운영까지, 화면을 세상에 내보내고 유지하는 전 과정을 경험했습니다.",
    },
    {
      key: "MEASURE",
      title: "느낌이 아니라 수치로 개선한다",
      desc: "병렬 API 호출과 캐싱으로 응답 속도를 약 50% 줄이는 등, 개선을 체감이 아닌 지표로 확인하고 판단합니다.",
    },
    {
      key: "OWN THE STACK",
      title: "프론트에 머무르지 않고 데이터 흐름까지 설계한다",
      desc: "화면 뒤의 데이터 파이프라인·DB·배포까지 직접 다루며, 프론트엔드를 시스템 전체 관점에서 바라봅니다.",
    },
    {
      key: "VERIFY",
      title: "잘 나온 결과일수록 먼저 의심한다",
      desc: "지표가 좋아 보일수록 실제 개선인지 착시인지부터 가리고, 통제된 조건에서 다시 확인한 뒤 결론을 냅니다.",
    },
  ] satisfies AboutItem[],

  awards: [
    { date: "2025.09", title: "서경대학교 교내 해커톤(SKTHON) 대상", org: "대학혁신추진사업단" },
    { date: "2026.02", title: "UMC 9기 데모데이 AWS 특별상", org: "Make Us Challenge" },
    { date: "2026.02", title: "UMC 9기 Web 파트장 공로장", org: "Make Us Challenge" },
    { date: "2024.06", title: "멋쟁이사자처럼 12기 중앙 해커톤 우수상", org: "멋쟁이사자처럼 대학" },
    { date: "2022–26", title: "성적 우수·일반 장학금 3회 수여", org: "서경대학교 학생처" },
  ] satisfies Award[],

  certs: [
    { date: "2026.06", title: "정보처리기사", org: "한국산업인력공단" },
    { date: "2026.03", title: "SQL 개발자 (SQLD)", org: "한국데이터산업진흥원" },
    { date: "2025.10", title: "리눅스마스터 2급 필기", org: "한국정보통신진흥협회" },
  ] satisfies Cert[],

  schooling: [
    {
      period: "2022.03–2026.08",
      title: "서경대학교 컴퓨터공학과",
      note: "졸업예정 · 학점 3.77 / 4.5",
    },
    { period: "2019.03–2022.01", title: "진영여자고등학교 졸업", note: "" },
  ] satisfies SchoolingItem[],

  education: [
    {
      period: "2026.06–2026.08",
      title: "웹퍼블리싱 & UI개발 전문가 과정 (480h)",
      desc: "서울시 × KORFIN(더인) 주관 · 핀테크 전문 인재 양성 산업 협회",
      bullets: ["핀테크 산업 이해 및 디지털 금융 서비스 관련 실무 교육", "Spring Boot · React 기반 풀스택 개발"],
      result: "핀테크 서비스 구조와 금융 IT 산업에 대한 이해도 향상",
    },
    {
      period: "2025.09–2026.02",
      title: "UMC 9기 Server(Node.js) 주니어 코스",
      desc: "Make Us Challenge · 실제 웹 서비스를 런칭하는 IT 연합 대학생 단체",
      bullets: [
        "Node.js · Express 기반 RESTful API 서버 설계",
        "PostgreSQL 스키마 설계 및 데이터 연동",
        "PM · 디자이너 · 개발자와 협업 및 API 명세서 작성",
      ],
      result: "UMC 9기 데모데이 AWS 특별상 수상",
    },
    {
      period: "2025.03–2025.12",
      title: "멋쟁이사자처럼 13기 프론트엔드 트랙",
      desc: "전국 최대 규모의 대학생 IT 창업 · 개발 동아리",
      bullets: [
        "프론트엔드 운영진 — 입문자 대상 React 강의 진행",
        "매주 GitHub 과제 체크 및 1:1 코드 리뷰",
        "해커톤 대비 맞춤형 기술 멘토링 · 집중 스터디 운영",
      ],
      result: "운영진 활동으로 리더십 · 커뮤니케이션 역량 강화",
    },
    {
      period: "2024.03–2024.12",
      title: "멋쟁이사자처럼 12기 프론트엔드 트랙",
      desc: "전국 최대 규모의 대학생 IT 창업 · 개발 동아리",
      bullets: [
        "프론트엔드 기초 및 React 라이브러리 학습",
        "Git/GitHub · Notion 기반 팀 개발 워크플로우 습득",
        "중앙 해커톤 참여 — 웹 서비스 MVP 최종 빌드 · 배포",
      ],
      result: "멋사 12기 중앙 해커톤 우수상 수상",
    },
  ] satisfies TrainingItem[],

  activities: [
    {
      period: "2026.05–현재",
      title: "모두의 창업 프로젝트 1기",
      desc: "창업 서비스 출시를 지원하는 전국 단위 창업 지원 프로그램",
      bullets: [
        "창업 지원 프로그램 선정",
        "전문가 멘토링 및 창업 교육 참여",
        "서비스 사업 모델 검증 및 고도화 수행",
        "앱스토어 출시를 목표로 서비스 런칭 준비",
      ],
    },
    {
      period: "2026.03–현재",
      title: "2026 한이음 드림업",
      desc: "대학생과 현업 전문가가 함께 수행하는 ICT 산학협력 프로젝트",
      bullets: [
        "Multi-Agent 기반 AI로 소송 지원 플랫폼 프론트엔드 개발",
        "현업 멘토와 정기 멘토링을 통해 서비스 기획·개발 방향 검토",
        "React 기반 UI 구현 및 백엔드 API 연동",
        "산업 현장의 개발 프로세스 및 협업 방식 학습",
      ],
    },
    {
      period: "2025.09–2025.12",
      title: "제15회 ICT멜팅플렉스 · 피우다",
      desc: "사회적 임팩트 조직의 활동을 지원하는 IT 솔루션 개발 공모",
      bullets: [
        "사회적 기업 '다시입다연구소'의 의류 교환 디지털 전환 프로젝트 수행",
        "지속가능한 의생활 문화 확산을 위한 환경 임팩트 측정 플랫폼 개발",
        "본선 진출 및 서비스 발표 진행",
        "심사위원 질의응답을 통해 서비스 가치·기술 구현 방안 설명",
      ],
    },
    {
      period: "2025.12–2026.02",
      title: "UMC 9기 데모데이",
      desc: "전국 28개 대학 연합 프로젝트 최종 발표 및 시연",
      bullets: ["서비스 시연 부스 운영", "심사위원 및 참가자 질의응답 진행", "AWS 특별상 수상"],
    },
    {
      period: "2024.07–2025.08",
      title: "멋쟁이사자처럼 중앙 해커톤 (12·13기)",
      desc: "전국 최대 규모 IT 연합 해커톤",
      bullets: [
        "2년 연속 중앙 해커톤 참가 및 협업 프로젝트 수행",
        "서비스 기획·MVP 개발·발표 및 부스 운영 경험",
        "12기 중앙 해커톤 우수상 수상",
        "13기 중앙 해커톤 247팀 중 상위 10% 기록",
      ],
    },
  ] satisfies TrainingItem[],

  skills: [
    { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java"] },
    {
      label: "Frontend",
      items: ["React.js", "Next.js", "Zustand", "TanStack Query", "Tailwind CSS", "Styled-Components"],
    },
    { label: "Backend", items: ["Node.js", "Spring Boot", "FastAPI", "Swagger"] },
    { label: "Database", items: ["PostgreSQL", "MySQL", "Redis"] },
    { label: "Infra", items: ["AWS EC2", "Docker", "GitHub Actions"] },
    { label: "Env / Build", items: ["Linux", "Turborepo", "Yarn Berry"] },
    { label: "AI Tools", items: ["Claude Code", "ChatGPT"] },
    { label: "Collaboration", items: ["Git", "GitHub", "Notion", "Discord", "Figma"] },
  ] satisfies SkillGroup[],

  projects: [
    {
      id: "stocket",
      no: "01",
      title: "Stocket",
      featured: true,
      sub: "흩어진 기업 재무정보와 주가를 한곳에서 비교·분석해 투자 결정을 돕는 서비스",
      period: "2026.03 – 08",
      role: "풀스택 개발",
      team: "1인 (개인 · 졸업 프로젝트)",
      stack: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS EC2",
        "GitHub Actions",
        "Turborepo",
        "Yarn Berry",
      ],
      bullets: [
        "기업 재무지표·주가를 나란히 비교하는 기업 비교 페이지 구현",
        "Recharts로 레이더·라인·버블 차트 데이터 시각화 구현",
        "DART · KIS API 병렬 호출과 Redis 캐싱으로 응답 속도 최적화",
        "Hot/Cold 데이터 분리 전략으로 30일 이전 데이터 자동 정리",
        "GitHub Actions Cron 기반 주가·재무 데이터 자동 동기화 구축",
        "Turborepo 모노레포로 프론트·백엔드·데이터 파이프라인 통합 관리",
      ],
      result:
        "병렬 API 호출로 데이터 조회 속도 약 50% 개선 · Hot/Cold 관리로 DB 용량 70–80% 절감 · AWS EC2 기반 실서비스 배포·운영",
      link: "https://www.stocket.site/",
      shots: [
        { id: "stocket-1", cap: "screen 1" },
        { id: "stocket-2", cap: "screen 2" },
        { id: "stocket-3", cap: "screen 3" },
      ],
    },
    {
      id: "blooming",
      no: "02",
      title: "Blooming",
      featured: true,
      sub: "서경대학교 축제 공식 사이트 · 실 사용자 1,500명",
      period: "2025.04 – 05",
      role: "프론트엔드 개발",
      team: "8인",
      stack: ["React", "TypeScript", "TanStack Query"],
      bullets: [
        "실 사용자 1,500명 규모의 축제 공식 사이트 프론트엔드 개발",
        "TanStack Query 기반 서버 상태 관리 및 데이터 캐싱",
        "8인 협업 프로젝트에서 프론트엔드 파트 담당",
      ],
      result: "",
      link: "",
      shots: [
        { id: "blooming-1", cap: "screen 1" },
        { id: "blooming-2", cap: "screen 2" },
        { id: "blooming-3", cap: "screen 3" },
      ],
    },
    {
      id: "p3",
      no: "03",
      title: "프로젝트 03",
      featured: false,
      sub: "제목·설명을 입력해 주세요 — 이후 업데이트 예정",
      period: "—",
      role: "입력 필요",
      team: "입력 필요",
      stack: [],
      bullets: ["상세 내용을 채워 넣을 수 있습니다."],
      result: "",
      link: "",
      shots: [
        { id: "p3-1", cap: "screen 1" },
        { id: "p3-2", cap: "screen 2" },
        { id: "p3-3", cap: "screen 3" },
      ],
    },
    {
      id: "p4",
      no: "04",
      title: "프로젝트 04",
      featured: false,
      sub: "제목·설명을 입력해 주세요 — 이후 업데이트 예정",
      period: "—",
      role: "입력 필요",
      team: "입력 필요",
      stack: [],
      bullets: ["상세 내용을 채워 넣을 수 있습니다."],
      result: "",
      link: "",
      shots: [
        { id: "p4-1", cap: "screen 1" },
        { id: "p4-2", cap: "screen 2" },
        { id: "p4-3", cap: "screen 3" },
      ],
    },
    {
      id: "p5",
      no: "05",
      title: "프로젝트 05",
      featured: false,
      sub: "제목·설명을 입력해 주세요 — 이후 업데이트 예정",
      period: "—",
      role: "입력 필요",
      team: "입력 필요",
      stack: [],
      bullets: ["상세 내용을 채워 넣을 수 있습니다."],
      result: "",
      link: "",
      shots: [
        { id: "p5-1", cap: "screen 1" },
        { id: "p5-2", cap: "screen 2" },
        { id: "p5-3", cap: "screen 3" },
      ],
    },
    {
      id: "p6",
      no: "06",
      title: "프로젝트 06",
      featured: false,
      sub: "제목·설명을 입력해 주세요 — 이후 업데이트 예정",
      period: "—",
      role: "입력 필요",
      team: "입력 필요",
      stack: [],
      bullets: ["상세 내용을 채워 넣을 수 있습니다."],
      result: "",
      link: "",
      shots: [
        { id: "p6-1", cap: "screen 1" },
        { id: "p6-2", cap: "screen 2" },
        { id: "p6-3", cap: "screen 3" },
      ],
    },
    {
      id: "p7",
      no: "07",
      title: "프로젝트 07",
      featured: false,
      sub: "제목·설명을 입력해 주세요 — 이후 업데이트 예정",
      period: "—",
      role: "입력 필요",
      team: "입력 필요",
      stack: [],
      bullets: ["상세 내용을 채워 넣을 수 있습니다."],
      result: "",
      link: "",
      shots: [
        { id: "p7-1", cap: "screen 1" },
        { id: "p7-2", cap: "screen 2" },
        { id: "p7-3", cap: "screen 3" },
      ],
    },
    {
      id: "p8",
      no: "08",
      title: "프로젝트 08",
      featured: false,
      sub: "제목·설명을 입력해 주세요 — 이후 업데이트 예정",
      period: "—",
      role: "입력 필요",
      team: "입력 필요",
      stack: [],
      bullets: ["상세 내용을 채워 넣을 수 있습니다."],
      result: "",
      link: "",
      shots: [
        { id: "p8-1", cap: "screen 1" },
        { id: "p8-2", cap: "screen 2" },
        { id: "p8-3", cap: "screen 3" },
      ],
    },
  ] satisfies Project[],

  // Hero 오른쪽 라이브 콘솔 (Stocket 실서비스 관제 컨셉)
  console: {
    title: "STOCKET // LIVE",
    logs: [
      "GET /api/stocks 200",
      "sync market-data OK",
      "DART API fetch 200",
      "cache HIT redis",
      "deploy healthcheck OK",
      "GET /compare/005930 200",
      "cron: price-sync done",
    ],
  } satisfies ConsoleData,
};
