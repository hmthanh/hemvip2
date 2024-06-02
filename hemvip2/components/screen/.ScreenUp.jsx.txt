
"use client"
import React from 'react'

export default function ScreenUp() {
    return (
        <div id="mainUp"
        >
            <div>
                <div id="trWs"
                >
                    <div className="stopButton"
                    >
                        <button
                            data-role="button"
                            data-inline="true"
                            id="buttonStop"
                            onclick=""
                            className=" ui-btn ui-btn-inline ui-shadow ui-corner-all"
                        >
                            Stop
                        </button>
                    </div>
                    {/* <button data-role="button" data-inline="true" id="buttonStop" onclick="pageManager.pages[1].mushraAudioControl.stop();" className=" ui-btn ui-btn-inline ui-shadow ui-corner-all"
                    >Stop</button>     
                                        </div> */}
                    <div>
                        <div id="wavediv"
                        >
                            <div>
                                <div valign="bottom"
                                >
                                    <div id="sliderLim"
                                    >
                                        <div id="div_lower_limit" style={{ opacity: 1 }}>
                                            <div
                                                className="ui-input-text ui-body-inherit ui-corner-all ui-mini ui-state-disabled ui-shadow-inset"
                                                style={{ opacity: 1 }}
                                            >
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="lowerLim"
                                                    className="limits"
                                                    data-inline="true"
                                                    data-mini="true"
                                                    disabled="disabled"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div styles={{ width: '999px' }}
                                        >
                                            <div id="parentWavesurfer"
                                            >
                                                <canvas
                                                    id="canvas"
                                                    height="154"
                                                    styles={{ position: 'relative', zIndex: 0 }}
                                                    width="937"
                                                ></canvas>
                                            </div>
                                            <div>
                                                <div id="slider" className="noUi-target noUi-ltr noUi-horizontal"
                                                >
                                                    <div className="noUi-base"
                                                    >
                                                        <div className="noUi-origin" styles={{ left: '67.3425%' }}
                                                        >
                                                            <div
                                                                className="noUi-handle noUi-handle-lower"
                                                                data-handle="0"
                                                                styles={{ zIndex: 5 }}
                                                            ></div>
                                                        </div>
                                                        <div className="noUi-connect" styles={{ left: '67.3425%', right: '0%' }}
                                                        ></div>
                                                        <div className="noUi-origin" styles={{ left: '100%' }}
                                                        >
                                                            <div
                                                                className="noUi-handle noUi-handle-upper"
                                                                data-handle="1"
                                                                styles={{ zIndex: 4 }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sliderLim"
                                    >
                                        <div id="div_upper_limit" style={{ opacity: 1 }}>
                                            <div
                                                className="ui-input-text ui-body-inherit ui-corner-all ui-mini ui-state-disabled ui-shadow-inset"
                                                style={{ opacity: 1 }}
                                            >
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="upperLim"
                                                    className="limits"
                                                    data-inline="true"
                                                    data-mini="true"
                                                    disabled="disabled"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
