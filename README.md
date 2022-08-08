# MD TO HTML

<div align=center>
  <img src="https://user-images.githubusercontent.com/72868495/174075357-c0d3ac86-36a2-4b5c-b040-cc58f97c6897.png" />
</div>

## 프로젝트 설명

markdown파일을 html로 변환했을때의 preview를 실시간으로 보여주는 사이트로<br/>
깃허브에서 README파일을 올릴 때 미리보기를 보기 위해서는 탭을 옮겨야만 했던게 너무 불편해서 제작하였습니다.<br/>

Link: [mdtohtml.com](https://www.mdtohtml.com)

## 기술 스택

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" /> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src ="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white"/> <img src ="https://img.shields.io/badge/CSS_modules-000000?style=for-the-badge&logo=css-modules&logoColor=white"/></br>
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" />

## 크로스 브라우징

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge ✔️                                                                                                                                                                                                         | last version ✔️                                                                                                                                                                                                   | last version ✔️                                                                                                                                                                                               | last version ✔️                                                                                                                                                                                                               |

## 컴포넌트 구조

<div align=center>
    <img width="700" src="https://user-images.githubusercontent.com/72868495/183090575-6f6a7539-7c3e-40eb-9394-91104fb8701c.png"/>
</div>

## 기능

1. 치트시트제공
2. 다운로드 기능 구현 (md, html)
3. Add File버튼과 Drag and Drop을 이용하여 파일 업로드를 통해 기존 파일 수정 가능
4. 다크모드 제공

## 특징

- **JS -> TS로 마이그레이션 진행**<br><br>
JS의 타입 안정성을 보완하기 위해 TS로 마이그레이션을 진행하였습니다.<br>
**코드 내부에서 Type Assertion을 최대한 사용하지 않기 위해 필요한 경우 가능한 간결한 조건문을 통해 타입을 체크**하도록 하였으며<br>
**컴포넌트의 경우 React.FC를 타입으로 지정하면 default parameter관련 이슈가 있기 때문에 적용하지 않고 props의 타입을 지정해주는 형식으로 코드를 작성**하였습니다.

---

- **Lighthouse 기준 접근성과 SEO점수 개선 (78, 90 -> 100, 100)**<br><br>
  리팩토링하기 전 접근성과 SEO 부분에서 점수가 낮게 나온 부분이 있어 개선이 필요하였습니다.<br>
  접근성의 경우 input 및 button 태그들에 대해 스크린리더를 위한 aria-label 속성을 적극 사용하였으며<br>
  SEO의 경우 부족한 meta 태그들을 추가함으로써 점수를 개선하였습니다.

<div align=center>
  <img width="500" src="https://user-images.githubusercontent.com/72868495/174076257-cdc3ca86-ac47-4a26-9e06-58b356a1cf6c.png" />
</div>

---

- **다크모드 지원**<br><br>
  헤더의 오른쪽에 다크모드 on off를 위한 버튼을 구현하였으며 **사용자의 다크모드 사용 여부를 localStorage에 저장**합니다.<br>
  따라서 **초기 렌더링시 사용자의 localStorage 및 prefers-color-scheme을 체크하여 사용자가 이전에 다크모드를 사용한 채로 종료했다면 즉시 다크모드가 적용되도록 구현**하였습니다.<br><br>
  > 윈도우10의 다크모드와 브라우저별 다크모드(크롬의 flags, 엣지, 파이어폭스, iOS Safari)설정시 적용 여부 테스트를 완료하였습니다.

---

- **필요한 문법만을 변환하기 위한 플러그인 형태의 react-markdown 라이브러리 사용**<br><br>
  프로젝트의 목적이 깃허브와 같은 결과값을 보여주는것이었기 때문에 **깃허브에서 지원하지 않는 일부 확장문법(Hightlight, Superscript 등)은 지원 할 필요가 없었습니다.**<br><br>
  그래서 불필요하게 큰 라이브러리를 사용하기 보다 postCSS와 같이 플러그인 단위로 원하는 문법만 추가할 수 있기 때문에 **라이브러리의 크기를 최대한 적게 사용할 수 있는 이점이 있는 이 라이브러리를 선택**하게 되었습니다.

---

- **업로드시 파일 제한 (input과 Drag and Drop)**<br><br>
  텍스트가 아닌 유형의 파일은 업로드 될 필요가 없고 **일부 확장자를 가진 파일의 경우 업로드 하게되면 File reader에 의해 브라우저가 멈추는 현상이 발생**한다는것을 알게되었습니다.<br><br>
  특히 txt확장자를 가진 파일의 경우 DataTransfer 객체를 통해 확장자가 인식되지만<br>
  **markdown 파일의 경우 확장자를 인식하지 못했기 때문에 확장자 검사가 필요**했습니다.<br><br>
  그래서 이러한 문제점을 막기 위해 파일 추가시 확장자를 검사할 수 있는 함수를 작성하여<br> Add 버튼과 Drag and Drop을 통한 **업로드시 확장자를 검사하도록 로직을 작성**하였습니다.

---

- **Github Actions를 통한 배포 자동화**<br><br>
  Github Actions와 Netlify를 연동하여 배포 자동화를 처음 적용하였으며 main 브랜치 커밋시에만 배포되도록 설정하였습니다.
