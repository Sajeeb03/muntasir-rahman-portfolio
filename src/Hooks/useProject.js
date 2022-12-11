import { useEffect, useState } from "react"

const useProject = (id) => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("../projects.json")
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
    }, [id])
    return [projects, loading]
}

export default useProject;