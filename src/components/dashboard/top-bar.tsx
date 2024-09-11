import { Icons } from "../icons"
import { Input } from "../ui/input"

function TopBar() {
    return (
        <div className="sticky left-0 right-0 top-0 z-20 p-4 my-2 mr-2 rounded-lg bg-slate-950 w-max-screen">
                <div className="flex flex-row justify-between items-center">
                    <div className=" bg-gray-600 px-4 py-2 items-center rounded-xl">
                    <Input icon={Icons.search} placeholder="Search anything"  />
                    </div>
                    <div className="flex flex-row justify-between items-center my-2 gap-12">
                        <img src={Icons.message} alt="message" />
                        <img src={Icons.vector} alt="vector" />
                        <img src={Icons.avatar} alt="avatar" className="h-6 rounded-full"/>
                    </div>
            </div>
            
        </div>
    )
}
export default TopBar