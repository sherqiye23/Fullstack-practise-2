import { Container } from "react-bootstrap"
import { useDeleteConsultingMutation, useGetConsultingsQuery } from "../../redux/Slices/Consulting"
import { IoSettingsOutline } from "react-icons/io5";
import { BsClipboardData } from "react-icons/bs";
import { LuHandshake } from "react-icons/lu";
import Slider from "../../components/Slider";
import Helmet from "react-helmet"
import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
export default function Home() {
    let { data, isLoading, refetch } = useGetConsultingsQuery()
    let [alldata, setAlldata] = useState([])

    useEffect(() => {
        if (!isLoading) {
            setAlldata(data)
        }
    }, [data])

    let [deleteConsulting] = useDeleteConsultingMutation()
    let { favorites, setFavorites } = useContext(FavoritesContext)

    // delete
    const handleDelete = async (id) => {
        await deleteConsulting(id)
        refetch()
    }

    // add to favs
    const handleFavorites = (item) => {
        let findFavs = favorites.find(favorite => favorite._id == item._id)
        if (findFavs) {
            alert("Bu kart sizin favorites sehifenizde movcuddur");
        } else {
            setFavorites([...favorites, item])
        }
    }

    // search
    const handleSearch = (e) => {
        const searchValue = e.trim().toLowerCase();
        if (searchValue == "") {
            setAlldata(data)
        } else {
            let searchName = alldata.filter((item) => item.name.toLowerCase().startsWith(searchValue))
            setAlldata(searchName)
        }
    }

    // sort
    const handleSort = (e) => {
        switch (e.target.value) {
            case "a-z":
                let sortedAZ = alldata.toSorted((a, b) => a.name.localeCompare(b.name))
                setAlldata(sortedAZ);
                break;
            case "z-a":
                let sortedZA = alldata.toSorted((a, b) => b.name.localeCompare(a.name))
                setAlldata(sortedZA);
                break;

            default:
                setAlldata(data)
                break;
        }
    }


    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {
                isLoading ? (
                    <div className="h-[83vh] flex items-center justify-center">
                        <h1 className="font-semibold text-5xl">...Loading</h1>
                    </div>
                ) : (
                    <>
                        <div>
                            <Slider />
                        </div>

                        <div className="py-[100px] bg-[#F7F7F7]">
                            <Container>
                                <div className="text-[#FF2548] flex items-center gap-2">
                                    <div className="w-[40px] h-[2px]  bg-[#FF2548]"></div>
                                    <span>OUR TOP SERVICES</span>
                                </div>
                                <div>
                                    <h1 className="text-5xl text-[#092C3F] my-4 font-bold">Our Best Services</h1>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-white p-5 flex flex-col items-center justift-center text-center">
                                        <div className="text-7xl text-[#FF2548]">
                                            <IoSettingsOutline />
                                        </div>
                                        <h3 className="text-3xl font-bold my-4">Strategy Planning</h3>
                                        <div>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</div>
                                    </div>
                                    <div className="bg-white p-5 flex flex-col items-center justift-center text-center">
                                        <div className="text-7xl text-[#FF2548]">
                                            <BsClipboardData />
                                        </div>
                                        <h3 className="text-3xl font-bold my-4">Insurance Service</h3>
                                        <div>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</div>
                                    </div>
                                    <div className="bg-white p-5 flex flex-col items-center justift-center text-center">
                                        <div className="text-7xl text-[#FF2548]">
                                            <LuHandshake />
                                        </div>
                                        <h3 className="text-3xl font-bold my-4">Audit & Evaluation</h3>
                                        <div>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</div>
                                    </div>
                                </div>
                            </Container>
                        </div>

                        <div className="my-5">
                            <div className="bg-[url('https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/section_bg02.jpg.webp')] py-5">
                                <Container>
                                    <div className="flex items-center justify-between gap-6 flex-col md:flex-row">
                                        <div className="w-full">
                                            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png.webp" alt="." />
                                        </div>
                                        <div>
                                            <div className="text-[#FF2548] text-gray-200 text-xl flex items-center gap-2">
                                                <div className="w-[40px] h-[2px]  bg-[#fff]"></div>
                                                <span>OUR TOP SERVICES</span>
                                            </div>
                                            <div>
                                                <h1 className="text-5xl text-white my-4 font-bold">Our Best Services</h1>
                                            </div>
                                            <p className='text-lg text-white'>
                                                Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.
                                            </p>
                                            <p className='text-gray-200 my-4'>
                                                Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.
                                            </p>
                                            <button className='py-2 px-4 bg-[#ff2548] text-white mt-4'>MORE ABOUT US</button>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>

                        <div className="my-5">
                            <Container>
                                <div className="text-[#FF2548] flex items-center gap-2">
                                    <div className="w-[40px] h-[2px]  bg-[#FF2548]"></div>
                                    <span>OUR PROFESSIONAL MEMBERS</span>
                                </div>
                                <div>
                                    <h1 className="text-5xl text-[#092C3F] my-4 font-bold">Our Team Mambers</h1>
                                </div>
                                <div className="my-2">
                                    <input type="text" className="py-1 px-2 border" onChange={(e) => handleSearch(e.target.value)} />
                                    <select onChange={(e) => handleSort(e)} className="ml-2 px-2 py-1 border">
                                        <option>Sort by name</option>
                                        <option value="a-z">A-Z</option>
                                        <option value="z-a">Z-A</option>
                                    </select>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                    {
                                        alldata.length != 0 ? (
                                            alldata.map((item) => (
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
                                                            <button onClick={() => handleDelete(item._id)} className="bg-gray-500 px-2 py-1 text-white text-lg mr-2">Delete</button>
                                                            <button onClick={() => handleFavorites(item)} className="bg-red-500 px-2 py-1 text-white text-lg">Favorites</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <></>
                                        )
                                    }
                                </div>
                            </Container>
                        </div>

                        <div className="my-5">
                            <Container className="grid gap-3 grid-cols-5">
                                <span>
                                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand1.png.webp" />
                                </span>
                                <span>
                                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand2.png.webp" />
                                </span>
                                <span>
                                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand3.png.webp" />
                                </span>
                                <span>
                                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand4.png.webp" />
                                </span>
                                <span>
                                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand5.png.webp" />
                                </span>
                            </Container>
                        </div>
                    </>
                )
            }
        </>
    )
}