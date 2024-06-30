// import React from 'react'
import PenHeader from "../component/PenHeader"
import PenSplitPane from "../component/PenSplitPane";

const Pen = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden relative">

        {/* Penheader : horizontal bar at top of pen */}
        <PenHeader />

        {/* SplitPanes for actual code editing area */}
        <div className="flex-grow h-full w-full relative">
          <PenSplitPane />
        </div>

        {/* horizontal bar : pen foot */}
        <footer className="w-full flex-none bg-gray-600 text-white flex gap-1 items-center px-2 py-1">
          <p className="text-xs bg-gray-700 rounded-sm py-1 px-2 items-center cursor-pointer">Console</p>
          <p className="text-xs bg-gray-700 rounded-sm py-1 px-2 items-center cursor-pointer">Assets</p>
          <p className="text-xs bg-gray-700 rounded-sm py-1 px-2 items-center cursor-pointer">Shortcuts</p>
        </footer>

      </div>
    </>
  )
}

export default Pen;