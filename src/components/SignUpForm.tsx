import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <form action="/post" method="POST" className="form form--lg">
      <h1 className="form__title">회원가입</h1>
      <div className="form__block">
        <label htmlFor="email">이메일</label>
        <input type="text" name="email" id="email" required />
      </div>
      <div className="form__block">
        <label htmlFor="password">비밀번호</label>
        <input type="text" name="password" id="password" required />
      </div>
      <div className="form__block">
        <label htmlFor="password_confirm">비밀번호 확인</label>
        <input
          type="text"
          name="password_confirm"
          id="password_confirm"
          required
        />
      </div>
      <div className="form__block">
        계정이 이미 있으신가요?
        <Link to={"/login"} className="form__link">
          로그인하기
        </Link>
        {/* <label htmlFor="content">내용</label>
        <textarea name="content" id="content" required /> */}
      </div>
      <div className="form__block">
        <input type="submit" value="회원가입" className="form__btn--submit" />
      </div>
    </form>
  );
};

export default SignUpForm;
