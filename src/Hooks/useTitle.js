import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -- lawyer`;
    }, [title])
}
export default useTitle;