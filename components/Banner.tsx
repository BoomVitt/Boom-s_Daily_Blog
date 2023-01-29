
 function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between
    font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl"> Boom's Daily Blog</h1>
            <h2 className="mt-5 md:mt-3">
                {"\n"}
                Welcome to{" "}
                <span className="underline decoration-4 decoration-[#F7AB0A]">
          my place! 
                </span>{"    "}
                I'm excited to have you here and to share my memories content with you. Our blog is included a wide range of topics of me. 
            </h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            This is a blog where I write about my journey as 
            a developer and Biomedical Engineering student. 
        </p>
    </div>
  )
}

export default Banner