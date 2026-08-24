import { NavLink } from 'react-router-dom'

export function RoleSwitch() {
  return (
    <div className="role-switch">
      <NavLink to="/cv/general" className={({ isActive }) => `role-pill cursor-target${isActive ? ' active' : ''}`}>
        CV · Ayudante General
      </NavLink>
      <NavLink to="/cv/marketing" className={({ isActive }) => `role-pill cursor-target${isActive ? ' active' : ''}`}>
        CV · Marketing Digital
      </NavLink>
    </div>
  )
}
