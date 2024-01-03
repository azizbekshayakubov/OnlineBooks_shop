export default function CheckAuth({ userRole, role, children }) {
  return role.some((el) => el === userRole) ? children : <p>Not found</p>;
}
