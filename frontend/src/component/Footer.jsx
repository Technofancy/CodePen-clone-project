// import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/images/codepen_logo.png"

const Footer = () => {
  return (
    <footer className="flex justify-between bg-black w-full p-8 text-white">
                        {/* Left/First */}
                        <div className="flex flex-col justify-start gap-2">
                            <div className="flex gap-4">
                                <h3>Codepen</h3>
                                <div className="flex gap-2 text-gray-500">
                                    <p>About</p>
                                    <p>Blog</p>
                                    <p>Podcast</p>
                                    <p>Documentation</p>
                                    <p>Support</p>
                                    <p>Advertise</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <h3>For</h3>
                                <div className="flex gap-2 text-gray-500">
                                    <p>Teams</p>
                                    <p>Education</p>
                                    <p>Privacy</p>
                                    <p>Embeds</p>
                                    <p>Asset Hosting</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <h3>Social</h3>
                                <div className="flex gap-2 text-gray-500">
                                    <p>YouTube</p>
                                    <p>X</p>
                                    <p>Instagram</p>
                                    <p>Mastodon</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <h3>Community</h3>
                                <div className="flex gap-2 text-gray-500">
                                    <p>Spark</p>
                                    <p>Challenges</p>
                                    <p>Topics</p>
                                    <p>Code of Conduct</p>
                                </div>
                            </div>
                        </div>

                        {/* Right/Second */}
                        <div className="flex flex-col justify-end gap-3">
                            <Link to={"/home"}>
                                <img src={logo} alt="codepen logo" />
                            </Link>
                            <div className="flex flex-col gap-1 justify-end text-end text-xs text-gray-500">
                                <p>C2024 CodePen</p>
                                <p>Demo or it didn&apos;t happen.</p>
                                <div className="flex -mt-2.5 items-center">
                                    <Link className="hover:text-white">
                                        Terms of Services
                                    </Link>
                                    <span className="mb-2 mx-[1px] text-xl">.</span>
                                    <Link className="hover:text-white">
                                        Privacy Policy
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </footer>
  )
}

export default Footer