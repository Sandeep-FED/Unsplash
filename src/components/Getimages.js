import React, { useEffect, useState } from "react"
import Image from "./Image"

function Getimages() {
  const [images, setimages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      )
      const data = await response.json()
      setimages(data)
    }
    fetchImages()
  }, [])
  console.log(images)

  return (
    <>
      {!images ? (
        <h1 className="flex text-center justify-center h-screen font-bold text-4xl items-center text-slate-800">
          Loading...
        </h1>
      ) : (
        <section className="px-5 container mx-auto">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-16 text-slate-800 capitalize">
            personalized for you
          </h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <Image {...image} key={image.id} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
export default Getimages
