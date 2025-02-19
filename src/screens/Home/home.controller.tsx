import { useCallback, useEffect, useState } from "react"
import { ShowModel } from "../../common/models/show.model"
import { fetchShows } from "../../repositories/shows/shows.repository"


const useHomeController = () => {

    const [shows, setShows] = useState<Array<ShowModel>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)


    const loadShows = useCallback(
        async (page: number, shouldShowRefresh?: boolean) => {
            if (!hasMore && page !== 0) return

            try {
                setLoading(true)
                if (shouldShowRefresh) setIsRefreshing(true)

                const response = await fetchShows({page})

                if (page === 0) {
                    setHasMore(true)
                    setShows(response)
                    setCurrentPage(1)
                } else {
                    setShows((old) => [...old, ...response])
                    setCurrentPage((old) => old + 1)
                }
            } catch (error:any) {
                if (error.response.status === 404) {
                    setHasMore(false)
                    console.error(error)
                }
            } finally {
                setLoading(false)
                if (shouldShowRefresh) setIsRefreshing(false)
            }
    }, [hasMore])

    // para acompanhar o ciclo de vida do component,
    // vai automaticamente carregar toda pagina
    useEffect(() => {
        loadShows(0)
    }, [loadShows])


    // Bind com a view
    return {
        shows,
        loading,
        isRefreshing,
        loadShows,
        currentPage
    }
}

export default useHomeController