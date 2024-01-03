import { Link } from "react-router-dom";

export default function ActionLink({ path, children }) {
  return (
    <Link className="action-link" to={path}>
      {children}
    </Link>
  );
}
