## 1. 프론트엔드 서비스 시작하기

First , start json-server : <br/>
**`cd frontend-test` ⇒ `cd pages` ⇒ `cd api` ⇒ `npx json-server -p 9000 db.json`**

Next , start the Project : <br/>
**`cd frontend-test` ⇒ `yarn install` ⇒ `yarn dev`**

<br/>

 ## 2. 사용한 기술 스택
`Next.js`, `React`, `Typescript`, `axios`,`Emotion`

<br/>

## 3. 프로젝트 소개
   
### React 페이지 만들기
맛집 리스트를 보여주고 리스트 중 하나의 아이템을 선택하면 팝업으로 상세 설명을 보여줍니다. 
<br/>
            
### 레이아웃 구성
✓ 헤더 - 바디 - 푸터 형식으로 표현
<br /> ✓ 헤더에는 프로젝트이름(`AWESOME FOOD STORE`)과 메뉴(`ABOUT` + `STORE`) 표현
<br /> ✓ 푸터에는 카피라이트 추가(`@ 2020 내이름`)
<br /> &nbsp;&nbsp; - 레이아웃을 따로 만들어서 _app.tsx에 추가해주었습니다.
<br /> &nbsp;&nbsp; - <b>layout 폴더 위치 : src > commons > layout</b>
<br/> <br/>
     
### ABOUT, STORE 페이지와 팝업 구성
✓ ABOUT엔 간단한 프로젝트 소개 문구 표현 (정적 페이지)
<br /> ✓ STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API 사용)
<br/> &nbsp;&nbsp;- `display: grid`와 `grid-template-rows`, `grid-template-columns`를 사용하여 이미지 그리드를 구현하였습니다.
<br />&nbsp;&nbsp; - `@media query`를 이용하여 `반응형 그리드를 구현`하였습니다.
<br /> ✓ STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API 사용)
<br/> ✓ 하나의 아이템을 선택하면 팝업을 띄우고 맛집 이름과 사진, 설명, 홈페이지 바로가기(url이 있을 경우)를 표현
<br/>&nbsp;&nbsp; - description에서 `substring( )`과 `indexOf( )`메서드를 사용해서 LAST ORDER 정보를 줄바꿈하여 보여주었습니다.
<br/> ✓ 팝업 오른쪽 위에 X 버튼을 넣고 누르면 팝업이 닫힘
<br/><br/>

### 에러 페이지 구성
✓ 정의하지 않은 url로 접근시 에러 페이지를 보여주고 5초 후 메인 페이지로 이동
<br/> &nbsp;&nbsp; - 에러 페이지에서 메인페이지로 이동하기 전 <b>5초 타이머</b>를 구현하였습니다.
<br /> &nbsp;&nbsp; - `setInterval()`과 `clearInterval()`을 사용하여 5초 타이머를 만들었고 `useRef()`를 사용해서 5초가 줄어드는 것을 바로 화면에 보여주었습니다.
<br />&nbsp;&nbsp; - `setTimeout( )`을 사용해서 5초 뒤에 메인 페이지로 이동하도록 하였습니다.
<br /> &nbsp;&nbsp; - _app.tsx에서 `axios`와 `router.asPath`그리고 `location.replace( )`를 사용하여 `HTTP 상태코드가 404번일 때` 
<br/> &nbsp;&nbsp;&nbsp;&nbsp; 에러 페이지로 가도록 설정해주었습니다.
<br />&nbsp;&nbsp; - `시도했던 방법`: router.push를 이용하니 <b>[Error: Abort fetching component for route:]</b>의 에러가 났고 
<br/> &nbsp;&nbsp;&nbsp;&nbsp; useState나 useContext도 사용해보고 Timer를 따로 컴포넌트로 빼는 등의 여러가지 방법을 시도해보았지만 해결이 되지 않았습니다.
