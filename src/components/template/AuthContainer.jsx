import Container from "./Container";

export default function AuthContainer({ img = "", children }) {
  return (
    <div className="auth-container">
      <Container>
        <div className="auth-inner">
          <div className="auth-cover-img">
            <img src={img} alt="auth cover bacground" />
          </div>
          <div className="auth-form">{children}</div>
        </div>
      </Container>
    </div>
  );
}
