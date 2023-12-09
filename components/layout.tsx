import Navbar from "@/components/navbar/navbar";

export const Layout = (param:any) => {
    let childs = param.children;

    return (
        <div className="grid">
            <div>
                <Navbar/>
            </div>
            <div className="main">
                {childs}
            </div>
        </div>
        
    )
}