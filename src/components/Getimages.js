import React, { useEffect, useState } from "react"

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
        <h1>Loading... </h1>
      ) : (
        <section>
          <h1>New collections!!!</h1>
          <div>
            {images.map((image, index) => {
              ;<Image key={image.id} {...image} />
            })}
          </div>
        </section>
      )}
    </>
  )
}
export default Getimages
