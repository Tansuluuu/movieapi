import Header from "../Header";

const Layout = ({children, fullPage}) => {
  return(
        <>
            <Header fullPage={fullPage}/>
            <main>
                {children}
            </main>
        </>
  )
}
export default Layout