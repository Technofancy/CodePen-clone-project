import React from "react";

// Icons
import { BsSlashSquareFill } from "react-icons/bs";
import { TbSquareAsteriskFilled } from "react-icons/tb";
import { PiBracketsRoundFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

// SplitPane
import SplitPane from 'react-split-pane'
// codemirror
import CodeMirror from '@uiw/react-codemirror';
// import { oneDark } from '@codemirror/theme-one-dark';
// import { javascript } from '@codemirror/lang-javascript';

const PenSplitPane = () => {
    const r = React;

    const [html, setHtml] = r.useState("");
    const [css, setCss] = r.useState("");
    const [js, setJs] = r.useState("");
    const [output, setOutput] = r.useState("");

    r.useEffect(() => {
        updateOutput();
    });

    const updateOutput = () => {
        const combinedOutput = `
        <html>
        <head>
        <style>${css}</style>
        </head>
        <body>
        ${html}
        <script>${js}</script>
        </body>
        </html>
        `
        setOutput(combinedOutput);
    };


    return (
        // Horizontal split pane
        <SplitPane split="horizontal" minSize={100} maxSize={-100} defaultSize="66%">

            {/* Vertical split pane */}
            <div className=''>
                <SplitPane split='vertical' minSize={0} defaultSize="35%">

                    {/* For HTML */}
                    <div className='w-full h-full bg-gray-600 flex'>

                        {/* left vertical bar : just style */}
                        <div className='h-full w-4 bg-black'></div>

                        {/* right : main html coding pannel */}
                        <div className='flex flex-col w-full'>

                            {/* top part : HTML */}
                            <div className='flex'>
                                <div className='px-3 py-1 flex items-center justify-start gap-1 bg-gray-600 border-t-gray-500 border-t-[3px] text-white'>
                                    <BsSlashSquareFill className='text-red-500 text-lg rounded-[4px]' />
                                    <p className='font-semibold'>HTML</p>
                                </div>
                                <div className='bg-black text-white text-xs flex items-center justify-end w-full gap-1 px-3'>
                                    <div className='bg-gray-600 rounded-sm px-2 py-1'><IoMdSettings /></div>
                                    <div className='bg-gray-600 rounded-sm px-2 py-1'><FaChevronDown /></div>
                                </div>
                            </div>

                            {/* code editor part */}
                            <div>
                                <CodeMirror language={html} className="custom-theme" value={html} onChange={setHtml} />
                            </div>
                        </div>
                    </div>

                    <SplitPane split="vertical" minSize={0} defaultSize="50%">

                        {/* For CSS */}
                        <div className='w-full h-full bg-gray-600'>
                            <div className='flex flex-col w-full'>

                                {/* top part : CSS */}
                                <div className='flex'>
                                    <div className='px-3 py-1 flex items-center justify-start gap-1 bg-gray-600 border-t-gray-500 border-t-[3px] text-white'>
                                        <TbSquareAsteriskFilled className='text-sky-500 text-xl rounded-[4px]' />
                                        <p className='font-semibold'>CSS</p>
                                    </div>
                                    <div className='bg-black text-white text-xs flex items-center justify-end w-full gap-1 px-3'>
                                        <div className='bg-gray-600 rounded-sm px-2 py-1'><IoMdSettings /></div>
                                        <div className='bg-gray-600 rounded-sm px-2 py-1'><FaChevronDown /></div>
                                    </div>
                                </div>

                                {/* code editor part */}
                                <div>
                                    <CodeMirror language={css} className="custom-theme"
                                        value={css} onChange={setCss} />
                                </div>
                            </div>
                        </div>

                        {/* For JS */}
                        <div className='w-full h-full max-h-f bg-gray-600'>
                            <div className='flex flex-col w-full'>

                                {/* top part : JS */}
                                <div className='flex'>
                                    <div className='px-3 py-1 flex items-center justify-start gap-1 bg-gray-600 border-t-gray-500 border-t-[3px] text-white'>
                                        <PiBracketsRoundFill className='text-yellow-500 text-2xl rounded-[4px]' />
                                        <p className='font-semibold'>JS</p>
                                    </div>
                                    <div className='bg-black text-white text-xs flex items-center justify-end w-full gap-1 px-3'>
                                        <div className='bg-gray-600 rounded-sm px-2 py-1'><IoMdSettings /></div>
                                        <div className='bg-gray-600 rounded-sm px-2 py-1'><FaChevronDown /></div>
                                    </div>
                                </div>

                                {/* code editor part */}
                                <div>
                                    <CodeMirror language={js} className="custom-theme" value={js} onChange={setJs} />
                                </div>
                            </div>
                        </div>

                    </SplitPane>

                </SplitPane>
            </div>

            {/* Output */}
            <iframe
                title="Result"
                srcDoc={output}
                // sandbox="allow-scripts"
                style={
                    {
                        border: "1px solid gray",
                        width: "100%",
                        height: "100%",
                    }
                }
            />

        </SplitPane>


    )
}

export default PenSplitPane