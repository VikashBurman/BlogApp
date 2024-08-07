import React from 'react'

const Post = () => {
  return (
    <div className=" px-2 ">
        <article className="mx-auto max-sm:px-4 my-10 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow-md hover:shadow-lg cursor-pointer md:max-w-3xl md:flex-row md:items-center">
          <div className="shrink-0 my-4 md:mr-7 md:max-w-sm ">
            <img
           
              className="rounded-xl "
              src="https://images.unsplash.com/photo-1663287695452-bf59337d8746?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              alt=""
            />
          </div>
          <div className="sm:py-8">
            <a href="#" className="mb-4 max-sm:mb-2 block text-lg md:text-xl font-medium text-gray-700">
              Long walks are helpful in decreasing stress levels
            </a>
            <p className="mb-6 max-sm:mb-3 text-gray-500 max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit illum consequatur quia doloremque! Similique eius
              enim nostrum totam.
            </p>
            <div className="flex items-center">
              {/* <img
                className="h-10 w-10 rounded-full object-cover"
                src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
                alt="Simon Lewis"
              /> */}
              <p className=" w-56">
                <a className="block font-medium text-gray-700 max-sm:text-sm">
                  Johanson Levinsiki
                </a>
                <time className="text-sm max-sm:text-xs text-gray-400">2023-01-06 16:45</time>
              </p>
            </div>
          </div>
        </article>
      </div>
  )
}

export default Post