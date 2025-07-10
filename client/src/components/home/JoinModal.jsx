import React from 'react'

const JoinModal = () => {
    return (
        <>
            <dialog id="joinModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg mb-3">JOIN GAME</h3>
                    <form action="">
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 flex flex-col items-center justify-center">
                            <div className="carousel w-[60%] h-[100px] mb-4">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                        className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href="#slide4" className="btn btn-circle">❮</a>
                                        <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" className="carousel-item relative w-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                                        className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href="#slide1" className="btn btn-circle">❮</a>
                                        <a href="#slide3" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide3" className="carousel-item relative w-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                                        className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href="#slide2" className="btn btn-circle">❮</a>
                                        <a href="#slide4" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide4" className="carousel-item relative w-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                                        className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href="#slide3" className="btn btn-circle">❮</a>
                                        <a href="#slide1" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>

                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                </svg>
                                <input
                                    type="text"
                                    required
                                    placeholder="Username"
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minlength="3"
                                    maxlength="30"
                                    title="Only letters, numbers or dash"
                                />
                            </label>

                            <div className="w-full flex justify-center items-center">
                                <div className="divider w-2/3"></div>
                            </div>

                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                </svg>
                                <input
                                    type="text"
                                    required
                                    placeholder="Room Code"
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minlength="3"
                                    maxlength="30"
                                    title="Only letters, numbers or dash"
                                />
                            </label>

                            <button className="btn btn-neutral mt-4">Join</button>
                        </fieldset>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default JoinModal