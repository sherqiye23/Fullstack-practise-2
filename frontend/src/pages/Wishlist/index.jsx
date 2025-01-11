import { useContext } from "react"
import { FavoritesContext } from "../../context/FavoritesContext"
import { Container } from "react-bootstrap";

export default function Wishlist() {

    let { favorites, setFavorites } = useContext(FavoritesContext)
    console.log(favorites);

    const handleDelete = (id) => {
        let filtered = favorites.filter((fav) => fav._id != id)
        setFavorites(filtered)
    }

    return (
        <>
            {
                favorites.length != 0 ? (
                    <Container className="my-5">
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {
                                favorites.map((item) => (
                                    <div key={item._id}>
                                        <div className="w-full">
                                            <img className="w-full" src={item.image} />
                                        </div>
                                        <div className="p-4 bg-white ">
                                            <div className="font-bold text-3xl">{item.name}</div>
                                            <div className="my-3 text-[#FF2548] flex items-center gap-2">
                                                <div className="w-[20px] h-[2px] bg-[#FF2548]"></div>
                                                <span>{item.job}</span>
                                            </div>
                                            <div>
                                                <button onClick={() => handleDelete(item._id)} className="bg-gray-500 px-2 py-1 text-white text-lg">Delete from wishlist</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Container>
                ) : (
                    <div className="flex items-center justify-center h-[82vh]">
                        <h1 className="font-bold text-5xl">Sizin wishlistiniz boşdur!</h1>
                    </div>
                )
            }
        </>
    )
}