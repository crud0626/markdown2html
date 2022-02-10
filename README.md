# MD TO HTML

markdown파일을 html로 변환했을때의 preview를 실시간으로 보여주는 사이트.<br/>
깃허브에서 README파일을 올릴 때 미리보기를 보기 위해서는 탭을 옮겨야만 했던게 너무 불편해서 제작<br/>
Link: [mdtohtml.com](https://www.mdtohtml.com)

## 기술스택

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src ="https://img.shields.io/badge/PostCSS-DD3A0A.svg?&style=for-the-badge&logo=PostCSS&logoColor=#DD3A0A"/></br>
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" />

## 기능

1. 치트시트제공
2. 다운로드 기능 구현 (md, html)
3. 파일 업로드를 통해 기존 파일 수정 가능 (Add버튼 or 드래그 앤 드롭)
4. 다크모드 제공

## 특징

- React Hooks를 이용해 함수형 컴포넌트로 설계
- 커스텀 도메인 사용
- 깃허브와 같은 결과 값 출력 (일부 기능 아직 미지원)
- remark를 베이스로 한 react-markdown 라이브러리 사용
- CSS Module 적용하여 컴포넌트별 CSS 적용
- Netlify와 Github를 연동해 배포 자동화

## 수정예정
- [ ] line-break 관련문제
- [ ] img 관련 문제
- [ ] prefer-colorscheme 속성에 맞춘 다크모드 미리 적용
- [ ] ol태그 nested관련 문제