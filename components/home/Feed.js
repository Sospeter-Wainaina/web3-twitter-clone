import { BsStars } from "react-icons/bs"

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#115202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,

}

export default function Feed(){

    return (

        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />

            </div>
        </div>
        
    )

}