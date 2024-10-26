import "../globals.css";


function AuthLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div lang="fa" dir="rtl">
        {children}
    </div>
  )
}

export default AuthLayout