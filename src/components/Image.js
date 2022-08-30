import React from "react"

export default function Image(props) {
  return (
    <>
      {console.log("hello")}
      <article className="shadow-md bg-white rounded-3xl p-5">
        <img
          src={props.urls.full}
          alt={props.user.name}
          loading="lazy"
          className="h-60 w-full object-cover rounded-2xl md:h-80"
        />
      </article>
    </>
  )
}
